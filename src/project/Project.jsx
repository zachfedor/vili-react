'use strict';

import React, { PropTypes } from 'react';


const Project = ({ project }) => (
  <li>{ project }</li>
);

Project.propTypes = {
  project: PropTypes.object.isRequired,
};

export default Project;
