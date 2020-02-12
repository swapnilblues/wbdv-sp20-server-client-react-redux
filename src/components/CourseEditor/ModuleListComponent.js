import React from "react";
import ModuleListItem from "./ModuleListItem";
import {connect} from "react-redux";
import {createModule, deleteModule, FIND_MODULE_FOR_COURSE, UPDATE_MODULE} from "../../actions/moduleAction";
import moduleService from "../../services/ModuleService"
import lessonService from "../../services/LessonService";
import {FIND_LESSON_FOR_MODULE, SET_LESSON_TO_DEFAULT} from "../../actions/lessonAction";
import {EMPTY_TOPIC} from "../../actions/topicAction";


class ModuleListComponent extends React.Component {


    // state = {
    //     editing: false,
    //     module: this.props.module,
    //     backgroundColor: 'white',
    //     color: 'black',
    //     selected: true,
    //     selected1: true
    // }

    state = {
        course: ""
    }


// componentDidMount() is invoked immediately after a component is mounted (inserted into the tree).
// Initialization that requires DOM nodes should go here. If you need to load data from a remote endpoint, this is a
// good place to instantiate the network request.
    componentDidMount() {
        this.props.findModulesForCourse(this.props.courseId)
    }

    render() {

        return (<ul className="list-group wbdv-module-list">
                <h2>{this.props.selected}</h2>
                {
                    this.props.modules && this.props.modules.map(module => {

                            if (!this.props.edit && this.props.selected === module._id) {
                                // alert(this.props.selected)
                                // alert(this.props.edit)
                                return (
                                    <li className="list-group-item wbdv-module-item active" key={module._id}
                                        onClick={async () => {

                                            await this.props.selectModule(module._id)
                                            // await this.props.findLessonsForModule(module._id)
                                            // await this.props.setLessonToDefault()
                                            // await this.props.emptyTopic()
                                        }}>

                            <span className="wbdv-module-item-title">
                                    {module.title}
                            </span>
                                        <span onClick={() => this.props.editState()}>
                                        <i className="fas fa-pencil-alt cursor-pointer wbdv-module-item-edit-btn"/>
                                    </span>


                                    </li>)
                            } else if (this.props.edit && this.props.selected === module._id) {
                                // alert("B")
                                return (
                                    <li className="list-group-item wbdv-module-item active" key={module._id}
                                        onClick={async () => {
                                            await this.props.selectModule(module._id)
                                            await this.props.findLessonsForModule(module._id)
                                            // await this.props.setLessonToDefault()
                                            // await this.props.emptyTopic()
                                            // await this.props.editStateTrue()
                                        }}
                                    >
                                        <input onChange={async (e) =>

                                            await this.setState({
                                                course: {
                                                    ...this.state.course,
                                                    title: e.target.value

                                                }

                                            })}
                                               value={this.state.course.title}

                                        />
                                        <span onClick={async () => {
                                            await this.props.setCurrTitle(this.state.course, this.props.selected)
                                            // await this.props.editStateTrue()
                                            await this.props.findModulesForCourse(this.props.courseId)
                                            // await this.props.setModuleToDefault()
                                            // await this.props.setLessonToDefault()
                                            await this.setState({
                                                course: ""

                                            })
                                        }
                                        }>
                                    <i className="fas fa-check cursor-pointer wbdv-module-item-check-btn"/>
                                    </span>
                                        <i onClick={async () => {
                                            await this.props.deleteModule(module._id)
                                            await this.props.setModuleToDefault()
                                            await this.props.setLessonToDefault()
                                            await this.props.editStateTrue()
                                        }}
                                           className="fas fa-times wbdv-module-item-delete-btn"/>
                                        {/*<span onClick={() => */}
                                        {/*this.prop}*/}
                                    </li>
                                )
                            } else {
                                // alert("C")
                                return (

                                    <li className="list-group-item bg-dark wbdv-module-item" key={module._id}
                                        onClick={async () => {
                                            await this.props.selectModule(module._id)
                                            await this.props.findLessonsForModule(module._id)
                                            await this.props.setLessonToDefault()
                                            await this.props.emptyTopic()
                                        }}>

                                     <span className="wbdv-module-item-title">
                                        {module.title}
                                     </span>
                                        <i className="fas fa-pencil-alt cursor-pointer wbdv-module-item-edit-btn"
                                           onClick={() => this.setState({editing: true, selected1: false})}/>


                                    </li>)
                            }
                        }
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
        modules: state.module1.modules,
        selected: state.module1.selected,
        editModule: state.module1.editModule,
        edit: state.module1.edit
    }
}

const dispatchToPropertyMapper = (dispatch) => {
    return {

        setCurrTitle:  async (module, courseId) => {
             await moduleService.updateModule(module,courseId)
                 .then(res =>
                     dispatch({ type: UPDATE_MODULE})
                 )
        },

        createModule: (courseId) => {
            moduleService.createModule(courseId, {
                title: 'New Module'

            }).then(actualModule =>
                dispatch(createModule(actualModule)))
        },
        editState: () => {
            // alert("ES")
            dispatch({
                type: "EDIT"
            })
        },
        editStateTrue: () => {
            dispatch({
                type: "EDIT_TRUE"
            })
        },

        setModuleToDefault: () => {
            dispatch({
                type: "SET_MODULE_TO_DEFAULT"
            })
        },

        setLessonToDefault: () => {
            dispatch({
                type: SET_LESSON_TO_DEFAULT
            })
        },

        emptyTopic: () => {
            // alert("ERR")
            dispatch({
                type: EMPTY_TOPIC

            })
        },

        findLessonsForModule: (moduleId) => {
            // console.log("Here",moduleId)
            lessonService.findLessonsForModule(moduleId)
                .then(actualLessons =>
                    dispatch({
                        type: FIND_LESSON_FOR_MODULE,
                        lessons: actualLessons

                    })
                )
        },

        selectModule: (moduleId) => {
            dispatch({
                    type: "SELECTED_MODULE",
                    moduleId: moduleId
                }
            )
        },
        findModulesForCourse: (courseId) =>
            moduleService.findModulesForCourse(courseId)
                .then(actualModules =>
                    dispatch({
                        type: FIND_MODULE_FOR_COURSE,
                        modules: actualModules

                    })),

        deleteModule: (moduleId) =>
            moduleService.deleteModule(moduleId)
                .then(status => dispatch(deleteModule(moduleId)))



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
