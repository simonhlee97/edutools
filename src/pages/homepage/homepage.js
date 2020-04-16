import React from 'react';
import Directory from '../../components/directory/directory.component';
import Courses from '../../components/mycourses/courses.component';

import './homepage.styles.scss';

const HomePage = () => (
	<div className='homepage'>
		<Directory />
		<Courses />

	</div>
)

export default HomePage