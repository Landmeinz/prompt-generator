
const keywordsRandom = (state = [], action) => {
    switch (action.type) {
        case 'SET_RANDOM_KEYWORDS':
            console.log('--- hit SET_RANDOM_KEYWORDS reducer', action.payload);
            return action.payload;

        case 'CLEAR_RANDOM_KEYWORDS':
            return [];

        default:
            return state;
    }
} // keywordsRandom;

export default keywordsRandom;