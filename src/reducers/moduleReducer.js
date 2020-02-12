import {CREATE_MODULE, DELETE_MODULE, FIND_MODULE_FOR_COURSE, UPDATE_MODULE} from "../actions/moduleAction";

const initialState = {
    modules: [

        // {_id: "345", title: "Module 4 - Native"},
        // {_id: "345", title: "Module 5 - Angular"},
        // {_id: "345", title: "Module 6 - Node"},
        // {_id:  "345", title: "Module 7 - Mongo"}

    ],

    selected: 'abc',
    edit: false
}

const moduleReducer = (state = initialState, action) => {
    switch (action.type) {

        case "EDIT":
            // alert("EE")
            return {
                edit: true,
                selected: state.selected,
                modules: [
                    ...state.modules]
            }
        case "EDIT_TRUE":
            return {
                edit: false,
                selected: state.selected,
                modules: [
                    ...state.modules]
            }

        case "SET_MODULE_TO_DEFAULT":
            return {
                edit: state.edit,
                modules: [...state.modules],
                selected: 'abc'
            }

        case  "SELECTED_MODULE":
            // alert("AA"+action.moduleId)
            return {
                edit: state.edit,
                selected: action.moduleId,
                modules: [
                    ...state.modules]
            }
        case FIND_MODULE_FOR_COURSE:
            return {
                edit: state.edit,
                selected:state.selected
                ,
                modules: action.modules
            }
        case CREATE_MODULE:
            return {
                edit: state.edit,
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
                edit: state.edit,
                selected: 'abc',
                modules: state.modules.filter(module => module._id !== action.moduleId)
            }

        case UPDATE_MODULE:
            return {
                edit: false,
                selected: state.selected,
                modules: [
                    ...state.modules]

            }
        default:
            return state
    }

}

export default moduleReducer