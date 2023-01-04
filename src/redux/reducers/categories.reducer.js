const categoriesReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_CATEGORIES':
            // console.log('--- hit SET_CATEGORIES reducer', action.payload);
            return action.payload;

        default:
            return state;
    }
} // categoriesReducer;

export default categoriesReducer;