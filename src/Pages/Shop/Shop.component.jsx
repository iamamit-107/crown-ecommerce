import React from "react";
import "./Shop.styles.scss";
import { shopData } from "../../Data/Data";
import CollectionPreview from "../../Component/CollectionPreview/Collection.component";

const Shop = () => {
    const shopdatas = shopData;
    return (
        <div className="shop-page">
            {shopdatas.map(({ id, ...othersData }) => (
                <CollectionPreview key={id} {...othersData} />
            ))}
        </div>
    );
};

export default Shop;
