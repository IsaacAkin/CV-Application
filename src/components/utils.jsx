export function Input({ labelName, inputType }) {
    return (
        <div>
            <label htmlFor={labelName}>{labelName}</label>
            <input type={inputType} name={labelName} id={labelName}/>
        </div>
    );
}

export function Button({ name, type = 'button' }) {
    return (
        <>
            <button type={type}>{name}</button>
        </>
    )
}