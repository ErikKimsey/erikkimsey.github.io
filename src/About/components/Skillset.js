import './styles/skillset.scss';

export default function Skillset(props) {
    return (
        <div className="skillset-container" id="SKILLSET">
            <div className="text-container">
                <div className="skillset-header">Skillset</div>
                <div className="skillset-subheader">
                    <div className="skill-list-subheader">
                        the short version
                        <ul>
                            {props.data.map((e) => {
                                return (
                                    <li key={e} className="skill-item">
                                        {e}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
