import { getLegacyMainHtml } from '../lib/legacyHtml'

export const dynamic = 'force-static'

export default async function CoachingPage() {
  const html = await getLegacyMainHtml('coaching.html')
  return <div dangerouslySetInnerHTML={{ __html: html }} />
}

