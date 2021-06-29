import React from 'react';
import GlobalStyles from 'src/styles/GlobalStyles';
import Typography from 'src/styles/Typography';
import CustomStyles from 'src/styles/CustomStyles';
import Navbar from 'src/components/Navbar/Navbar';
import Footer from 'src/components/Footer/Footer';
import { BootsContainer } from 'src/components/BootsElements/BootsElements';

const Layout = ({ children }) => (
    <>
        <GlobalStyles />
        <Typography />
        <CustomStyles />
        <Navbar />
        {children}
        <Footer />
    </>
);

export default Layout;
