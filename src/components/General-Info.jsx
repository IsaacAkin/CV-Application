import '../styles/utils.css';
import { useState } from "react";
import { Input, Button } from "./utils.jsx";

export default function GeneralInfo({ handleFirstName, handleLastName, handleEmail, handlePhoneNumber}) {
    const [disabled, setDisabled] = useState(false);
    
    const handleDisabled = () => {
        if (!disabled) {
            setDisabled(true);
        } else {
            setDisabled(false);
        }
    }

    return (
        <>
            <h2>General Information</h2>
            <section className='general-info'>
                <div className="part-one">
                    <Input labelName={'First Name'} inputType={'text'} onChange={handleFirstName} isDisabled={disabled} />
                    <Input labelName={'Last Name'} inputType={'text'} onChange={handleLastName} isDisabled={disabled} />
                </div>
                <div className="part-two">
                    <Input labelName={'Email'} inputType={'email'} onChange={handleEmail} isDisabled={disabled} />
                    <Input labelName={'Phone Number'} inputType={'tel'} onChange={handlePhoneNumber} isDisabled={disabled} />
                </div>
                <div className="buttons-container">
                    <Button name={disabled ? 'Edit' : 'Submit'} onClick={handleDisabled} />
                </div>
            </section>
        </>
    )
}