import { useState } from "react";

export default function Profile() {
    const [description, setDescription] = useState('');

    function handleDescription(e) {
        setDescription(e.target.value);
    }

    return (
        <div>
            <textarea name="description" id="description" cols={105} onChange={handleDescription} placeholder='Enter a short summary about who you are and what you can bring to the table'>
                {description}
            </textarea>
        </div>
    )
}