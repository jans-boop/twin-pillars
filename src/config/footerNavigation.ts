// Footer Navigation
// ------------
// Description: The footer navigation data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface FooterAbout {
	title: string
	aboutText: string
	logo: Logo
}

export interface SubCategory {
	subCategory: string
	subCategoryLink: string
}

export interface FooterColumn {
	category: string
	subCategories: SubCategory[]
}

export interface SubFooter {
	copywriteText: string
}

export interface FooterData {
	footerAbout: FooterAbout
	footerColumns: FooterColumn[]
	subFooter: SubFooter
}

export const footerNavigationData: FooterData = {
	footerAbout: {
		title: 'Twin Pillars',
		aboutText:
			'Your One-Stop Valuation Partner, skilled valuation professionals unlocking asset value to drive business growth.',
		logo: {
			src: '/logo.svg',
			alt: 'The tailwind astro theme',
			text: 'Twin Pillars'
		}
	},
	footerColumns: [
		{
			category: 'Company',
			subCategories: [
			  {
				subCategory: 'Home',
				subCategoryLink: '/'
			  },
			  {
				subCategory: 'Services',
				subCategoryLink: '/#services'
			  },
			  {
				subCategory: 'About',
				subCategoryLink: '/#about'
			  },
			  {
				subCategory: 'Team',
				subCategoryLink: '/#team'
			  },
			  {
				subCategory: 'Contact',
				subCategoryLink: '/#contact'
			  }
			]
		  },
		{
			category: 'Services',
			subCategories: [
			  {
				subCategory: 'Machinery and Equipment Valuation',
				subCategoryLink: '/machinery-and-equipment-valuation'
			  },
			  {
				subCategory: 'Business Valuation',
				subCategoryLink: '/business-valuation'
			  },
			  {
				subCategory: 'Real Estate Valuation',
				subCategoryLink: '/real-estate-valuation'
			  }
			]
		  },
		  // Add Terms as main nav item
		  {
			category: 'Terms',
			subCategories: [			  {
				subCategory: 'Terms of Service',
				subCategoryLink: '/terms'
			  }]
		  }
	],
	subFooter: {
		copywriteText: '© Twin Pillars 2025.'
	}
}
