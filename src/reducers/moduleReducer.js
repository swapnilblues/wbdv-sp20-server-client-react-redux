import {CREATE_MODULE, DELETE_MODULE, FIND_ALL_MODULES} from "../actions/moduleAction";

const initialState = {
    modules: [

        // {_id: "345", title: "Module 4 - Native"},
        // {_id: "345", title: "Module 5 - Angular"},
        // {_id: "345", title: "Module 6 - Node"},
        // {_id:  "345", title: "Module 7 - Mongo"}

    ],

    selected : 'abc'
}

const moduleReducer = (state = initialState, action) => {
    switch (action.type) {
        case  "SELECTED_MODULE":
            // alert("AA"+action.moduleId)
            return {
                selected: action.moduleId,
                modules: [
                    ...state.modules ]
            }
        case FIND_ALL_MODULES:
            return  {
                selected:
                    state.selected
                ,
                modules: action.modules
            }
        case CREATE_MODULE:
            return {
                selected:
                    state.selected
                ,
                modules: [
                    ...state.modules,
                    action.newModule

                ]
            }
        case DELETE_MODULE:
            return {
                selected: state.selected
                ,
                modules: state.modules.filter(module => module._id !== action.moduleId)
            }
        default:
                return state
    }

}

export default moduleReducer