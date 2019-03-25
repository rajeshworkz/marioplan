const initState = {}
const projectReducers = (state= initState, action) =>{
  switch (action.type) {
    case 'CREATE_PROJECT':
        console.log('project reducers', action.payload);
        return state
    case 'CREATE_PROJECT_ERROR':
          console.log('error reducers', action.payload);
          return state
        default:
        return state

  }

}
export default projectReducers;
