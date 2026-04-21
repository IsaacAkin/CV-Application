import '../styles/utils.css';
import { Input, Button } from "./utils.jsx";

export default function Experience({ handleCompanyName, handlePositionTitle, handleEmploymentStartDate, handleEmploymentEndDate, handleResponsibilities }) {
    return (
        <>
            <h2>Experience</h2>
            <section className='experience'>
                <div className="part-one">
                    <Input labelName={'Company Name'} inputType={'text'} onChange={handleCompanyName} />
                    <Input labelName={'Position Title'} inputType={'text'} onChange={handlePositionTitle} />
                </div>
                <div className="part-two">
                    <Input labelName={'Employed from'} inputType={'date'} onChange={handleEmploymentStartDate} />
                    <Input labelName={'Employed to'} inputType={'date'} onChange={handleEmploymentEndDate} />
                </div>
                <div className="part-three">
                    <Input labelName={'Main Responsibilities'} inputType={'text'} onChange={handleResponsibilities} />
                    <Button name={'Add Point'} />
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