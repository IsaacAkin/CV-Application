import '../styles/utils.css';
// import { useState } from "react";
// import { Input, Button } from "./utils.jsx";

export default function GeneralInfo({ fullName, email, phoneNumber }) {
    return (
        <>
            <h1>{fullName}</h1>
            <div>
                <div>
                    <input type="text" name="" id="" value={email} />
                </div>
                <span> | </span>
                <div>
                    <input type="number" name="" id="" value={phoneNumber} />
                </div>
            </div>
        </>
    )
}