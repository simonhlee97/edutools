import React from 'react';

import './courses.styles.scss';

import CourseSingle from '../course-single/course-single.component'


class Courses extends React.Component {
	constructor() {
		super();
	
	this.state = {
		sections: [
				{
					title: 'Pre-Algebra',
					imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
					id: 1
				},
				{
					title: 'Algebra1',
					imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
					id: 2
				},
				{
					title: 'Algebra2',
					imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
					id: 3
				},
				{
					title: 'Geometry',
					imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
					id: 4
				},
			]
		}
	}

	render() {
		return (
			<div className="directory-menu">
				{this.state.sections.map(({title, imageUrl, id}) => (
						<CourseSingle key={id} title={title} />
				))}
			</div>
		)
	}

}
export default Courses