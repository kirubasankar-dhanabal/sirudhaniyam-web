import React, { useState, useEffect } from "react";
import axios from 'axios';
import './FoodCategory.css';

const FoodCategory = () => {

    const [types, setTypes] = useState([]);

    const foodCategoryCall = () => {
        axios.post(`https://sirudhaniyam.ardhaapps.com/api/sirudhaniyam/food-category`,{ category_id: 1}).then((res) => {
            setTypes(res.data[0].food_categories);
        })
    }

    useEffect(foodCategoryCall, []);


    return (
        <div className='foodcategoryCard'>
            {types && types.map((res, i) => <div className='typesContainer'>
                 <div><img className='categoryImg' src={`${res.food_category_image}`}></img></div>
                <div style={{textAlign: "center", padding: 9}}>{res.food_category_title}</div>
                </div>
            )}
        </div>
    )
}

export default FoodCategory;