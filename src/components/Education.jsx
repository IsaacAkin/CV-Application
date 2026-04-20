import '../styles/utils.css';
import { Input, Button } from "./utils.jsx";

export default function Education({ handleSchoolName, handleDegreeTitle, handleStartOfStudy, handleEndOfStudy}) {
    return (
        <>
            <h2>Education</h2>
            <section className='education'>
                <div className="part-one">
                    <Input labelName={'School Name'} inputType={'text'} onChange={handleSchoolName} />
                    <Input labelName={'Degree Title'} inputType={'text'} onChange={handleDegreeTitle} />
                </div>
                <div className="part-two">
                    <Input labelName={'Study from'} inputType={'date'} onChange={handleStartOfStudy} />
                    <Input labelName={'Study to'} inputType={'date'} onChange={handleEndOfStudy} />
                </div>
                <div className="buttons-container">
                    <Button name={'Add Section'} />
                    <Button name={'Edit'} />
                    <Button name={'Submit'} />
                </div>
            </section>
        </>
    )
}