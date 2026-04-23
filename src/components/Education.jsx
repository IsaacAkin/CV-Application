import '../styles/utils.css';
// import { useState } from "react";
import { ListItem, Achievements } from "./utils.jsx";

export default function Education({ institutionName, degreeTitle, startDate, endDate }) {
    return (
        <div>
            <div className="school-info">
                <div className="institution">
                    <input type="text" name="" id="" value={institutionName} />
                    {degreeTitle && <span>, </span> }
                    <input type="text" name="" id="" value={degreeTitle} />
                </div>
                <div className="dates">
                    <input type="date" name="" id="" value={startDate} />
                    <span> - </span>
                    <input type="date" name="" id="" value={endDate} />
                </div>
            </div>
            <ul className="achievements">
                <li>Got a degree</li>
                <li>Comleted a group project</li>
            </ul>
            {/* <ul className='achievements'>
                {
                    achievements.map((achievement) => {
                        <li key={achievement}>{achievement}</li>
                    })
                }
            </ul> */}
            {/* <Achievements>
                <ListItem item={'Obtained a degree'}/>
            </Achievements> */}
        </div>
    )
}