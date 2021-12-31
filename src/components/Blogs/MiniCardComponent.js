import React, { useEffect, useState } from "react";
import "./MiniCardComponent.css";

import axios from 'axios';

const SmallCardComponent = (props) => {

    const [blogData, setBlogData] = useState([]);
    
    const blogContent = () => {
        axios.post(`https://sirudhaniyam.ardhaapps.com/api/sirudhaniyam/blog`).then((re) => {
            if (re) {
                setBlogData(re.data[0].contents);
            }
        }).catch((err) => {
            console.log(err)
        })
    }

    const detailHandler = (e) => {
        props.setPage(8,Number(e.target.getAttribute('value')),'blogScreen',4);
    }

    useEffect(blogContent, []);

    return (
        <div className='smallCard' style={{ display: 'flex', position: 'relative' }}>
            {blogData.map((res, i) =>
                <div className='smallCardContainer' style={{ background: "#FFFFFF" }} onClick={detailHandler}>
                    <img src={res.image} alt="" className='imgStyles' value={res.id}></img>
                    <div className='itemNames'><span>{res.title}</span></div>
                </div>
            )}
        </div>
    )
}

export default SmallCardComponent;