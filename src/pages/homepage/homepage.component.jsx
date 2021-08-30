import React from 'react'
import './homepage.styles.scss'
import Directory from '../../components/directory/directory.component';
import Curriculum from '../../components/curriculum/curriculum.component';

const HomePage = () => (
<div className='homepage'>
    <Directory />
    <Curriculum />
</div>
);

export default HomePage;

