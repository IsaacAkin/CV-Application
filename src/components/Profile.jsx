export default function Profile({ description }) {
    return (
        <div>
            <textarea name="description" id="description" cols={110}>
                {description}
            </textarea>
        </div>
    )
}