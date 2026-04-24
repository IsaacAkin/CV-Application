import { useState } from "react";
import { TextArea, Button } from "./utils.jsx";

export default function Profile() {
    const [description, setDescription] = useState('');
    const [submitted, setSubmitted] = useState(false);

    function handleDescription(e) {
        setDescription(e.target.value);
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
            <TextArea
                description={description}
                onChange={handleDescription}
                placeholder={'Enter a short summary about who you are and what you can bring to the table'}
                isSubmitted={submitted}
            />
            <Button onClick={handleSubmitted} isSubmitted={submitted}/>
        </>
    )
}