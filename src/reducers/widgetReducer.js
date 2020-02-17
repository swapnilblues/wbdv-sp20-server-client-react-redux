const widgets = []

const widgetReducer = (state = {widgets: widgets}, action) => {
    switch (action.type) {
        //TODO: use constants and actions

        case "CREATE_WIDGET":
            return {
                widgets: [
                    ...state.widgets,
                    action.widget
                ]
            }
        case "DELETE_WIDGET":
            return {
                widgets: state.widgets.filter(widget => widget.id !== action.widgetId)
            }
        case "FIND_WIDGETS_FOR_TOPIC":
            return {
                widgets: action.widgets
            }

        case "FIND_ALL_WIDGETS":
            return {
                widgets: action.widgets
            }

        default:
            return state

    }
}

export default widgetReducer
