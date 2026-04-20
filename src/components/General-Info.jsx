import '../styles/utils.css';
import { Input, Button } from "./utils.jsx";

export default function GeneralInfo({ handleFirstName, handleLastName, handleEmail, handlePhoneNumber}) {
    return (
        <>
            <h2>General Information</h2>
            <section className='general-info'>
                <div className="part-one">
                    <Input labelName={'First Name'} inputType={'text'} onChange={handleFirstName} />
                    <Input labelName={'Last Name'} inputType={'text'} onChange={handleLastName} />
                </div>
                <div className="part-two">
                    <Input labelName={'Email'} inputType={'email'} onChange={handleEmail} />
                    <Input labelName={'Phone Number'} inputType={'tel'} onChange={handlePhoneNumber} />
                </div>
                <div className="buttons-container">
                    <Button name={'edit'} />
                    <Button name={'submit'} />
                </div>
            </section>
        </>
    )
}