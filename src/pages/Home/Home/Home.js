import React from 'react';
import HeaderNavigation from '../../Shared/HeaderNavigation/HeaderNavigation';
import Footer from '../Footer/Footer';

import ProductBanner from '../ProductBanner/ProductBanner';
import Products from '../Products/Products';


const Home = () => {
        return (
                <div>
                       <HeaderNavigation></HeaderNavigation>
                        <ProductBanner></ProductBanner>
                     <Products></Products>
                     <Footer></Footer>

                </div>
        );
};

export default Home;