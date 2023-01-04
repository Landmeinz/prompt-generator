
const setUserInputs = (state = [], action) => {
    switch (action.type) {
        case 'SET_USER_INPUTS':
            console.log('--- hit SET_USER_INPUTS reducer', action.payload);
            return [...state, action.payload];

        case 'CLEAR_USER_INPUTS':
            return [];

        default:
            return state;
    }
} // setUserInputs;

export default setUserInputs;