// Social Links
// ------------
// Description: The social links data for the website.

export interface SocialLink {
	name: string
	link: string
	icon: string
}

export const socialLinks: SocialLink[] = [
	{
		name: 'facebook',
		link: 'https://www.facebook.com/twinpillars.asia/',
		icon: 'fb-icon'
	},
	{
		name: 'linkedin',
		link: 'https://www.linkedin.com/company/twinpillars',
		icon: 'li-icon'
	}
]
