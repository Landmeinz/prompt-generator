import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// --- GET RANDOM KEYWORDS --- //
function* fetchRandomKeywords(action) {
    console.log('saga action.payload', action.payload);

    try {
        console.log('fetchRandomKeywords try');
        const response = yield axios.get(`/api/keyword`, {
            params: {
                category: action.payload
            }
        })
        yield put({ type: 'SET_RANDOM_KEYWORDS', payload: [...response.data] })
        console.log('-- saga data response:', response.data);

    } catch (error) {
        console.log('ERROR fetchRandomKeywords Saga', error);
    }

    // for (const category of action.payload) {
    //     console.log('category', category);

    // }

}; // fetchRandomKeywords

function* keywordsSaga() {
    yield takeLatest('FETCH_RANDOM_KEYWORDS', fetchRandomKeywords);
}; // keywordsSaga

export default keywordsSaga;