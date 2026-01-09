import '../styles/utils.css';
import { Input, Button } from "./utils.jsx";

export default function GeneralInfo() {

    return (
        <>
            <h2>General Information</h2>
            <section className='general-info'>
                <div className="part-one">
                    <Input labelName={'First Name'} inputType={'text'} />
                    <Input labelName={'Last Name'} inputType={'text'} />
                </div>
                <div className="part-two">
                    <Input labelName={'Date of Birth'} inputType={'date'}/>
                    <Input labelName={'Phone Number'} inputType={'tel'}/>
                </div>
                <div className="buttons-container">
                    <Button name={'edit'} />
                    <Button name={'submit'} />
                </div>
            </section>
        </>
    )
}