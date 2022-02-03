import React from 'react';

import HeaderNavigation from '../../Shared/HeaderNavigation/HeaderNavigation';

import AvailableProduct from '../AvailableProduct/AvailableProduct';
import ExploreHeader from '../ExploreHeader/ExploreHeader';

const Explore = () => {
        return (
                <div>

                      <HeaderNavigation></HeaderNavigation>
                      <ExploreHeader></ExploreHeader>
                      <AvailableProduct></AvailableProduct>

                </div>

        );
};

export default Explore;