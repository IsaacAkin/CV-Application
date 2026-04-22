export function Input({ labelName, inputType, onChange, format, isDisabled}) {
    return (
        <div>
            <label htmlFor={labelName}>{labelName}</label>
            {
                !isDisabled
                ? <input type={inputType} onChange={onChange} format={format} name={labelName} id={labelName} />
                : <input type={inputType} onChange={onChange} format={format} name={labelName} id={labelName} disabled />
            }
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