import React, { useState, useEffect } from "react";
import "./DetailScreenComponent.css";
import { useLocation, Redirect, useHistory } from "react-router-dom";
import axios from 'axios';

const DetailScreenComponent = (props) => {

    const location = useLocation();
    const history = useHistory();
    const [detail, setDetail] = useState([]);

    const loadDetail = () => {
        if(!location.state.blogKey){
        axios.post(`https://sirudhaniyam.ardhaapps.com/api/sirudhaniyam/content-detail`, {
            id: location.state.key
        }).then((r) => {
            setDetail(r.data[0].contents)
        })
    }else{
        axios.post(`https://sirudhaniyam.ardhaapps.com/api/sirudhaniyam/blog`, {
            id: location.state.key
        }).then((r) => {
            setDetail(r.data[0].contents[0])
        })
    }
    }

    const backClickHandler = () => {
        return history.push('/');
    }

    useEffect(loadDetail, [location.state.key]);

    return (
        <div className='detailCardContainer'>
            <div style={{ display: 'flex' }}>
                <img className='detailImg' src={detail.image}></img>
                <div className='detailcontainer' dangerouslySetInnerHTML={{ __html: !location.state.blogKey ? detail.content : detail.description }}>
                </div>
            </div>
            <div style={{ textAlign: 'right' }}><button className='BackButton' onClick={backClickHandler}>Back to Main Menu</button></div>
        </div>
    )
}

export default DetailScreenComponent;