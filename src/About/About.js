import './about.scss';
import { SKILLS } from '../__data/data';

export default function About() {
    SKILLS.forEach((e) => {
        console.log(e);
    })
    return (
        <div className="about-container">
            {
                SKILLS && SKILLS.map((e) => {
                    return e.map((e) => {
                        <h1 style={{ fontSize: "5rem", color: "#f0f" }}>{e[0]}</h1>
                        return <div>
                            {e}
                        </div>
                    })
                })
            }
        </div >
    );
}
