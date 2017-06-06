/**
 * Created by raunak on 4/6/17.
 */
import axios from 'axios'
export const FETCH_POSTS = 'Fetch_Posts';
const Root_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=raunak';
export const CREATE_POST = 'create_post';
export const FETCH_POST = 'Fetch_Post';
export const DELETE_POST = 'Delete_Post';



export function FetchPosts() {
    const url = `${Root_URL}/posts${API_KEY}`;
    const response = axios.get(url);


    return ({
        type: FETCH_POSTS,
        payload: response
    })
}


export function createPost(values, callBack) {
    const response = axios.post(`${Root_URL}/posts${API_KEY}`, values).then(() => callBack());
    return ({
        type: CREATE_POST,
        payload: response
    });
}


export function fetchPost(id) {
    const response = axios.get(`${Root_URL}/posts/${id}${API_KEY}`);
    return ({
        type: FETCH_POST,
        payload: response
    })

}

export function deletePost(id,callBack) {
console.log("SDFDSF")
    const response=axios.delete(`${Root_URL}/posts/${id}${API_KEY}`).then(() => callBack());

    return({
        type:DELETE_POST,
        payload:response

    })


}