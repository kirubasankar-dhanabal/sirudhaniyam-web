import React from "react";
import "./Navbar.css";
import { useHistory } from 'react-router-dom';

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

function Navbar() {

    const history = useHistory();

    const pageHandler = (e) => {
        history.push({
            state: {
                foodCategory: Number(e.target.getAttribute('value'))
            }
        })
    }

    return (
        <div className='menubar'>
            {homePage_1.map((res) =>
                <button className='menubarButton' value={res.id} onClick={pageHandler}>{res.title}</button>
            )}
        </div>
    );
}

export default Navbar;
