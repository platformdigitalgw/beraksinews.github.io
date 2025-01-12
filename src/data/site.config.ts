interface SiteConfig {
	site: string
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	site: 'https://beraksinewsportal.netlify.app//', // Write here your website url
	author: 'Admin', // Site author
	title: 'Beraksinews', // Site title.
	description: 'Berita Rakyat & Inspirasi', // Description to display in the meta tags
	lang: 'en-ID',
	ogLocale: 'en_ID',
	shareMessage: 'Share this post', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}