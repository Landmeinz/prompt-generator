import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// --- GET RANDOM KEYWORDS --- //
function* fetchRandomKeywords(action) {
    try {
        const response = yield axios.get(`/api/keyword/categories?${action.payload}`)
        yield put({ type: 'SET_RANDOM_KEYWORDS', payload: response.data })
        // console.log('-- saga data response:', response.data);
        
    } catch (error) {
        console.log('ERROR fetchRandomKeywords Saga', error);
    }
}; // fetchRandomKeywords

function* keywordsSaga() {
    yield takeLatest('FETCH_RANDOM_KEYWORDS', fetchRandomKeywords);
}; // keywordsSaga

export default keywordsSaga;