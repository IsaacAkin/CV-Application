import '../styles/components.css';
import { useState, useRef, Fragment } from "react";
import GeneralInfo from './General-Info.jsx';
import Profile from './Profile.jsx';
import Education from './Education.jsx';
import Experience from './Experience.jsx';
import { Button } from "./utils.jsx";

export default function Resume() {
    const educationIndex = useRef(1);
    const experienceIndex = useRef(1);

    const [educationSection, setEducationSection] = useState([{ id: 1 }]);
    const [experienceSection, setExperienceSection] = useState([{ id: 1 }]);

    function addEducationSection() {
        educationIndex.current++;
        setEducationSection(previous => ([...previous, { id: educationIndex.current }]));
    }

    function removeEducationSection(id) {
        setEducationSection(previous => {
            if (previous.length === 1) return previous;
            return previous.filter(sections => sections.id !== id);
        });
    }
    
    function addExperienceSection() {
        experienceIndex.current++;
        setExperienceSection(previous => ([...previous, { id: experienceIndex.current }]));
    }

    function removeExperienceSection(id) {
        setExperienceSection(previous => {
            if (previous.length === 1) return previous;
            return previous.filter(sections => sections.id !== id);
        });
    }

    return (
        <>
            <section className="general-info-section">
                <GeneralInfo />
            </section>
            <section className="profile-section">
                <h3>Profile</h3>
                <Profile />
            </section>
            <section className="education-section">
                <h3>Education</h3>
                {
                    educationSection.map(section => {
                        return (
                            <Fragment key={section.id}>
                                <Education
                                    id={section.id}
                                    onDelete={removeEducationSection}
                                />
                            </Fragment>
                        )
                    })
                }
                <button onClick={addEducationSection}>Add section</button>
            </section>
            <section className="experience-section">
                <h3>Experience</h3>
                {
                    experienceSection.map(section => {
                        return (
                            <Fragment key={section.id}>
                                <Experience 
                                    id={section.id}
                                    onDelete={removeExperienceSection}
                                />
                            </Fragment>
                        )
                    })
                }
                <button onClick={addExperienceSection}>Add section</button>
            </section>
        </>
    )
}