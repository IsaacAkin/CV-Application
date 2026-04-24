import { useState } from "react";
import { TextArea, Button } from "./utils.jsx";

export default function Profile() {
    const [description, setDescription] = useState('');
    const [disabled, setDisabled] = useState(false);

    function handleDescription(e) {
        setDescription(e.target.value);
    }

    function handleDisabled() {
        if (disabled) {
            setDisabled(false);
        } else {
            setDisabled(true)
        }
    }

    return (
        <>
            <TextArea
                description={description}
                onChange={handleDescription}
                placeholder={'Enter a short summary about who you are and what you can bring to the table'}
                isDisabled={disabled}
            />
            <Button onClick={handleDisabled} disabled={disabled}/>
        </>
    )
}