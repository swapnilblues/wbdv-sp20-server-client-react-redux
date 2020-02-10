import {CREATE_MODULE, DELETE_MODULE, FIND_ALL_MODULES} from "../actions/moduleAction";
import {FIND_ALL_LESSONS} from "../actions/lessonAction";

const initialState = {
    lessons: [{_id: 'abc', title: 'Lesson 1'},
        {_id: 'bcd', title: 'Lesson 2'},
        {_id: 'bcde', title: 'Lesson 3'}]
}



const lessonReducer = (state = initialState, action) => {
    switch (action.type) {

        case FIND_ALL_LESSONS:
            return  {
                lessons: action.lessons
            }

        default:
            return state
    }

}



export default lessonReducer