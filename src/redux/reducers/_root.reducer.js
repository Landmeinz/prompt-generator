import { combineReducers } from 'redux'
import errorsReducer from './errors.reducer';
import currentDateReducer from './currentDate.Reducer';
import categoriesReducer from './categories.reducer';
import randomKeywords from './keywordsRandom.reducer';
import selectedCategories from './selectedCategories.reducer';
import userInputs from './setUserInputs.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors: errorsReducer,            // contains registrationMessage and loginMessage
  categories: categoriesReducer,    // all categories from the DB
  randomKeywords: randomKeywords,   // random list of keywords from the DB
  currentDate: currentDateReducer,  // getting the current year month and day from DB
  selectedCategories: selectedCategories,   // current selected categories
  userInputs: userInputs,           // current user test inputs
});

export default rootReducer;
