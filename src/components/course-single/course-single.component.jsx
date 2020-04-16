import React from 'react';
import './course-single.styles.scss';

const CourseSingle = ({title}) => (

	<div className='menu-item'>
		<div className='content'>
			<h1 className='title'>{title}</h1>
			<span className='subtitle'>SHOP NOW</span>
		</div>
	</div>
);

export default CourseSingle;