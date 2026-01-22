export function Input({ labelName, inputType, value, onChange }) {
    return (
        <div>
            <label htmlFor={labelName}>{labelName}</label>
            <input type={inputType} value={value} onChange={onChange} name={labelName} id={labelName}/>
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