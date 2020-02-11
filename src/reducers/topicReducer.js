import {FIND_ALL_TOPICS} from "../actions/topicAction";
const initialState = {
    topics: [],
    selectedTopic : 'bcd'
}

const topicReducer = (state = initialState, action) => {
    switch (action.type) {

        case "EMPTY_TOPIC":

            return {
                selectedTopic: 'bcd',
                topics: []
            }

        case FIND_ALL_TOPICS:
            return  {
                selectedTopic: state.selectedTopic,
                topics: action.topics
            }

        default:
            return state
    }

}



export default topicReducer