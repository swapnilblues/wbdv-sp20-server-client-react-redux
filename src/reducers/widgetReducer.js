
const initialState = {
    widgets : [],
    newHeadingWidget : {
        name : '',
        size : '',
        text : ''
    }

}
const widgetReducer = (state = initialState, action) => {
    switch (action.type) {
        //TODO: use constants and actions

        case "UPDATE_WIDGET":
            return {
                widgets: [
                    ...state.widgets
                ],
                newHeadingWidget: state.newHeadingWidget
            }
        case "CREATE_WIDGET":
            return {
                widgets: [
                    ...state.widgets,
                    action.widget
                ],
                newHeadingWidget: state.newHeadingWidget
            }
        case "DELETE_WIDGET":
            return {
                widgets: state.widgets.filter(widget => widget.id !== action.widgetId),
                newHeadingWidget: state.newHeadingWidget
            }
        case "FIND_WIDGETS_FOR_TOPIC":
            return {
                widgets: action.widgets,
                newHeadingWidget: state.newHeadingWidget
            }

        case "FIND_ALL_WIDGETS":
            return {
                widgets: action.widgets,
                newHeadingWidget: state.newHeadingWidget
            }

        default:
            return state

    }
}

export default widgetReducer
