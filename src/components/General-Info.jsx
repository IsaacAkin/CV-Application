import { useState } from "react";
import '../styles/general-info.css';

export default function GeneralInfo() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState(null);

    function handleName() {
        setName(name);
    }

    function handleEmail() {
        setEmail(email);
    }

    function handlePhoneNumber() {
        setPhoneNumber(phoneNumber);
    }

    return (
        <div>
            <label htmlFor="name">Full Name</label>
            <input type="text" onChange={handleName}/>

            <label htmlFor="email">Email</label>
            <input type="text" onChange={handleEmail}/
            >
            <label htmlFor="phoneNumber">Phone Number</label>
            <input type="tel" onChange={handlePhoneNumber}/>
        </div>
    )
}