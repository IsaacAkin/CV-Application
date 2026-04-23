export function ListItem({ item }) {
    return(
        // <li>{item}</li>
        <input type="text" value={item} />
    )
}

// export function Achievements({ list }) {
//     return(
//         <ul className='achievements'>
//             {
//                 list.map((item) => {
//                     <li key={item}>{item}</li>
//                 })
//             }
//         </ul>
//     )
// }
// OR:
export function Achievements({ list }) {
    return(
        <ul className='achievements'>
            {list}
        </ul>
    )
}