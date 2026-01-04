'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Activity,
  Clock3,
  ExternalLink,
  GitBranch,
  GitFork,
  Github,
  Loader2,
  RefreshCw,
  Star,
} from 'lucide-react';

type Overview = {
  totalRepos: number;
  totalStars: number;
  totalForks: number;
  totalCommits: number;
};

type TopLanguage = {
  name: string;
  count: number;
};

type FeaturedRepo = {
  name: string;
  description: string | null;
  stars: number;
  forks: number;
  url: string;
  homepage?: string | null;
  language?: string | null;
  updatedAt: string;
};

type ActivityItem = {
  id: string;
  type: string;
  repo: string;
  description: string;
  createdAt: string;
  url?: string;
};

type GitHubResponse = {
  overview: Overview;
  topLanguages: TopLanguage[];
  featuredRepos: FeaturedRepo[];
  recentActivity: ActivityItem[];
};

function formatRelativeTime(dateString: string) {
  const formatter = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });
  const date = new Date(dateString);
  const diffMs = date.getTime() - Date.now();
  const diffMinutes = Math.round(diffMs / 60000);
  const absMinutes = Math.abs(diffMinutes);

  if (absMinutes < 60) return formatter.format(diffMinutes, 'minute');
  const diffHours = Math.round(diffMinutes / 60);
  if (Math.abs(diffHours) < 48) return formatter.format(diffHours, 'hour');
  const diffDays = Math.round(diffHours / 24);
  return formatter.format(diffDays, 'day');
}

function formatNumber(value: number) {
  return Intl.NumberFormat('en', { notation: 'compact' }).format(value);
}

export default function GitHubActivitySection() {
  const [data, setData] = useState<GitHubResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/github/overview');
      if (!response.ok) {
        throw new Error('GitHub API request failed');
      }

      const json = (await response.json()) as GitHubResponse;
      setData(json);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : 'Unable to load GitHub data';
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const languageTotal = useMemo(() => {
    if (!data) return 0;
    return data.topLanguages.reduce((sum, lang) => sum + lang.count, 0);
  }, [data]);

  return (
    <div className="mb-12">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 mb-3">
            <Github className="w-4 h-4 text-brand-cyan" />
            <span className="text-sm font-medium text-brand-cyan">
              Live GitHub Data
            </span>
          </div>
          <h2 className="text-3xl font-bold text-white">GitHub Activity</h2>
          <p className="text-circuit-silver">
            Real-time snapshot of my public repos, languages, and recent commits.
          </p>
        </div>
        <button
          onClick={fetchData}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-neural-slate/60 border border-circuit-silver/30 text-circuit-silver hover:text-brand-cyan hover:border-brand-cyan/50 transition-colors"
        >
          {loading ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <RefreshCw className="w-4 h-4" />
          )}
          <span className="text-sm font-semibold">Refresh</span>
        </button>
      </div>

      {error && (
        <div className="mb-6 rounded-2xl border border-error/30 bg-error/10 p-4 text-error">
          {error}. Rate limits may apply—please try again in a moment.
        </div>
      )}

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[...Array(4)].map((_, idx) => (
            <div
              key={idx}
              className="h-32 rounded-2xl bg-neural-slate/60 border border-circuit-silver/20 animate-pulse"
            />
          ))}
        </div>
      ) : (
        data && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  label: 'Public Repos',
                  value: data.overview.totalRepos,
                  icon: Github,
                },
                {
                  label: 'Total Stars',
                  value: data.overview.totalStars,
                  icon: Star,
                },
                {
                  label: 'Total Forks',
                  value: data.overview.totalForks,
                  icon: GitFork,
                },
                {
                  label: 'Recent Commits (approx.)',
                  value: data.overview.totalCommits,
                  icon: Activity,
                },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="relative overflow-hidden rounded-2xl bg-neural-slate/60 border border-circuit-silver/20 p-5"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative flex items-start justify-between">
                    <div>
                      <p className="text-sm text-circuit-silver mb-1">
                        {stat.label}
                      </p>
                      <div className="text-3xl font-bold text-white">
                        {formatNumber(stat.value)}
                      </div>
                    </div>
                    <div className="p-3 rounded-xl bg-brand-cyan/15 text-brand-cyan">
                      <stat.icon className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
              <div className="rounded-2xl bg-neural-slate/60 border border-circuit-silver/20 p-6 xl:col-span-2">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      Language Footprint
                    </h3>
                    <p className="text-sm text-circuit-silver">
                      Dominant languages across public repositories
                    </p>
                  </div>
                  <GitBranch className="w-5 h-5 text-brand-cyan" />
                </div>

                <div className="space-y-3">
                  {data.topLanguages.length === 0 ? (
                    <p className="text-sm text-circuit-silver">
                      No languages detected yet.
                    </p>
                  ) : (
                    data.topLanguages.map((lang) => {
                      const percentage =
                        languageTotal === 0
                          ? 0
                          : Math.round((lang.count / languageTotal) * 100);
                      return (
                        <div key={lang.name}>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-white font-semibold">
                              {lang.name}
                            </span>
                            <span className="text-circuit-silver text-sm">
                              {percentage}% of repos
                            </span>
                          </div>
                          <div className="w-full h-2 rounded-full bg-neural-gray/60 overflow-hidden">
                            <div
                              className="h-full rounded-full bg-gradient-to-r from-brand-cyan to-brand-blue-electric"
                              style={{ width: `${percentage}%` }}
                            />
                          </div>
                        </div>
                      );
                    })
                  )}
                </div>
              </div>

              <div className="rounded-2xl bg-neural-slate/60 border border-circuit-silver/20 p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      Recent Activity
                    </h3>
                    <p className="text-sm text-circuit-silver">
                      Last public GitHub events
                    </p>
                  </div>
                  <Clock3 className="w-5 h-5 text-brand-cyan" />
                </div>

                <div className="space-y-4">
                  {data.recentActivity.slice(0, 6).map((item) => (
                    <div
                      key={item.id}
                      className="rounded-xl border border-circuit-silver/20 bg-neural-gray/60 p-4"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <div className="text-sm font-semibold text-white">
                          {item.type}
                        </div>
                        <span className="text-xs text-circuit-silver">
                          {formatRelativeTime(item.createdAt)}
                        </span>
                      </div>
                      <div className="text-sm text-brand-cyan truncate">
                        {item.repo}
                      </div>
                      <p className="text-sm text-circuit-silver mt-1 line-clamp-2">
                        {item.description}
                      </p>
                      {item.url && (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-brand-cyan mt-2"
                        >
                          View
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Featured Repositories
                  </h3>
                  <p className="text-sm text-circuit-silver">
                    Six marquee projects with live metrics
                  </p>
                </div>
                <a
                  href="https://github.com/connordmcneely96"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-brand-cyan hover:underline"
                >
                  View Profile
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {data.featuredRepos.map((repo) => (
                  <motion.div
                    key={repo.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="group relative overflow-hidden rounded-2xl bg-neural-slate/60 border border-circuit-silver/20 p-5 hover:border-brand-cyan/50 hover:shadow-glow-cyan transition-all"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/5 via-transparent to-brand-blue-electric/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-bold text-white group-hover:text-brand-cyan transition-colors">
                          {repo.name}
                        </h4>
                        <div className="flex items-center gap-2 text-xs text-circuit-silver">
                          <Star className="w-4 h-4 text-warning" />
                          {repo.stars}
                          <GitFork className="w-4 h-4 text-brand-cyan" />
                          {repo.forks}
                        </div>
                      </div>
                      <p className="text-sm text-circuit-silver mb-3 line-clamp-2">
                        {repo.description || 'Active development repository'}
                      </p>
                      <div className="flex items-center gap-3 text-xs text-circuit-silver mb-3">
                        {repo.language && (
                          <span className="px-2 py-1 rounded-full bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20">
                            {repo.language}
                          </span>
                        )}
                        <span>Updated {formatRelativeTime(repo.updatedAt)}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <a
                          href={repo.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-circuit-silver/10 border border-circuit-silver/30 text-white text-sm hover:border-brand-cyan/50"
                        >
                          <Github className="w-4 h-4" />
                          Code
                        </a>
                        {repo.homepage && (
                          <a
                            href={repo.homepage}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-brand-cyan to-brand-blue-electric text-white text-sm shadow-glow-cyan"
                          >
                            Live
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}

