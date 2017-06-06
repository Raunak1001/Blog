/**
 * Created by raunak on 4/6/17.
 */
import {FETCH_POSTS} from '../actions/index'
import {FETCH_POST} from '../actions/index'
import {DELETE_POST} from '../actions/index'
import _ from 'lodash'

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_POSTS:
            console.log(action.payload.data);
            return _.mapKeys(action.payload.data, 'id');

        case FETCH_POST:
            return {...state, [action.payload.data.id]: action.payload.data};

        case DELETE_POST:
            return _.omit(state,action.payload);


        default:
            return state;

    }


}
