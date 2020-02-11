import {CREATE_TOPIC, FIND_ALL_TOPICS} from "../actions/topicAction";
import {CREATE_LESSON} from "../actions/lessonAction";

const initialState = {
    topics: [],
    selectedTopic: 'bcd'
}

const topicReducer = (state = initialState, action) => {
    switch (action.type) {

        case CREATE_TOPIC:
            return {
                selectedTopic: state.selectedTopic
                ,
                topics: [
                    ...state.topics,
                    action.newTopic

                ]
            }
        case "EMPTY_TOPIC":
            return {
                selectedTopic: 'bcd',
                topics: []
            }

        case FIND_ALL_TOPICS:
            return {
                selectedTopic: state.selectedTopic,
                topics: action.topics
            }

        default:
            return state
    }

}


export default topicReducer