import React from 'react';
import './PreviewCollection.scss';
import CollectionItem from "../collectoin-item/CollectionItem"

const PreviewCollection = ({title , items}) => {
    return (
        <div className="collection-preview">
            <h1 className="title"> {title.toUpperCase()} </h1>
            <div className="preview">
                {
                    items
                    .filter((item , index) =>index < 4)
                    .map(({id , ...otherItemData}) => (
                        <CollectionItem key={id} {...otherItemData}/> 
                    ))
                }
            </div>
        </div>
    )
}

export default PreviewCollection;
