import {CREATE_TOPIC, DELETE_TOPIC, EMPTY_TOPIC, FIND_ALL_TOPICS} from "../actions/topicAction";
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
        case EMPTY_TOPIC:
            console.log("ET")
            return {
                selectedTopic: 'bcd',
                topics: []
            }

        case FIND_ALL_TOPICS:
            return {
                selectedTopic: state.selectedTopic,
                topics: action.topics
            }

        case DELETE_TOPIC:
            return {
                selectedTopic: 'bcd',
                topics: state.topics.filter(topic => topic._id !== action.topicId)
            }

        default:
            return state
    }

}


export default topicReducer