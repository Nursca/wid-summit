'use client';

import { useEffect, useState } from 'react';
import { SVGClient } from '../shared';

const Partner = () => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth < 768);
		};

		checkMobile();
		window.addEventListener('resize', checkMobile);

		return () => window.removeEventListener('resize', checkMobile);
	}, []);

	return (
		<section className='px-6 lg:px-10 bg-[url(/images/texture-bg-full.png)] bg-blend-overlay bg-center bg-cover bg-[#0A74EF] py-8 md:py-20'>
			<h3 className='text-[1.25rem] md:text-[2.5rem] text-white font-semibold tracking-[0.8px] md:tracking-[1.6px] text-center mb-5'>
				Previous Sponsors
			</h3>
			<div className='max-w-350 flex-wrap justify-center items-center mx-auto gap-5 md:gap-[3.75rem_2.5rem] flex'>
				{[
					'bird',
					'mansa',
					'polkadot-africa',
					'stellar',
					'jupiter',
					'afen',
					'roqqu',
				]?.map((logoUrl, index) => (
					<SVGClient
						key={`__item__${index}`}
						beforeInjection={
							isMobile
								? (svg) => {
										const width = svg.getAttribute('width');
										const height = svg.getAttribute('height');
										if (width) svg.setAttribute('width', `${parseFloat(width) * 0.5}`);
										if (height) svg.setAttribute('height', `${parseFloat(height) * 0.5}`);
									}
								: undefined
						}
						src={`/svg/${logoUrl}.svg`}
					/>
				))}
			</div>
			<h3 className='text-[1.25rem] mt-10 md:mt-20 md:text-[2.5rem] text-white font-semibold tracking-[0.8px] md:tracking-[1.6px] text-center mb-5'>
				Previous Partners
			</h3>
			<div className='max-w-350 flex-wrap justify-center items-center mx-auto gap-5 md:gap-[3.75rem_2.5rem] flex'>
				{[
					'careerbuddy',
					'web3ladies',
					'she-code-africa',
					'web3afrika',
					'teen-girls-in-blockchain',
					'wetech',
					'nirvana',
					'her-dao',
				]?.map((logoUrl, index) => (
					<SVGClient
						key={`__item__${index}`}
						beforeInjection={
							isMobile
								? (svg) => {
										const width = svg.getAttribute('width');
										const height = svg.getAttribute('height');
										if (width) svg.setAttribute('width', `${parseFloat(width) * 0.5}`);
										if (height) svg.setAttribute('height', `${parseFloat(height) * 0.5}`);
									}
								: undefined
						}
						src={`/svg/${logoUrl}.svg`}
					/>
				))}
			</div>
		</section>
	);
};

export { Partner };
