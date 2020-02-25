import {EMPTY_TOPIC} from "../actions/topicAction";

const initialState = {
    widgets : [],
    // newHeadingWidget : {
    //     name : '',
    //     size : '',
    //     text : ''
    // }

}
const widgetReducer = (state = initialState, action) => {
    switch (action.type) {
        //TODO: use constants and actions

        case "UPDATE_WIDGET":
            return {
                widgets: [
                    ...state.widgets
                ]
                // ,
                // newHeadingWidget: state.newHeadingWidget
            }
        case "CREATE_WIDGET":
            return {
                widgets: [
                    ...state.widgets,
                    action.widget
                ]
                // ,
                // newHeadingWidget: state.newHeadingWidget
            }

        case "DELETE_WIDGET":
            console.log(state.widgets)
            console.log(action.widgetId)
            return {
                widgets: state.widgets.filter(widget => widget.id !== action.widgetId)
                // ,
                // widgets: [{'id':'1', 'text':'A'},
                //     {'id':'2', 'text':'B'},
                //     {'id':'3', 'text':'C'}],
                // newHeadingWidget: state.newHeadingWidget
            }
        case "FIND_WIDGETS_FOR_TOPIC":
            console.log("AAAA",action.widgets)
            return {
                widgets: action.widgets
                // ,
                // newHeadingWidget: state.newHeadingWidget
            }

        case "FIND_ALL_WIDGETS":
            return {
                widgets: action.widgets
                // ,
                // newHeadingWidget: state.newHeadingWidget
            }

        case "EMPTY_WIDGET":
            // console.log("ET")
            return {
                // newHeadingWidget : {
                //     name : '',
                //     size : '',
                //     text : ''
                // },
                widgets: []
            }

        default:
            return state

    }
}

export default widgetReducer
