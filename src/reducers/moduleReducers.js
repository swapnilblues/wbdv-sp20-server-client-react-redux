import {CREATE_MODULE, DELETE_MODULE} from "../actions/moduleAction";

const initialState = {
    modules: [

        // {_id: "345", title: "Module 4 - Native"},
        // {_id: "345", title: "Module 5 - Angular"},
        // {_id: "345", title: "Module 6 - Node"},
        // {_id:  "345", title: "Module 7 - Mongo"}

    ]
}

const moduleReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FIND_ALL_MODULES":
            return  {
                modules: action.modules
            }
        case CREATE_MODULE:
            return {
                modules: [
                    ...state.modules,
                    action.newModule

                ]
            }
        case DELETE_MODULE:
            return {
                modules: state.modules.filter(module => module._id !== action.moduleId)
            }
        default:
                return state
    }

}

export default moduleReducer