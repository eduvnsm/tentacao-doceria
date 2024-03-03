import * as React from 'react';
import Header from '@/components/Header';
// import Hero from '@/components/Hero';
import Footer from '@/components/Footer';

type Props = {
    children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            {/* <Hero /> */}
            <div className="container mx-auto flex-1 py-10 bg-gradient-to-b from-red-300 to-rose-100">
                {children}
            </div>
            <Footer />
        </div>
    );
}

export default Layout;