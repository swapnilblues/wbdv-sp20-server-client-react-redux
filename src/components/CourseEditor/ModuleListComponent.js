import React from "react";
import ModuleListItem from "./ModuleListItem";
import {connect} from "react-redux";
import {createModule, deleteModule} from "../../actions/moduleAction";

const ModuleListComponent = ({modules, deleteModule, createModule}) =>
    <ul>
        {
            modules && modules.map(module =>
                <li key={module._id}>
                    {module.title}
                    <button onClick={() => deleteModule(module._id)}>Delete</button>
                </li>
            )
        }
        <li>
            <button onClick={createModule}>Create</button>
        </li>
    </ul>

const stateToPropertyMapper = (state) => {
    return {
        modules: state.modules
    }
}

const dispatchToPropertyMapper = (dispatch) => {
    return {
        deleteModule: (moduleId) => {
            dispatch(deleteModule(moduleId))
        },
        createModule: () => {
            dispatch(createModule())
        }

    }
}

export default connect(stateToPropertyMapper, dispatchToPropertyMapper)
(ModuleListComponent)
