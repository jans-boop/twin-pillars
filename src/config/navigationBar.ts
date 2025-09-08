// Navigation Bar
// ------------
// Description: The navigation bar data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface NavSubItem {
	name: string
	link: string
}

export interface NavItem {
	name: string
	link: string
	submenu?: NavSubItem[]
}

export interface NavAction {
	name: string
	link: string
	style: string
	size: string
}

export interface NavData {
	logo: Logo
	navItems: NavItem[]
	navActions: NavAction[]
}

export const navigationBarData: NavData = {
	logo: {
		src: '/logo.png',
		alt: 'Your One-Stop Valuation Partner',
		text: ''
	},
	navItems: [
		{ name: 'Home', link: '/' },
		{ name: 'About Us', link: '/#about-us' },
		{
			name: 'Services',
			link: '/#services',
			submenu: [
				{ name: 'Machinery and Equipment Valuation', link: '/machinery-and-equipment-valuation' },
				{ name: 'Business Valuation', link: '/business-valuation' },
				{ name: 'Real Estate Valuation', link: '/real-estate-valuation' }
			]
		},
		{ name: 'Team', link: '/#team' },
		{ name: 'Contact', link: '/#contact' },
		{ name: 'Social Media', link: '/#social-media' }
	],
	navActions: []
}
