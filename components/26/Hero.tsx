import { Icon } from '@iconify/react';
import { Button } from '../shared';

const Hero = () => {
	return (
		<section className='bg-black lg:pt-40 pt-20'>
			<div className='relative h-202.5 overflow-hidden'>
				<div
					className='absolute inset-0 transition-opacity duration-1000 ease-in-out'
					style={{
						opacity: 1,
						zIndex: 1,
					}}
				>
					<div
						className='w-full h-full bg-center bg-cover'
						style={{ backgroundImage: `url(/images/home-hero-img-26.png)` }}
					/>
				</div>

				{/* Overlay */}
				<div className='absolute inset-0 bg-[#000000B2] z-10' />
				{/* Subtle Shimmer Effect */}
				<div className='absolute inset-0 z-20 hero-shimmer' />
				<div className='relative z-30 h-full flex flex-col gap-4 md:gap-10 justify-center items-center px-6'>
					<div>
						<h1 className='text-white text-[2rem] md:text-[4rem] lg:text-[8rem] font-semibold md:font-medium w-full lg:w-301 mx-auto text-center leading-tight'>
							WID Summit &apos;26
						</h1>
						<p className='text-white text-[0.875rem] md:text-[1rem] font-normal max-w-286.25 text-center mx-auto leading-5 md:leading-normal mt-3 md:mt-0'>
							The Women In DeFi (WID) Summit is the flagship conference of the Women In
							DeFi community that brings together women from across Africa building,
							leading and growing in the web3 space. <br />
							Its mission is simple but powerful: to create a space where women across
							the continent, whether they are actively building in the ecosystem, just
							starting their careers, or looking to transition into Web3 can connect,
							learn, and grow.
						</p>
					</div>
					<div className='flex flex-col md:flex-row gap-3 md:gap-20 items-center'>
						{[
							{ icon: 'hugeicons:calendar-03', text: '25th April, 2026' },
							{ icon: 'hugeicons:location-06', text: 'Lagos, Nigeria' },
						]?.map((item, index) => (
							<div
								key={`__item__${index}`}
								className='p-[.625rem_1.25rem] font-normal text-[0.875rem] md:text-[1rem] text-white flex items-center gap-1 md:gap-2 bg-[#FFFFFF1A] rounded-[1.25rem]'
							>
								<Icon
									icon={item?.icon}
									height={'1rem'}
									width={'1rem'}
									className='md:h-6 md:w-6'
								/>
								{item?.text}
							</div>
						))}
					</div>
					<div className='flex flex-col md:flex-row items-center gap-3 md:gap-5 lg:gap-10 w-full md:w-fit mx-auto'>
						<Button
							target='_self'
							url='?register=true'
							className='w-full md:w-58.25 p-[.75rem_1.5rem] md:p-[1.25rem_2.5rem] text-[0.875rem] md:text-[1rem]'
						>
							Get Your Ticket
						</Button>
						<Button
							url='https://drive.google.com/file/d/1v3qNuBCze0xZtmDwomDu5-tkL23BGye_/view?usp=drivesdk'
							className='w-full md:w-58.25 p-[.75rem_1.5rem] md:p-[1.25rem_2.5rem] text-white! border-white! text-[0.875rem] md:text-[1rem]'
							variant='outlined'
						>
							Become a Sponsor
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
};

export { Hero };
