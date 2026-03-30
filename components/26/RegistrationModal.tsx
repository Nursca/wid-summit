'use client';

import { Suspense, useEffect, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Icon } from '@iconify/react';
import dynamic from 'next/dynamic';

const TicketWidget = dynamic(() => import('few-ticket-widget'), {
	ssr: false,
	loading: () => (
		<div className='w-full h-full flex items-center justify-center'>
			<div className='animate-spin rounded-full h-12 w-12 border-b-2 border-[#0A74EF]' />
		</div>
	),
});

const RegistrationModalContent = () => {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		setIsOpen(searchParams.get('register') === 'true');
	}, [searchParams]);

	const closeModal = () => {
		setIsOpen(false);

		router.push(pathname);
	};

	if (!isOpen) return null;

	return (
		<div className='fixed inset-0 z-100 flex items-center justify-center px-4 md:px-6 lg:px-20'>
			<div
				className='absolute inset-0 bg-black/60 backdrop-blur-sm'
				onClick={closeModal}
			/>

			<div className='relative bg-white rounded-xl md:rounded-[1.25rem] w-full max-w-360 max-h-[90vh] overflow-hidden shadow-2xl'>
				<div className='flex items-center justify-between p-4 md:p-6 border-b border-[#0A74EF33]'>
					<h2 className='text-[1.25rem] md:text-[2rem] font-semibold text-black'>
						Register for WID Summit &apos;26
					</h2>
					<button
						onClick={closeModal}
						className='text-[#0A74EF] hover:text-[#0A74EF80] transition-colors p-2'
						aria-label='Close modal'
					>
						<Icon
							icon='hugeicons:cancel-01'
							className='w-6 h-6 md:w-8 md:h-8'
						/>
					</button>
				</div>

				<div className='p-4 md:p-6 overflow-y-auto max-h-[calc(90vh-5rem)]'>
					<TicketWidget
						eventSlug='Wid-summit-2026'
						theme='light'
						width='100%'
						height={700}
						baseUrl='https://fewticket.com'
					/>
				</div>
			</div>
		</div>
	);
};

const RegistrationModal = () => {
	return (
		<Suspense fallback={null}>
			<RegistrationModalContent />
		</Suspense>
	);
};

export { RegistrationModal };
