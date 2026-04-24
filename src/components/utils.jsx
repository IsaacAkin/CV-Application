import { useState, useRef, Fragment } from "react";

export function Input({ type, value, onChange, placeholder, isSubmitted }) {
    return(
        <>
            {
                isSubmitted
                ? <p>{value}</p>
                : <input type={type} value={value} onChange={onChange} placeholder={placeholder} />
            }
        </>
    )
}

export function NameInput({ type, value, onChange, placeholder, isSubmitted }) {
    return(
            <>
                {
                    isSubmitted
                    ? <h2>{value}</h2>
                    : <input type={type} value={value} onChange={onChange} placeholder={placeholder} />
                }
            </>
        )
}

export function TextArea({ description, onChange, placeholder, isSubmitted }) {
    return(
        <>
            {
                !isSubmitted
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
                        <p>{description}</p>
                    </div>
                </>
            }
        </>
    )
}

export function Button({ onClick, isSubmitted }) {
    return(
        <>
            {
                isSubmitted
                ? <button onClick={onClick}>Edit</button>
                : <button onClick={onClick}>Submit</button>
            }
        </>
    )
}

function Item({ onChange, onClick, placeholder, isSubmitted }) {
    return(
        <>
            { 
                !isSubmitted &&
                <>
                    <input type="text" onChange={onChange} placeholder={placeholder} />
                    <button onClick={onClick}>Add Item</button>
                </>
            }
        </>
    )
}

function List({ list, onClick, isSubmitted }) {
    return(
        <ul className='achievements'>
            {
                list.map(item => {
                    return(
                        <Fragment key={item.id}>
                            <li>{item.value}</li>
                            {!isSubmitted && <button onClick={() => onClick(item.id)}>remove</button>}
                        </Fragment>
                    )
                })
            }
        </ul>
    )
}

export function Achievements({ placeholder, isSubmitted }) {
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
                isSubmitted={isSubmitted}
            />
            <List
                list={achievements}
                onClick={removeAchievements}
                isSubmitted={isSubmitted}
            />
        </>
    )
}