const customers = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CUSTOMERS':
      return [...action.payload]
    default:
      return state
  }
}

export default customers;