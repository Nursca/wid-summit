import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { CURRENT_YEAR } from '@/config';

export const metadata: Metadata = {
	metadataBase: new URL('https://summit.womenindefi.org'),
	title: {
		default: 'Women in DeFi Summit | Annual Blockchain & Web3 Conference',
		template: '%s | Women in DeFi Summit',
	},
	description: `Join the Women in DeFi Summit ${CURRENT_YEAR}, the premier annual conference bringing together women leaders, innovators, and advocates in blockchain, DeFi, and Web3. Connect, learn, and shape the future of decentralized finance.`,
	keywords: [
		'women in defi summit',
		'blockchain conference',
		'web3 conference',
		'defi conference',
		'women in blockchain event',
		'crypto conference',
		'blockchain summit',
		'web3 summit',
		'women in tech conference',
		'defi event',
		'cryptocurrency conference',
		'blockchain networking event',
		'women empowerment conference',
		'decentralized finance summit',
	],
	robots: {
		index: false, // Redirect page, no need indexing
		follow: true,
		googleBot: {
			index: false, // Same here
			follow: true,
		},
	},
	alternates: {
		canonical: `https://summit.womenindefi.org/${CURRENT_YEAR}`,
	},
	openGraph: {
		type: 'website',
		url: `https://summit.womenindefi.org/${CURRENT_YEAR}`,
		title: 'Women in DeFi Summit | Annual Blockchain & Web3 Conference',
		description: `Join the Women in DeFi Summit ${CURRENT_YEAR}, the premier annual conference bringing together women leaders, innovators, and advocates in blockchain, DeFi, and Web3.`,
		siteName: 'Women in DeFi Summit',
		images: [
			{
				url: 'https://summit.womenindefi.org/seo/summit-og.jpg',
				width: 1200,
				height: 630,
				alt: 'Women in DeFi Summit - Annual Blockchain Conference',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		site: '@womenindefi_org',
		creator: '@womenindefi_org',
		title: 'Women in DeFi Summit | Annual Blockchain & Web3 Conference',
		description: `Join the Women in DeFi Summit ${CURRENT_YEAR}, the premier annual conference for women in blockchain, DeFi, and Web3.`,
		images: ['https://summit.womenindefi.org/seo/summit-og.jpg'],
	},
};

export default function Home() {
	redirect(`/${CURRENT_YEAR}`);
}
