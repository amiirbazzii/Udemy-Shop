import React from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCollections } from "../../redux/shop/shop.selector";
import PreviewCollection from '../../components/preview-collection/PreviewCollection';

import './CollectionOverview.scss';

const CollectionOverview = ({collections}) => {
    return (
        <div className='collections-overview'>
            {
                collections.map(({id , ...otherCollectionData}) => (
                    <PreviewCollection key={id} {...otherCollectionData} />
                ))
            }
        </div>
    )
};

const mapStateToProps = createStructuredSelector ({
    collections : selectCollections
});


export default connect(mapStateToProps)(CollectionOverview);
