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
		aboutText: "Your One-Stop Valuation Partner,<br>skilled valuation professionals<br>unlocking asset value<br>to drive business growth.",
		logo: {
			src: '/logo.png',
			alt: 'Your One-Stop Valuation Partner',
			text: ''
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
				subCategory: 'About Us',
				subCategoryLink: '/#about-us'
			  },
			  {
				subCategory: 'Services',
				subCategoryLink: '/#services'
			  },
			  {
				subCategory: 'Team',
				subCategoryLink: '/#team'
			  },
			  {
				subCategory: 'Contact',
				subCategoryLink: '/#contact'
			  },
			  {
				subCategory: 'Social Media',
				subCategoryLink: '/#social-media'
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
				subCategory: 'Terms of Use',
				subCategoryLink: '/terms'
			  }]
		  }
	],
	subFooter: {
		copywriteText: '© 2025 Twin Pillars – All Rights Reserved.'
	}
}
