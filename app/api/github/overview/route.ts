import { NextResponse } from 'next/server';

// This route is exported at build time; refresh every 30 minutes to keep data reasonably fresh.
export const dynamic = 'force-static';
export const revalidate = 1800;

const GITHUB_USER = 'connordmcneely96';
const GITHUB_API = 'https://api.github.com';

const FEATURED_REPOS = [
  'inner-animals-ai-dashboard',
  'LeadershipLegacy',
  'Southern-Pets-Animal-Rescue-client-project',
  'AI_Powered_Health_-_Fitness_Coach',
  'RAG-Q-A-for-Mechanical-Engineers',
  'CAD_Autonomous_Engine',
];

type GitHubRepo = {
  name: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
  homepage?: string | null;
  language?: string | null;
  updated_at: string;
};

type GitHubEvent = {
  id: string;
  type: string;
  repo?: { name?: string };
  created_at?: string;
  payload?: {
    size?: number;
    commits?: { message?: string }[];
    pull_request?: { title?: string; html_url?: string };
  };
};

const defaultHeaders = {
  'User-Agent': 'connor-portfolio-dashboard',
  Accept: 'application/vnd.github+json',
};

async function fetchJson<T>(url: string) {
  const response = await fetch(url, {
    headers: defaultHeaders,
    next: { revalidate: 1800 },
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(`GitHub API error ${response.status}: ${message}`);
  }

  return (await response.json()) as T;
}

async function getRepoDetails(
  name: string,
  cache: GitHubRepo[]
): Promise<GitHubRepo | null> {
  const cached = cache.find(
    (repo) => repo.name.toLowerCase() === name.toLowerCase()
  );
  if (cached) return cached;

  try {
    return await fetchJson<GitHubRepo>(
      `${GITHUB_API}/repos/${GITHUB_USER}/${name}`
    );
  } catch (error) {
    console.warn(`Unable to load repo ${name}:`, error);
    return null;
  }
}

export async function GET() {
  try {
    const [user, repos, events] = await Promise.all([
      fetchJson<{ public_repos: number }>(`${GITHUB_API}/users/${GITHUB_USER}`),
      fetchJson<GitHubRepo[]>(
        `${GITHUB_API}/users/${GITHUB_USER}/repos?per_page=100&sort=updated`
      ),
      fetchJson<GitHubEvent[]>(
        `${GITHUB_API}/users/${GITHUB_USER}/events/public`
      ),
    ]);

    const totalStars = repos.reduce(
      (sum, repo) => sum + (repo.stargazers_count || 0),
      0
    );
    const totalForks = repos.reduce(
      (sum, repo) => sum + (repo.forks_count || 0),
      0
    );

    const languageMap = repos.reduce<Record<string, number>>((acc, repo) => {
      if (repo.language) {
        acc[repo.language] = (acc[repo.language] || 0) + 1;
      }
      return acc;
    }, {});

    const topLanguages = Object.entries(languageMap)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 8);

    const pushEvents = events.filter((event) => event.type === 'PushEvent');
    const totalCommits = pushEvents.reduce(
      (sum, event) => sum + (event.payload?.size ?? 0),
      0
    );

    const recentActivity = events.slice(0, 10).map((event) => {
      const repoName = event.repo?.name ?? 'Unknown repo';
      const createdAt = event.created_at ?? new Date().toISOString();

      if (event.type === 'PushEvent') {
        const message =
          event.payload?.commits?.[0]?.message ?? 'Pushed new commits';
        return {
          id: event.id,
          type: 'Push',
          repo: repoName,
          description: message,
          createdAt,
        };
      }

      if (event.type === 'PullRequestEvent') {
        const title = event.payload?.pull_request?.title ?? 'Pull request';
        return {
          id: event.id,
          type: 'Pull Request',
          repo: repoName,
          description: title,
          createdAt,
          url: event.payload?.pull_request?.html_url,
        };
      }

      return {
        id: event.id,
        type: event.type.replace('Event', ''),
        repo: repoName,
        description: 'Recent activity',
        createdAt,
      };
    });

    const featuredRepos = (
      await Promise.all(
        FEATURED_REPOS.map((name) => getRepoDetails(name, repos))
      )
    )
      .filter(Boolean)
      .map((repo) => ({
        name: repo!.name,
        description: repo!.description,
        stars: repo!.stargazers_count,
        forks: repo!.forks_count,
        url: repo!.html_url,
        homepage: repo!.homepage,
        language: repo!.language,
        updatedAt: repo!.updated_at,
      }));

    return NextResponse.json({
      overview: {
        totalRepos: user.public_repos ?? repos.length,
        totalStars,
        totalForks,
        totalCommits,
      },
      topLanguages,
      featuredRepos,
      recentActivity,
    });
  } catch (error) {
    console.error('Failed to fetch GitHub overview', error);
    return NextResponse.json(
      { error: 'Unable to load GitHub data right now.' },
      { status: 500 }
    );
  }
}

