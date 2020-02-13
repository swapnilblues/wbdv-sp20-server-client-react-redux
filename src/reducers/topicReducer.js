import {CREATE_TOPIC, DELETE_TOPIC, EMPTY_TOPIC, FIND_TOPICS_FOR_LESSON, UPDATE_TOPIC} from "../actions/topicAction";
import {CREATE_LESSON, UPDATE_LESSON} from "../actions/lessonAction";

const initialState = {
    topics: [],
    selectedTopic: 'bcd',
    edit: false
}

const topicReducer = (state = initialState, action) => {
    switch (action.type) {

        // case "EDIT":
        //     return {
        //         selectedTopic: state.selectedTopic,
        //         topics: state.topics
        //     }


        case "EDIT_TOPIC":
            // alert("EE")
            return {
                edit: true,
                selectedTopic: state.selectedTopic,
                topics: [
                    ...state.topics]
            }

        case "SELECTED_TOPIC":
            return {
                edit: state.edit,
                selectedTopic: action.topicId,
                topics: [
                    ...state.topics]

            }

        case "EDIT_TRUE_TOPIC":
            return {
                edit: false,
                selectedTopic: state.selectedTopic,
                topics: [
                    ...state.topics]
            }

        case CREATE_TOPIC:
            return {
                selectedTopic: state.selectedTopic
                ,
                topics: [
                    ...state.topics,
                    action.newTopic
                ],
                edit: state.edit
            }
        case EMPTY_TOPIC:
            // console.log("ET")
            return {
                selectedTopic: 'bcd',
                topics: [],
                edit: false
            }

        case FIND_TOPICS_FOR_LESSON:
            return {
                selectedTopic: state.selectedTopic,
                topics: action.topics,
                edit: state.edit
            }

        case DELETE_TOPIC:
            return {
                selectedTopic: 'bcd',
                topics: state.topics.filter(topic => topic._id !== action.topicId),
                edit: state.edit
            }

        case UPDATE_TOPIC:
            return {
                edit: false,
                selectedTopic: state.selectedTopic,
                topics: [
                    ...state.topics
                ]
            }

        default:
            return state
    }

}


export default topicReducer