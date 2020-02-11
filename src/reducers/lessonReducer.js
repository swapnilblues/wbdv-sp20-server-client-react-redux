import {CREATE_LESSON, DELETE_LESSON, FIND_LESSON_FOR_MODULE, SET_LESSON_TO_DEFAULT} from "../actions/lessonAction";

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
        case SET_LESSON_TO_DEFAULT:
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

        case DELETE_LESSON:
            return  {
                selectedLesson: 'cde',
                lessons: state.lessons.filter(lesson => lesson._id !== action.lessonId)
            }

        default:
            return state
    }

}



export default lessonReducer