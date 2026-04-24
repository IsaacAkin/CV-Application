import { useState } from "react";
import { Input, Button } from "./utils.jsx";

export default function GeneralInfo() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState(null);
    const [disabled, setDisabled] = useState(false);

    function handleFullName(e) {
        setFullName(e.target.value);
    }
    
    function handleEmail(e) {
        setEmail(e.target.value);
    }
    
    function handlePhoneNumber(e) {
        setPhoneNumber(e.target.value);
    }

    function handleDisabled() {
        if (disabled) {
            setDisabled(false);
        } else {
            setDisabled(true)
        }
    }

    return (
        <>
            <Input type={'text'} value={fullName} onChange={handleFullName} placeholder={'Full Name'} isDisabled={disabled} />
            <div>
                <div>
                    <Input type={'text'} value={email} onChange={handleEmail} placeholder={'Email'} isDisabled={disabled} />
                </div>
                <span> | </span>
                <div>
                    <Input type={'number'} value={phoneNumber} onChange={handlePhoneNumber} placeholder={'Phone Number'} isDisabled={disabled} />
                </div>
            </div>
            <Button onClick={handleDisabled} disabled={disabled}/>
        </>
    )
}