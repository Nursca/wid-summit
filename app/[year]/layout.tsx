import { Footer, Header } from '@/components/26';
import { ReactNode } from 'react';

const T6Layout = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
};

export default T6Layout;
