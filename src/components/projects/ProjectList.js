import React from 'react';
import ProjectSummary from './ProjectSummary';
import { Link } from 'react-router-dom';
const ProjectList = ({projects}) => {

    return(
      <div className='project-list section'>
      {
        projects && projects.map(data=>{
          return     <Link to={`project/${data.id}`}><ProjectSummary key={data.id} project={data}/></Link>
        })
      }
      </div>
    )

}

export default ProjectList;
