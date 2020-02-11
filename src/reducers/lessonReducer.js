import {CREATE_MODULE, DELETE_MODULE, FIND_ALL_MODULES} from "../actions/moduleAction";
import {FIND_ALL_LESSONS} from "../actions/lessonAction";

const initialState = {
    lessons: [],
    selectedLesson : 'cde'
}



const lessonReducer = (state = initialState, action) => {
    switch (action.type) {

        case "SET_LESSON_TO_DEFAULT":
            return  {
                lessons: [],
                selectedLesson: 'cde'
            }
        case FIND_ALL_LESSONS:
            return  {
                selectedLesson:
                    state.selectedLesson
                ,
                lessons: action.lessons
            }
        case "SELECTED_LESSON":
            return {
                selectedLesson: action.lessonId,
                lessons: [
                    ...state.lessons ]
            }

        default:
            return state
    }

}



export default lessonReducer