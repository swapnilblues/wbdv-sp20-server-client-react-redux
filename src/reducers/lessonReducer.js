import {CREATE_LESSON, FIND_LESSON_FOR_MODULE} from "../actions/lessonAction";

const initialState = {
    lessons: [],
    selectedLesson : 'cde'
}



const lessonReducer = (state = initialState, action) => {
    switch (action.type) {

        case CREATE_LESSON:
            return {
                selectedLesson: state.selectedLesson
                ,
                lessons: [
                    ...state.lessons,
                    action.newLesson

                ]
            }
        case "SET_LESSON_TO_DEFAULT":
            return  {
                lessons: [],
                selectedLesson: 'cde'
            }
        case FIND_LESSON_FOR_MODULE:
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