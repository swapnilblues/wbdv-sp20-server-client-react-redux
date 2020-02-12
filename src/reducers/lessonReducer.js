import {
    CREATE_LESSON,
    DELETE_LESSON,
    FIND_LESSON_FOR_MODULE,
    SET_LESSON_TO_DEFAULT,
    UPDATE_LESSON
} from "../actions/lessonAction";

const initialState = {
    lessons: [],
    selectedLesson : 'cde',
    edit : false
}



const lessonReducer = (state = initialState, action) => {
    switch (action.type) {

        case "EDIT_LESSON":
            // alert("EE")
            return {
                edit: true,
                selectedLesson: state.selectedLesson,
                lessons: [
                    ...state.lessons]
            }
        case "EDIT_TRUE_LESSON":
            return {
                edit: false,
                selectedLesson: state.selectedLesson,
                lessons: [
                    ...state.lessons]
            }

        case CREATE_LESSON:
            return {
                edit: state.edit,
                selectedLesson: state.selectedLesson
                ,
                lessons: [
                    ...state.lessons,
                    action.newLesson

                ]
            }
        case SET_LESSON_TO_DEFAULT:
            return  {
                edit: state.edit,
                lessons: [],
                selectedLesson: 'cde'
            }
        case FIND_LESSON_FOR_MODULE:
            return  {
                edit: state.edit,
                selectedLesson:
                    state.selectedLesson
                ,
                lessons: action.lessons
            }
        case "SELECTED_LESSON":
            return {
                edit: state.edit,
                selectedLesson: action.lessonId,
                lessons: [
                    ...state.lessons ]
            }

        case DELETE_LESSON:
            return  {
                edit: state.edit,
                selectedLesson: 'cde',
                lessons: state.lessons.filter(lesson => lesson._id !== action.lessonId)
            }
        case UPDATE_LESSON:
            return {
                edit: false,
                selectedLesson: state.selectedLesson,
                lessons: [
                    ...state.lessons
                ]
            }


        default:
            return state
    }

}



export default lessonReducer