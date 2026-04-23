import { useState } from "react";
import { Input } from "./utils.jsx";

export default function GeneralInfo({ isDisabled }) {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState(null);

    function handleFullName(e) {
        setFullName(e.target.value);
    }
    
    function handleEmail(e) {
        setEmail(e.target.value);
    }
    
    function handlePhoneNumber(e) {
        setPhoneNumber(e.target.value);
    }

    return (
        <>
            <Input type={'text'} value={fullName} onChange={handleFullName} placeholder={'Full Name'} isDisabled={isDisabled} />
            <div>
                <div>
                    <Input type={'text'} value={email} onChange={handleEmail} placeholder={'Email'} isDisabled={isDisabled} />
                </div>
                <span> | </span>
                <div>
                    <Input type={'number'} value={phoneNumber} onChange={handlePhoneNumber} placeholder={'Phone Number'} isDisabled={isDisabled} />
                </div>
            </div>
        </>
    )
}