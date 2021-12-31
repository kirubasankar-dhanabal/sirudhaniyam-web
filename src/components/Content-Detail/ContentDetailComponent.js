import React, { useState, useEffect } from "react";
import "./ContentDetailComponent.css";
import { useLocation, useHistory } from "react-router-dom";
import axios from 'axios';

const DetailScreenComponent = (props) => {

    const location = useLocation();
    const history = useHistory();
    const [detail, setDetail] = useState([]);

    const loadDetail = () => {
        if(!props.screen){
        axios.post(`https://sirudhaniyam.ardhaapps.com/api/sirudhaniyam/content-detail`, {
            id: props.id
        }).then((r) => {
            setDetail(r.data[0].contents)
        })
    }else{
        axios.post(`https://sirudhaniyam.ardhaapps.com/api/sirudhaniyam/blog`, {
            id: props.id
        }).then((r) => {
            setDetail(r.data[0].contents[0])
        })
    }
    }

    const backClickHandler = (event) => {
        props.setPage(event.target.value,'','');
    }

    useEffect(loadDetail, [props.id]);

    return (
        <div className='detailCardContainer'>
            <div style={{ display: 'flex' }}>
                <img className='detailImg' src={detail.image}></img>
                <div className='detailcontainer' dangerouslySetInnerHTML={{ __html: !props.screen ? detail.content : detail.description }}>
                </div>
            </div>
            <div style={{ textAlign: 'right' }}><button className='BackButton' value={props.pageID} onClick={backClickHandler}>Back to Main Menu</button></div>
        </div>
    )
}

export default DetailScreenComponent;