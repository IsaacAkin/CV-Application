import { useState } from "react";
import { NameInput, Input, Button } from "./utils.jsx";

export default function GeneralInfo() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState(null);
    const [submitted, setSubmitted] = useState(false);

    function handleFullName(e) {
        setFullName(e.target.value);
    }
    
    function handleEmail(e) {
        setEmail(e.target.value);
    }
    
    function handlePhoneNumber(e) {
        setPhoneNumber(e.target.value);
    }

    function handleSubmitted() {
        if (submitted) {
            setSubmitted(false);
        } else {
            setSubmitted(true)
        }
    }

    return (
        <>
            <NameInput type={'text'} value={fullName} onChange={handleFullName} placeholder={'Full Name'} isSubmitted={submitted} />
            <div>
                <div>
                    <Input type={'text'} value={email} onChange={handleEmail} placeholder={'Email'} isSubmitted={submitted} />
                </div>
                { email && phoneNumber ? <span> | </span> : null }
                <div>
                    <Input type={'number'} value={phoneNumber} onChange={handlePhoneNumber} placeholder={'Phone Number'} isSubmitted={submitted} />
                </div>
            </div>
            <Button onClick={handleSubmitted} isSubmitted={submitted}/>
        </>
    )
}