/* eslint-disable @next/next/no-img-element */
import { Hero, Partner, RegistrationModal } from '@/components/26';
import { Button } from '@/components/shared';
import { cn } from '@/lib/utils';
import { Icon } from '@iconify/react';
import { inter } from '../layout';

const Home = () => {
	return (
		<>
			<Hero />

			<section className='px-6 lg:px-20 bg-white py-8 md:py-20'>
				<div className='max-w-350 mx-auto'>
					<h2 className='text-black font-semibold text-center mb-2 md:mb-10 text-[1.25rem] md:text-[2.5rem]'>
						What to expect?
					</h2>
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-[1.4375rem_2.5rem]'>
						{[
							'Keynote Sessions',
							'Panel Discussions',
							'Fireside Chats',
							'Laptop Scholarships',
							'Networking Opportunities',
							'Exhibitions',
						]?.map((item, index) => (
							<div
								key={`__item__${index}__`}
								className={cn(
									'rounded-[1.25rem] overflow-hidden flex h-40 md:h-70',
									index % 2 !== 0 ? 'flex-row-reverse' : 'flex-row',
								)}
							>
								<div className='w-[35%] flex items-center justify-center bg-[url(/images/texture-bg.png)] bg-blend-overlay bg-center bg-cover bg-[#0A74EF]'>
									<h4 className='w-min mx-auto text-white text-[.75rem] md:text-[1.25rem] font-medium'>
										{item}
									</h4>
								</div>
								<figure
									style={{
										backgroundImage: `url(/images/summit-26-img-${index + 1}.png)`,
									}}
									className='bg-center bg-cover flex-1'
								/>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className='px-6 lg:px-20 bg-[url(/images/dust-bg.png)] bg-[#0A74EF1A] bg-blend-overlay bg-center bg-cover py-8 md:py-20'>
				<figure className='max-w-350 h-100 relative bg-[#00000080] bg-blend-overlay mx-auto bg-[url(/images/summit-26-img-7.png)] bg-center bg-cover rounded-[1.25rem] overflow-hidden p-3 md:p-10 group'>
					<span className='text-white font-normal text-[.75rem] md:text-[1rem] p-[.375rem_.75rem] md:p-[.625rem_1.25rem] bg-[#FF000080] rounded-[1.25rem]'>
						WID Summit 2025 Highlights
					</span>
					<a
						target='_blank'
						href='https://www.instagram.com/reel/DJL5nuItc_D/?igsh=MXF2ZWVtcTlsMHdpbw=='
						className='absolute top-0 left-0 w-full h-full flex items-center justify-center md:opacity-0 group-hover:opacity-100 transition-opacity duration-300'
					>
						<Icon
							icon={'hugeicons:instagram'}
							className='md:w-30 h-15 w-15 md:h-30 text-white'
						/>
					</a>
				</figure>
			</section>

			<Partner />

			<section className='px-6 lg:px-20 bg-[url(/images/dust-bg.png)] bg-center bg-cover py-8 md:py-20'>
				<div className='max-w-350 mx-auto'>
					<h2 className='text-black font-semibold text-[1.25rem] md:text-[2.5rem] text-center mb-2 md:mb-5'>
						WID Summit &apos;25
					</h2>
					<p
						className={`text-black leading-5 md:leading-8 text-[0.75rem] md:text-[1rem] text-center font-normal ${inter?.className} mb-6 md:mb-10`}
					>
						Relive moments from the just concluded summit.
					</p>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-6 md:mb-10 gap-4 md:gap-6 lg:gap-10'>
						{Array.from({ length: 6 }, (_, index) => (
							<img
								key={`__image__${index}__`}
								alt={`Event Image ${index + 8}`}
								src={`/images/summit-26-img-${index + 8}.png`}
								className='rounded-xl md:rounded-[1.25rem] overflow-hidden w-full h-auto object-cover'
							/>
						))}
					</div>
					<Button
						icon={{
							url: 'hugeicons:arrow-right-01',
							width: '1.5rem',
							height: '1.5rem',
						}}
						url='https://drive.google.com/drive/folders/120BcAwmfE7V3zL8b0ldZ7Dx5o-d-FSdh'
						className='p-[.75rem_1.5rem] md:p-[1.25rem_2.5rem] mx-auto w-fit'
						variant='outlined'
					>
						View More
					</Button>
				</div>
			</section>

			<RegistrationModal />
		</>
	);
};

export default Home;
