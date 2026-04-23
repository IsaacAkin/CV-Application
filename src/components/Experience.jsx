import '../styles/utils.css';
// import { useState } from 'react';
import { ListItem, Achievements } from "./utils.jsx";

export default function Experience({ positionTitle, companyName, startDate, endDate}) {
    return (
        <div>
            <div className="company-info">
                <div className="company">
                    <input type="text" name="" id="" value={positionTitle} />
                    <span>, </span>
                    <input type="text" name="" id="" value={companyName} />
                </div>
                <div className="dates">
                    <input type="date" name="" id="" value={startDate} />
                    <span> - </span>
                    <input type="date" name="" id="" value={endDate} />
                </div>
            </div>
            <ul className="achievements">
                <li>Led a project</li>
                <li>Got promoted to tech lead</li>
            </ul>
            {/* <ul className='achievements'>
                {
                    responsibilities.map((responsibility) => {
                        <li key={responsibility}>{responsibility}</li>
                    })
                }
            </ul> */}
            {/* <Achievements>
                <ListItem item={'Completed a project'}/>
            </Achievements> */}
        </div>
    )
}