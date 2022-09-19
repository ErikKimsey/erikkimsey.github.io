import React from 'react';
import './styles/employment.scss';

export default function Employment(props) {
	return (
		<div className="employment-container" id="EXPERIENCE">
			<div className="employer-name">{props.data.employer}</div>
			<div className="role">{props.data.role}</div>
			<div className="duration">{props.data.duration}</div>
			<div className="role-description ">
				<b className="bold-list-title">
					<br />
					Description: <br />
				</b>
				<span className="job-description">{props.data.description}</span>
			</div>
			<div className="projects-container">
				<br />
				<b className="bold-list-title">Specific Involvement:</b>
				<ul>
					{props.data.projects.map((e, i) => {
						return <li key={e}>{e}</li>;
					})}
				</ul>
			</div>
			<div className="tech-container">
				<br />
				<b className="bold-list-title">Technologies:</b>{' '}
				<ul>
					{props.data.tech.map((e, i) => {
						return <li key={e}>{e}</li>;
					})}
				</ul>
			</div>
			<div className="" />
			<div className="" />
		</div>
	);
}
