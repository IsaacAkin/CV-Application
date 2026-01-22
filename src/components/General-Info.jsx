import '../styles/utils.css';
import { useState } from 'react';
import { Input, Button } from "./utils.jsx";

export default function GeneralInfo() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState(null);

    function handleFirstName(e) {
        return setFirstName(e.target.value);
    }

    function handleLastName(e) {
        return setLastName(e.target.value);
    }

    function handleEmail(e) {
        return setEmail(e.target.value);
    }

    function handlePhoneNumber(e) {
        return setPhoneNumber(e.target.value);
    }

    return (
        <>
            <h2>General Information</h2>
            <section className='general-info'>
                <div className="part-one">
                    <Input labelName={'First Name'} inputType={'text'} value={firstName} onChange={handleFirstName} />
                    <Input labelName={'Last Name'} inputType={'text'} value={lastName} onChange={handleLastName} />
                </div>
                <div className="part-two">
                    <Input labelName={'Email'} inputType={'email'} value={email} onChange={handleEmail} />
                    <Input labelName={'Phone Number'} inputType={'tel'} value={phoneNumber} onChange={handlePhoneNumber} />
                </div>
                <div className="buttons-container">
                    <Button name={'edit'} />
                    <Button name={'submit'} />
                </div>
            </section>
        </>
    )
}