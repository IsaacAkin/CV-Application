import { useState } from "react";
import { TextArea } from "./utils.jsx";

export default function Profile() {
    const [description, setDescription] = useState('');

    function handleDescription(e) {
        setDescription(e.target.value);
    }

    return (
        <>
            <TextArea
                description={description}
                onChange={handleDescription}
                placeholder={'Enter a short summary about who you are and what you can bring to the table'}
            />
        </>
    )
}