import React, { useEffect, useState } from "react";
import "./SmallCardComponent.css";
import { useHistory } from 'react-router-dom';
import axios from 'axios';

let colors = ["#3c78e5", "#cdd63e", "#b0b06c", "#22ae8e", "#7d6dcb"]

const SmallCardComponent = (props) => {

    const [blogData, setBlogData] = useState([]);
    const history = useHistory();

    // const check = () => {
    //     console.log('clicked')
    // }

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
        return history.push({
            pathname : '/detailscreen',
            state: { key : Number(e.target.getAttribute('value')), blogKey : 'BlogScreen' }
        })
    }

    useEffect(blogContent,[]);

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