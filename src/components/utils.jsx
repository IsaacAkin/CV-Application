export function Input({ type, value, onChange, placeholder, isDisabled }) {
    return(
        <>
            {
                isDisabled
                ? <input type={type} name="" id="" value={value} onChange={onChange} placeholder={placeholder} disabled />
                : <input type={type} name="" id="" value={value} onChange={onChange} placeholder={placeholder} />
            }
        </>
    )
}

export function Button({ onClick, disabled }) {
    return(
        <>
            {
                disabled
                ? <button onClick={onClick}>Enable</button>
                : <button onClick={onClick}>Disable</button>
            }
        </>
    )
}

export function ListItem({ value, onChange }) {
    return(
        <input type="text" value={value} onChange={(e) => onChange(e.target.value)} />
    )
}

export function Achievements({ list }) {
    return(
        <ul className='achievements'>
            {list}
        </ul>
    )
}