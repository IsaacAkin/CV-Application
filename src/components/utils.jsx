import { useState, useRef, Fragment } from "react";

export function Input({ type, value, onChange, placeholder, isDisabled }) {
    return(
        <>
            {
                isDisabled
                ? <input type={type} value={value} onChange={onChange} placeholder={placeholder} disabled />
                : <input type={type} value={value} onChange={onChange} placeholder={placeholder} />
            }
        </>
    )
}

export function TextArea({ description, onChange, placeholder, isDisabled }) {
    return(
        <>
            {
                !isDisabled
                ?
                <>
                    <div>
                        <textarea name="description" id="description" cols={105} onChange={onChange} 
                        placeholder={placeholder}>
                            {description}
                        </textarea>
                    </div>
                </>
                :
                <>
                    <div>
                        <textarea name="description" id="description" cols={105} onChange={onChange} 
                        placeholder={placeholder}
                        disabled>
                            {description}
                        </textarea>
                    </div>
                </>
            }
        </>
    )
}

export function Button({ onClick, disabled }) {
    return(
        <>
            {
                disabled
                ? <button onClick={onClick}>Edit</button>
                : <button onClick={onClick}>Submit</button>
            }
        </>
    )
}

function Item({ onChange, onClick, placeholder, isDisabled }) {
    return(
        <>
            { 
                !isDisabled &&
                <>
                    <input type="text" onChange={onChange} placeholder={placeholder} />
                    <button onClick={onClick}>Add Item</button>
                </>
            }
        </>
    )
}

function List({ list, onClick, isDisabled }) {
    return(
        <ul className='achievements'>
            {
                list.map(item => {
                    return(
                        <Fragment key={item.id}>
                            <li>{item.value}</li>
                            {!isDisabled && <button onClick={() => onClick(item.id)}>remove</button>}
                        </Fragment>
                    )
                })
            }
        </ul>
    )
}

export function Achievements({ placeholder, isDisabled }) {
    const nextIndex = useRef(1);
    const [item, setItem] = useState('');
    const [achievements, setAchievements] = useState([]);

    function handleItem(e) {
        setItem(e.target.value)
    }

    function addAchievements() {
        nextIndex.current++;
        setAchievements(previous => ([ ...previous, { id: nextIndex.current, value: item }]));
        setItem('');
    }

    function removeAchievements(id) {
        setAchievements(previous => {
            return previous.filter(items => items.id !== id);
        })
    }

    return(
        <>
            <Item
                onChange={handleItem}
                onClick={addAchievements}
                placeholder={placeholder}
                isDisabled={isDisabled}
            />
            <List
                list={achievements}
                onClick={removeAchievements}
                isDisabled={isDisabled}
            />
        </>
    )
}