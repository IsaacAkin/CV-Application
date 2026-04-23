import '../styles/utils.css';
import GeneralInfo from './General-Info.jsx';
import Profile from './Profile.jsx';
import Education from './Education.jsx';
import Experience from './Experience.jsx';

export default function Resume() {
    return (
        <>
            <section className="general-info-section">
                <GeneralInfo
                    fullName={'Isaac Akinsanya'}
                    email={'isaacaki247@gmail.com'}
                    phoneNumber={'07507674089'}
                />
            </section>
            <section className="profile-section">
                <h3>Profile</h3>
                <Profile
                description={'This is a placeholder descriprion.'}
                />
            </section>
            <section className="education-section">
                <h3>Education</h3>
                <Education
                    institutionName={'University of Portsmouth'}
                    degreeTitle={'Bsc(hons) Computer Science'}
                    startDate={'2021-09-16'}
                    endDate={'2024-06-21'}
                />
            </section>
            <section className="experience-section">
                <h3>Experience</h3>
                <Experience
                    positionTitle={'Junior Software Engineer'}
                    companyName={'Interact Software'}
                    startDate={'2025-09-01'}
                    endDate={'2026-04-23'}
                />
            </section>
        </>
    )
}