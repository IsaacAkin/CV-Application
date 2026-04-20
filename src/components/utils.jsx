export function Input({ labelName, inputType, onChange }) {
    return (
        <div>
            <label htmlFor={labelName}>{labelName}</label>
            <input type={inputType} onChange={onChange} name={labelName} id={labelName}/>
        </div>
    );
}

export function Button({ name, type = 'button', onClick }) {
    return (
        <>
            <button type={type} onClick={onClick}>{name}</button>
        </>
    )
}