import { Metadata } from 'next';
import Home from './Home';
import { CURRENT_YEAR, currentConfig as yearConfig } from '@/config';

const year = CURRENT_YEAR;

const title = yearConfig?.title || `Summit ${year}`;
const location = yearConfig?.location || 'TBD';
const date = yearConfig?.date || 'TBD';

export const metadata: Metadata = {
	metadataBase: new URL('https://summit.womenindefi.org'),
	title: {
		default: `${title} | Women in DeFi Summit ${year}`,
		template: `%s | Women in DeFi Summit ${year}`,
	},
	description: `Join Women in DeFi Summit ${year} - ${location}${date !== 'TBD' ? ` on ${date}` : ''}. Connect with women leaders, innovators, and advocates shaping the future of blockchain, DeFi, and Web3. Register now for speakers, workshops, and networking.`,
	keywords: [
		`women in defi summit ${year}`,
		`blockchain conference ${year}`,
		`web3 conference ${year}`,
		`defi summit ${year}`,
		'women in blockchain',
		'crypto conference',
		'blockchain event',
		'web3 event',
		'defi conference',
		'women in tech summit',
		'cryptocurrency event',
		'blockchain networking',
		location !== 'TBD' ? `${location} blockchain conference` : '',
	].filter(Boolean),
	authors: [{ name: 'Women in DeFi', url: 'https://womenindefi.org' }],
	creator: 'Women in DeFi',
	publisher: 'Women in DeFi',
	robots: {
		index: true,
		follow: true,
		nocache: false,
		googleBot: {
			index: true,
			follow: true,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	alternates: {
		canonical: `https://summit.womenindefi.org/${year}`,
	},
	openGraph: {
		type: 'website',
		url: `https://summit.womenindefi.org/${year}`,
		title: `${title} | Women in DeFi Summit ${year}`,
		description: `Join Women in DeFi Summit ${year} - ${location}${date !== 'TBD' ? ` on ${date}` : ''}. Connect with women leaders in blockchain, DeFi, and Web3.`,
		siteName: 'Women in DeFi Summit',
		images: [
			{
				url: `https://summit.womenindefi.org/seo/summit-${year}-og.jpg`,
				width: 1200,
				height: 630,
				alt: `Women in DeFi Summit ${year} - ${location}`,
			},
		],
		locale: 'en_US',
	},
	twitter: {
		card: 'summary_large_image',
		site: '@womenindefi_org',
		creator: '@womenindefi_org',
		title: `${title} | Women in DeFi Summit ${year}`,
		description: `Join Women in DeFi Summit ${year} - ${location}${date !== 'TBD' ? ` on ${date}` : ''}. Register now for speakers, workshops, and networking.`,
		images: [`https://summit.womenindefi.org/seo/summit-${year}-og.jpg`],
	},
	other: {
		'event:start_date': date !== 'TBD' ? date : '',
		'event:location': location,
		'og:type': 'website',
		'og:site_name': 'Women in DeFi Summit',
		'schema:Event': JSON.stringify({
			'@context': 'https://schema.org',
			'@type': 'Event',
			name: `Women in DeFi Summit ${year}`,
			description: `Join Women in DeFi Summit ${year} - the premier conference for women in blockchain, DeFi, and Web3.`,
			startDate: date !== 'TBD' ? date : undefined,
			location:
				location !== 'TBD'
					? {
							'@type': 'Place',
							name: location,
						}
					: undefined,
			organizer: {
				'@type': 'Organization',
				name: 'Women in DeFi',
				url: 'https://womenindefi.org',
			},
			url: `https://summit.womenindefi.org/${year}`,
		}),
	},
};

export default Home;
