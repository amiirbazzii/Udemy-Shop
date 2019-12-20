import React, { Component } from 'react';
import SHOP_DATA from './ShopData';
import PreviewCollection from '../../components/preview-collection/PreviewCollection'

export default class Shop extends Component {
    constructor(props){
        super(props);

        this.state = {
            collections : SHOP_DATA
        };
    }

    render() {
        const {collections} = this.state;
        return (
            <div className="shop-page">
                {
                    collections.map(({id , ...otherCollectionData}) => (
                        <PreviewCollection key={id} {...otherCollectionData} />
                    ))
                }
            </div>
        )
    }
}
