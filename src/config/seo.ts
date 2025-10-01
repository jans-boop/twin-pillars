import { configData } from './config'
import { socialLinks } from './socialLinks'

const SITE_URL = 'https://twinpillars.asia'
const DEFAULT_KEYWORDS = [
	'asset valuation',
	'business valuation',
	'machinery valuation',
	'real estate valuation',
	'Singapore valuation firm'
]

const absoluteUrl = (value?: string): string => {
	if (!value) return SITE_URL
	if (value.startsWith('http://') || value.startsWith('https://')) return value
	return new URL(value, SITE_URL).toString()
}

const organizationSchema = {
	'@context': 'https://schema.org',
	'@type': 'Organization',
	name: 'Twin Pillars',
	url: SITE_URL,
	logo: absoluteUrl(configData.logo.src),
	sameAs: socialLinks.map((link) => link.link)
}

const websiteSchema = {
	'@context': 'https://schema.org',
	'@type': 'WebSite',
	name: configData.siteTitle,
	url: SITE_URL
}

export type SeoOptions = {
	title?: string
	description?: string
	image?: string
	canonical?: string
	path?: string
	noindex?: boolean
	type?: 'website' | 'article'
	keywords?: string[]
	structuredData?: Record<string, unknown>[]
}

export type SeoMetadata = {
	title: string
	description: string
	ogImage: string
	canonicalUrl: string
	noindex: boolean
	ogType: 'website' | 'article'
	keywords?: string[]
	structuredData: Record<string, unknown>[]
	siteName: string
}

export const buildSeoMetadata = (options: SeoOptions = {}): SeoMetadata => {
	const {
		title,
		description,
		image,
		canonical,
		path,
		noindex = false,
		type = 'website',
		keywords,
		structuredData = []
	} = options

	const resolvedTitle = title ?? `${configData.siteTitle} | Asset Valuation Experts`
	const formattedTitle = resolvedTitle.includes('Twin Pillars')
		? resolvedTitle
		: `${resolvedTitle} | Twin Pillars`

	const resolvedDescription =
		description ??
		'Skilled valuation professionals unlocking asset value to drive business growth across Asia.'

	const canonicalUrl = absoluteUrl(canonical ?? path ?? '/')
	const ogImage = absoluteUrl(image ?? configData.ogImage)

	const mergedKeywords = keywords && keywords.length > 0 ? keywords : DEFAULT_KEYWORDS
	const mergedStructuredData = [organizationSchema, websiteSchema, ...structuredData]

	return {
		title: formattedTitle,
		description: resolvedDescription,
		ogImage,
		canonicalUrl,
		noindex,
		ogType: type,
		keywords: mergedKeywords,
		structuredData: mergedStructuredData,
		siteName: configData.siteTitle
	}
}

export { absoluteUrl, SITE_URL }
