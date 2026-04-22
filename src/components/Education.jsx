import '../styles/utils.css';
import { useState } from "react";
import { Input, Button } from "./utils.jsx";

export default function Education({ handleSchoolName, handleDegreeTitle, handleStartOfStudy, handleEndOfStudy}) {
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
            <h2>Education</h2>
            <section className='education'>
                <div className="part-one">
                    <Input labelName={'School Name'} inputType={'text'} onChange={handleSchoolName} isDisabled={disabled} />
                    <Input labelName={'Degree Title'} inputType={'text'} onChange={handleDegreeTitle} isDisabled={disabled} />
                </div>
                <div className="part-two">
                    <Input labelName={'Study from'} inputType={'date'} format={'dd-MM-yyyy'} onChange={handleStartOfStudy} isDisabled={disabled} />
                    <Input labelName={'Study to'} inputType={'date'} format={'dd-MM-yyyy'} onChange={handleEndOfStudy} isDisabled={disabled} />
                </div>
                <div className="buttons-container">
                    <Button name={disabled ? 'Edit' : 'Submit'} onClick={handleDisabled} />
                </div>
            </section>
        </>
    )
}