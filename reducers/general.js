const init = {
    config:null
}
const general = (state = init, action) => {
    switch (action.type) {
        case 'ADD_CONFIG':
            return { config: action.payload };
        default:
            return state;
    }
}
export default general;