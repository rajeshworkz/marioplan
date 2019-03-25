import React  from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const ProjectDetail = (props) => {
  const id = props.match.params.id;
  const { project } = props;
  console.log(project);
  if(!project){
    return(
      <div className='container center'>
      Loading....
      </div>
    )
  }
  return(
<div className='container section project-details'>
    <div className='card z-depth-0 project-summary'>
      <div className='card-content grey-text text-darken-3'>
      <div className='card-content'>
      <span className='card-title'>{project.title}</span>
      <p>{project.content}</p>
      </div>
      <div className='card-action lighten-4 grey-text'>
      <p>posted by {project.authorFirstName}</p>
      <p>3rd Sep</p>
      </div>
      </div>
    </div>
  </div>

  )
}
const mapStateToProps = (state, ownProps) => {
const id = ownProps.match.params.id;
const projects = state.firestore.data.projects;
const project = projects ? projects[id] : null
  return{
    project:project
  }
}
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {'collection':'projects'}
  ])
)
(ProjectDetail);
