import React from "react";
import "./Directory-Menu.styles.scss";
import { fakeData } from "../../Data/Data";
import MenuItem from "../Menu-Item/Menu-Item.component";

const DirectoryMenu = () => {
    const data = fakeData;
    console.log(data);
    return (
        <div className="directory-menu">
            {data.map(({ title, id, imageUrl, size, linkUrl }) => (
                <MenuItem
                    title={title}
                    id={id}
                    imageUrl={imageUrl}
                    size={size}
                    linkUrl={linkUrl}
                />
            ))}
        </div>
    );
};

export default DirectoryMenu;
