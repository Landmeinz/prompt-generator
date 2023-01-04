import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// --- GET ALL CATEGORIES --- //
function* fetchCategories() {
    try {
        const response = yield axios.get('/api/category')
        yield put({ type: 'SET_CATEGORIES', payload: response.data })
        // console.log('-- saga data response:', response.data);
        
    } catch (error) {
        console.log('ERROR fetchCategories Saga', error);
    }
}; // fetchCategories

function* categoriesSaga() {
    yield takeLatest('FETCH_CATEGORIES', fetchCategories);
}; // categoriesSaga

export default categoriesSaga;