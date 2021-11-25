import React from "react";
import { useHistory } from 'react-router-dom';
import "./CardComponent.css";


let colors = ["#3c78e5", "#cdd63e", "#b0b06c", "#22ae8e", "#7d6dcb"]

const CardComponent = (props) => {

    const history = useHistory();

    const detailData = (e) => {
        history.push({
            pathname: '/detailscreen',
            state: { key : Number(e.target.getAttribute('value')) }
        })
    }

    return (
        <div className='card'>
            {props.dashboardRes.map((res, i) =>
                <div className='cardContainer' value={res.id} onClick={detailData}>
                    <img src={res.image} alt="" className='imgStyle' value={res.id}></img>
                    <div className="itemName"><span>{res.title}</span></div>
                </div>
            )}
        </div>
    )
}

export default CardComponent;