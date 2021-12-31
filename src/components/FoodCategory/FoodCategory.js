import React, { useState, useEffect } from "react";
import axios from 'axios';
import './FoodCategory.css';

const FoodCategory = (props) => {

    const [types, setTypes] = useState([]);

    const foodCategoryCall = () => {
        axios.post(`https://sirudhaniyam.ardhaapps.com/api/sirudhaniyam/category-list`).then((res) => {
            setTypes(res.data[0].contents);
        })
    }

    const detailCardHandler = (e) => {
        props.setPage(7,Number(e.target.getAttribute('value')));
    }

useEffect(foodCategoryCall, []);


return (
    <div className='foodcategoryCard'>
        {types && types.map((res, i) => <div className='typesContainer' onClick={detailCardHandler}>
            <div><img className='categoryImg' alt="" src={`${res.image}`} value={i+1}></img></div>
            <div style={{ textAlign: "center", padding: 9 }}>{res.title}</div>
        </div>
        )}
    </div>
)
}

export default FoodCategory;