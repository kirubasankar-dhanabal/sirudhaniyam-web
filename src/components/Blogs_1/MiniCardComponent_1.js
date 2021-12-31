import React, { useEffect, useState } from "react";
import "./MiniCardComponent_1.css";
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const MiniCardComponent_1 = (props) => {

    const [data, setData] = useState([]);
    const history = useHistory();

    const blogContent = () => {
        axios.post(`https://sirudhaniyam.ardhaapps.com/api/sirudhaniyam/content-list?category_id=${props.id}`).then((re) => {
            if (re) {
                setData(re.data[0].contents);
            }
        }).catch((err) => {
            console.log(err)
        })
    }

    const detailHandler = (e) => {
        props.setPage(8,Number(e.target.getAttribute('value')),'', 7);
    }

    useEffect(blogContent,[]);

    return (
        <div className='smallCard' style={{ display: 'flex', position: 'relative' }}>
            {data.map((res, i) =>
                <div className='smallCardContainer' style={{ background: "#FFFFFF" }} onClick={detailHandler}>
                    <img src={res.image} alt="" className='imgStyles' value={res.id}></img>
                    <div className='itemNames'><span>{res.title}</span></div>
                </div>
            )}
        </div>
    )
}

export default MiniCardComponent_1;