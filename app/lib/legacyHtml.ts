import { readFile } from 'node:fs/promises'
import path from 'node:path'

const LEGACY_DIR = path.join(process.cwd(), 'apps', 'leadership-legacy')

const LINK_MAP: Record<string, string> = {
  'index.html': '/',
  'about.html': '/about',
  'coaching.html': '/coaching',
  'portfolio.html': '/portfolio',
  'community.html': '/community',
  'dashboard.html': '/dashboard',
  'contact.html': '/contact',
}

function rewriteLinks(html: string): string {
  return html.replace(/href="([^"]+)"/g, (full, href: string) => {
    const mapped = LINK_MAP[href]
    if (mapped) return `href="${mapped}"`
    return full
  })
}

export async function getLegacyMainHtml(filename: keyof typeof LINK_MAP | 'dashboard.html'): Promise<string> {
  const filePath = path.join(LEGACY_DIR, filename)
  const html = await readFile(filePath, 'utf8')

  const match = html.match(/<main>([\s\S]*?)<\/main>/i)
  if (!match) {
    throw new Error(`Could not find <main> in legacy file: ${filename}`)
  }

  return rewriteLinks(match[1])
}

export async function getLegacyAssetText(filename: string): Promise<string> {
  const filePath = path.join(LEGACY_DIR, filename)
  return await readFile(filePath, 'utf8')
}
