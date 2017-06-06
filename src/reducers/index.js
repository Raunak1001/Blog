/**
 * Created by raunak on 4/6/17.
 */
import {combineReducers} from 'redux'
import ReducerPost from './reducer_post'
import {reducer as formReducer}from 'redux-form'

const rootReducers = combineReducers({
    posts: ReducerPost,
    form: formReducer

});

export default rootReducers;