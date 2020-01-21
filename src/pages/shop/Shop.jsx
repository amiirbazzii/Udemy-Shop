import React from 'react';
import { Route } from "react-router-dom";

import CollectionOverview from '../../components/collection-overview/CollectionOverview';
import Collection from '../collection/Collection'

const Shop = ({ match }) =>  {
   return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionOverview} />
            <Route exact path={`${match.path}/:CollectionId`} component={Collection}/>
        </div>
    )
};


export default Shop;