import { Inter, Poppins } from 'next/font/google';
import { ReactNode } from 'react';
import './globals.css';

export const poppins = Poppins({
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	variable: '--font-poppins',
	subsets: ['latin', 'latin-ext', 'devanagari'],
});

export const inter = Inter({
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	variable: '--font-inter',
	subsets: [
		'latin',
		'latin-ext',
		'cyrillic',
		'cyrillic-ext',
		'greek',
		'greek-ext',
		'vietnamese',
	],
});

export default function YearLayout({ children }: { children: ReactNode }) {
	return (
		<html lang='en'>
			<body className={`${poppins.className} antialiased`}>{children}</body>
		</html>
	);
}

export function generateStaticParams() {
	return [{ year: '2026' }];
}
