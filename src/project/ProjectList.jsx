'use strict';

import React, { PropTypes } from 'react';
import Project from './Project';


let ProjectList = ({ projects }) => (
  <ul>
    { projects.map(project => (
      <Project project={ project } />
    ))}
  </ul>
);

ProjectList.propTypes = {
  projects: PropTypes.array.isRequired,
};

export default ProjectList;
