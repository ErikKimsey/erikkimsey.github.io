import React from 'react';
import './styles/education.scss';

export default function Education(props) {
	return (
		<div className="education-container" id="EDUCATION">
			<div className="school-name">{props.data.name}</div>
			<div className="major">{props.data.major}</div>
			<div className="minor">{props.data.minor}</div>
			<div className="focus">{props.data.focus}</div>
			<div className="curriculum-container ">
				<br />
				<div className="curriculum-header bold-list-title">Curriculum: </div>
				<ul>
					{props.data.curriculum.map((e, i) => {
						return <li key={e}>{e}</li>;
					})}
				</ul>
			</div>
			<div className="tech-container">
				<br />
				<div className="tech-header bold-list-title">Technology:</div>
				<ul>
					{props.data.tech.map((e, i) => {
						return <li key={e}>{e}</li>;
					})}
				</ul>
			</div>
			<div className="projects-container">
				<br />
				<div className="projects-header bold-list-title">Projects:</div>
				<ul>
					{props.data.projects.map((e, i) => {
						return <li key={e}>{e}</li>;
					})}
				</ul>
			</div>
			<div className="extra-curr-container">
				<br />
				{props.data.extraCurricular}
			</div>
		</div>
	);
}
