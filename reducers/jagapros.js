const jagapros = (state = [], action) => {
  switch (action.type) {
    case 'ADD_JAGAPROS':
    return [...action.payload]
    default:
      return state
  }
}
export default jagapros;