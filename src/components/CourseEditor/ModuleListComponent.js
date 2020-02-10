import React from "react";
import ModuleListItem from "./ModuleListItem";
import {connect} from "react-redux";
import {createModule, deleteModule} from "../../actions/moduleAction";
import moduleService from "../../services/ModuleService"

class ModuleListComponent extends React.Component {

    state = {
        editing: false,
        module: this.props.module,
        backgroundColor: 'white',
        color: 'black',
        selected: true,
        selected1: true
    }

    componentDidMount() {
        this.props.findModulesForCourse(this.props.courseId)
    }

    render() {
        return (<ul>
                {
                    this.props.modules && this.props.modules.map(module =>
                        <li className="list-group-item bg-dark wbdv-module-item" key={module._id}>
                            {!this.state.editing &&
                            <span className="wbdv-module-item-title">
                                    {module.title}
                                </span>
                            }
                            {this.state.editing &&
                            <input
                                onChange={(e) => this.setState({
                                    module: {
                                        ...this.state.module,
                                        title: e.target.value
                                    }
                                })}
                                value={module.title}/>

                            }
                            {this.state.selected &&
                            this.state.selected1 &&
                            <i className="fas fa-pencil-alt cursor-pointer"
                               onClick={() => this.setState({editing: true, selected1: false})}/>
                            }
                            {this.state.editing &&
                            <i className="fas fa-check cursor-pointer"/>
                            }
                            {this.state.selected &&
                            this.state.selected1 &&
                            <i onClick={() => this.props.deleteModule(module._id)}
                               className="fas fa-times wbdv-module-item-delete-btn"/>
                            }
                        </li>
                    )
                }
                <li className="list-group-item bg-dark wbdv-module-item">
                    <i className="fas fa-plus wbdv-module-item-add-btn"
                       onClick={() => this.props.createModule(this.props.courseId)}/>
                </li>
            </ul>

        )
    }
}


const stateToPropertyMapper = (state) => {
    return {
        modules: state.modules
    }
}

const dispatchToPropertyMapper = (dispatch) => {
    return {
        findModulesForCourse: (courseId) =>
            moduleService.findModulesForCourse(courseId)
                .then(actualModules =>
                    dispatch({
                        type: "FIND_ALL_MODULES",
                        modules: actualModules

                    })),
        deleteModule: (moduleId) =>
            moduleService.deleteModule(moduleId)
                .then(status => dispatch(deleteModule(moduleId))),

        createModule: (courseId) => {
            moduleService.createModule(courseId, {
                title: 'New Module'

            }).then(actualModule =>
                dispatch(createModule(actualModule)))
        }

        // createModule: () => {
        //     dispatch(createModule({
        //         title: "A",
        //         _id:(new Date()).getTime()+""
        //     }))
        // }
    }

}

export default connect(stateToPropertyMapper, dispatchToPropertyMapper)
(ModuleListComponent)
