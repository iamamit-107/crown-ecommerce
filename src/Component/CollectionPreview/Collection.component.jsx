import React from "react";
import "./Collection.styles.scss";
import CollectionItem from "../Collection-Item/CollectionItem.component";

const CollectionPreview = ({ title, items }) => {
    return (
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {items
                    .filter((item, index) => index < 4)
                    .map(({ id, ...othersData }) => (
                        <CollectionItem key={id} {...othersData} />
                    ))}
            </div>
        </div>
    );
};

export default CollectionPreview;
