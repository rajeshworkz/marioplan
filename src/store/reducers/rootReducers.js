import authReducers from './authReducers';
import projectReducers from './projectReducers';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducers = combineReducers({
  auth:authReducers,
  project:projectReducers,
  firestore:firestoreReducer
})

export default rootReducers;
