import React, { useState } from "react";
import "./Dashboard.css";
import { questionAnswers, uses } from '../../QuestionsTemplate.js';
import Cards from "../Cards/Cards.js";
import FoodCategory from "../FoodCategory/FoodCategory.js";
import MiniCardComponent from "../Blogs/MiniCardComponent.js";
import MiniCardComponent_1 from "../Blogs_1/MiniCardComponent_1.js";
import ContentDetailComponent from "../Content-Detail/ContentDetailComponent.js";
import mainImage from "../Assets/mainpageImage.jpg";

import menuImage_1 from "../Assets/1.png";
import menuImage_2 from "../Assets/9.png";
import menuImage_3 from "../Assets/3.png";
import menuImage_4 from "../Assets/4.png";
import menuImage_5 from "../Assets/10.png";
import menuImage_6 from "../Assets/6.png";
import menuImage_7 from "../Assets/7.png";

const homePage_1 = [
    // { id: 0 },
    { id: 1, title: "சிறுதானியம் அறிமுகம்", image: menuImage_1 },
    { id: 2, title: "சிறுதானியம் வகைகள்", image: menuImage_2 },
    { id: 3, title: "சிறுதானியம் பயன்கள்", image: menuImage_5 },
    { id: 4, title: "சிறுதானியம் தகவல்கள்", image: menuImage_4 },
    { id: 5, title: "சிறுதானிய கேள்வி வகைகள்", image: menuImage_3 },
    { id: 6, title: "சிறுதானிய உணவு வகைகள்", image: menuImage_7},
    { id: 7, title: "சிறுதானியம் தொடர்பான காணொளி", image: menuImage_6 }];


const Dashboard = (props) => {

    const [pageID, setPageID] = useState([]);
    const [value, setValue] = useState([]);
    const [screen, setScreen] = useState([]);
    const [screenID, setScreenID] = useState([]);

    const getPageID = (e) => {
        window.scrollTo(0,0);
        setPageID(Number(e.target.getAttribute('value')));
    }

    const detailCardHandler = (key, value, screenName, screenID) => {
        setPageID(Number(key));
        setValue(value);
        setScreen(screenName);
        setScreenID(screenID);
    }

    return (
        <div className="dashboardImage">

            { pageID.length === 0 ? <div className='menubar'>
                {homePage_1.map((res) =>
                        <div className='menubarButton' value={res.id} onClick={getPageID}><div className='centerImage'><img style={{width:250,height:200}} alt="" src={res.image} value={res.id}/></div>
                        <div style={{padding:45, fontSize:14}} value={res.id}>{res.title}</div>
                        </div>
                )}
            </div> :
            <div>
                {
                    pageID === 3 ?  <Cards data={uses} /> : 
                    pageID === 4 ? <MiniCardComponent setPage={detailCardHandler} screen={screen} pageID={screenID}/> : 
                    pageID === 5 ? <Cards data={questionAnswers} /> : 
                    pageID === 6 ? <FoodCategory setPage={detailCardHandler} screen={screen} pageID={screenID}/> : 
                    pageID === 7 ? <MiniCardComponent_1 id={value} setPage={detailCardHandler} pageID={screenID}/> : 
                    pageID === 8 ? <ContentDetailComponent id={value} screen={screen} setPage={detailCardHandler} pageID={screenID}/> : null
                }
            </div> }
        </div>
    )
}

export default Dashboard;