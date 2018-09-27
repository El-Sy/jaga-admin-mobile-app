const patients = (state = [], action) => {
    switch (action.type) {
      case 'ADD_PATIENTS':
        return [...action.payload]
      default:
        return state
    }
  }
   
  export default patients;