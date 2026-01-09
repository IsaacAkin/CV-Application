import '../styles/utils.css';
import { Input, Button } from "./utils.jsx";

export default function Experience() {

    return (
        <>
            <h2>Experience</h2>
            <section className='experience'>
                <div className="part-one">
                    <Input labelName={'Company Name'} inputType={'text'} />
                    <Input labelName={'Position Title'} inputType={'text'} />
                </div>
                <div className="part-two">
                    <Input labelName={'Employed from'} inputType={'date'} />
                    <Input labelName={'Employed to'} inputType={'date'} />
                </div>
                <div className="part-three">
                    <Input labelName={'Main Responsibilities'} inputType={'text'}/>
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