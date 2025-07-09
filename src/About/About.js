import './about.scss';
import { SKILLSET_OVERVIEW } from '../__data/data';

export default function About() {

    return (
        <div className="about-container">
            {
                SKILLSET_OVERVIEW && SKILLSET_OVERVIEW.map((e) => {
                    return <div key={e}>{e}</div>
                })
            }
        </div>
    );
}
