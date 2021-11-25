import React, { useEffect, useState } from "react";
import CardComponent from "../CardComponent";
import FoodCategory from "../FoodCategory/FoodCategory";
import axios from 'axios';
import { useLocation } from "react-router-dom";
import "./Dashboard.css";
import SmallCardComponent from "../Blogs/SmallCardComponent";

const homePage_1 = [
    { id: 0 },
    { id: 1, title: "சிறுதானியம் அறிமுகம்", image: "" },
    { id: 2, title: "சிறுதானியம் வகைகள்", image: "" },
    { id: 3, title: "சிறுதானியம் பலன்கள்", image: "" },
    { id: 4, title: "சிறுதானியம் தகவல்கள்", image: "" },
    { id: 5, title: "சிறுதானிய கேள்வி வகைகள்", image: "" },
    { id: 6, title: "சிறுதானிய உணவு வகைகள்", image: "" },
    { id: 7, title: "சிறுதானியம் தொடர்பான காணொளி", image: "" },
    { id: 8, title: "சிறுதானிய பொருள்கள்", image: "" }
]

const Dashboard = () => {

    const [dashbData, setDashboardData] = useState([]);
    const [pageID, setPageID] = useState([]);

    const dashboardData = () => {
        axios.post(`https://sirudhaniyam.ardhaapps.com/api/sirudhaniyam/dashboard`).then((re) => {
            if (re) {
                setDashboardData(re.data[0].categories);
            }
        }).catch((err) => {
            console.log(err)
        })
    }

    const getPageID = (e) => {
        setPageID(Number(e.target.getAttribute('value')));
    }

    useEffect(dashboardData, []);

    return (
        <div>

            <div className='menubar'>
                {homePage_1.map((res) =>
                    <button className='menubarButton' value={res.id} onClick={getPageID}>{res.title}</button>
                )}
            </div>


            <div style={{
                background: `linear-gradient(
70deg, black, transparent)` }}>
                {
                    pageID === 3 ? <FoodCategory /> :
                        pageID === 2 ? <SmallCardComponent /> :
                            dashbData.map((re) =>
                                <>
                                    <div className='subcategorytitle'>{re.title}</div>
                                    <CardComponent dashboardRes={re['sirudhaniyam_dashboard_content']} />
                                </>
                            )
                }
            </div>
        </div>
    )
}

export default Dashboard;