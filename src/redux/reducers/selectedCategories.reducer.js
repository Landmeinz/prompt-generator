const selectedCategories = (state = [], action) => {
    switch (action.type) {
        case 'SET_SELECTED_CATEGORIES':
            // console.log('--- hit SET_CATEGORIES reducer', action.payload);
            return [...state, action.payload];

        case 'SET_SELECTED_CATEGORIES_ALL':
            console.log('payload', action.payload);
            return [...action.payload];

        case 'SET_SELECTED_CATEGORIES_NONE':
            return [];

        case 'REMOVE_SELECTED_CATEGORY':
            const index = state.indexOf(action.payload);
            if (index > -1) { // only splice array when item is found
                state.splice(index, 1); // 2nd parameter means remove one item only
            }
            return [...state];

        default:
            return state;
    }
} // selectedCategories;

export default selectedCategories;