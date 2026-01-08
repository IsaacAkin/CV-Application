import '../styles/utils.css';
import { Input, Button } from "./utils.jsx";

export default function Education() {

    return (
        <>
            <h2>Education</h2>
            <section className='education'>
                <div className="part-one">
                    <Input labelName={'School Name'} inputType={'text'} />
                    <Input labelName={'Title of Study'} inputType={'text'} />
                </div>
                <div className="part-two">
                    <Input labelName={'Study from'} inputType={'date'} />
                    <Input labelName={'Study to'} inputType={'date'} />
                </div>
                <div className="buttons-container">
                    <Button name={'Add Section'} type={'button'} />
                    <Button name={'Edit'} type={'button'} />
                    <Button name={'Submit'} />
                </div>
            </section>
        </>
    )
}