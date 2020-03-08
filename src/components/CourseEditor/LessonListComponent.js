import React from "react";
// import TopicListItem from "./TopicListItem";
import {connect} from "react-redux";
import moduleService from "../../services/ModuleService"
import lessonService from "../../services/LessonService"
import topicService from "../../services/TopicService";
import {CREATE_LESSON, DELETE_LESSON, FIND_LESSON_FOR_MODULE, UPDATE_LESSON} from "../../actions/lessonAction";
import {EMPTY_TOPIC, FIND_TOPICS_FOR_LESSON} from "../../actions/topicAction";
import {DELETE_MODULE, deleteModule} from "../../actions/moduleAction";
import {Link} from "react-router-dom";

class LessonListComponent extends React.Component {

    state = {
        course: ""
    }

    // LessonListComponent = ({lessons, selected, selectedLesson}) => {
    render()    {
        return (
            <div>
                <ul className="nav nav-pills wbdv-topic-pill-list">
                    <h3>Lessons:</h3>
                    {/*<h1>{this.props.selected}</h1>*/}
                    {
                        this.props.lessons && this.props.lessons.map(lesson => {

                                if (!this.props.edit && this.props.selectedLesson === lesson._id) {
                                    // alert("A")
                                    return (
                                        <Link to={`/course-editor/${this.props.courseId}/module/${this.props.selected}/lesson/${lesson._id}`} >
                                        <li className="list-group-item wbdv-topic-pill active"
                                            onClick={async () => {
                                                // this.props.findTopicsForLesson(lesson._id)
                                                // await
                                                await this.props.selectLesson(lesson._id)
                                                await this.props.findTopicsForLesson(lesson._id)
                                                await this.props.emptyWidget()
                                            }}>
                                            <a className="nav-link text-white" href="#">{lesson.title}</a>

                                <span onClick={()=> this.props.editState1()}>
                                <i className="fas fa-pencil-alt cursor-pointer wbdv-module-item-edit-btn"/>
                                </span>

                                        </li>
                                        </Link>
                                    )

                                } else if(this.props.edit && this.props.selectedLesson === lesson._id) {
                                    // alert("B")
                                    return (
                                        <Link to={`/course-editor/${this.props.courseId}/module/${this.props.selected._id}/lesson/${lesson._id}`} >
                                        <li className="list-group-item wbdv-topic-pill active"
                                            onClick={async () => {
                                                // this.props.findTopicsForLesson(lesson._id)
                                                // await
                                                await this.props.selectLesson(lesson._id)
                                                await this.props.findTopicsForLesson(lesson._id)
                                                await this.props.emptyWidget()
                                            }}>

                                            <input onChange={(e) =>

                                                 this.setState({
                                                    course: {
                                                        ...this.state.course,
                                                        title: e.target.value

                                                    }

                                                })}
                                                   value={this.state.course.title}

                                            />
                                            <span
                                                onClick={async () => {
                                                    await this.props.setCurrTitle1(this.state.course, this.props.selectedLesson)
                                                    // await this.props.editStateTrue1()
                                                    await this.props.findLessonsForModule(this.props.selected)
                                                    // await this.props.setLessonToDefault()
                                                    // await this.props.setTopicToDefault()
                                                    await this.setState({
                                                        course: ""

                                                    })
                                                }
                                                }
                                            >
                                <i className="fas fa-check cursor-pointer wbdv-module-item-check-btn"/>
                                </span>
                                            <span onClick={async () => {
                                                await this.props.deleteLesson(lesson._id)
                                                // await this.props.setLessonToDefault()
                                                await this.props.emptyWidget()
                                                await this.props.editStateTrue1()
                                                await this.props.emptyTopic()
                                            }}>
                                <i className="fas fa-times wbdv-module-item-delete-btn"/>
                                   </span>
                                        </li>
                                        </Link>
                                    )
                                }else {
                                    // alert("C")
                                    return (
                                        <Link to={`/course-editor/${this.props.courseId}/module/${this.props.selected}/lesson/${lesson._id}`} >
                                        <li className="list-group-item wbdv-topic-pill bg-secondary"
                                            onClick={async () => {
                                                // this.props.findTopicsForLesson(lesson._id)
                                                // await
                                                await this.props.selectLesson(lesson._id)
                                                await this.props.deSelectTopic()
                                                await this.props.findTopicsForLesson(lesson._id)
                                                await this.props.emptyWidget()

                                            }}>
                                            <a className="nav-link text-white" href="#">{lesson.title}</a>

                                            <span>
                                <i className="fas fa-pencil-alt cursor-pointer wbdv-module-item-edit-btn"/>
                                </span>

                                        </li>
                                        </Link>
                                    )
                                }



                                // return (
                                //     <li className="wbdv-topic-pill bg-secondary"
                                //         onClick={async () => {
                                //             // this.props.findTopicsForLesson(lesson._id)
                                //             // await
                                //             await this.props.selectLesson(lesson._id)
                                //             await this.props.findTopicsForLesson(lesson._id)
                                //         }}>
                                //         <a className="nav-link text-white" href="#">{lesson.title}</a>
                                // <span>
                                // <i className="fas fa-check cursor-pointer wbdv-module-item-check-btn"/>
                                // </span>
                                // <span>
                                // <i className="fas fa-pencil-alt cursor-pointer wbdv-module-item-edit-btn"/>
                                // </span>
                                //         <span onClick={async () => {
                                //             await this.props.deleteLesson(lesson._id)
                                //             // await this.props.setLessonToDefault()
                                //             await this.props.emptyTopic()
                                //         }}>
                                // <i className="fas fa-times wbdv-module-item-delete-btn"/>
                                //    </span>
                                //     </li>)
                            }
                        )
                    }

                    {this.props.selected !== 'abc' &&
                    <li className="wbdv-topic-add-btn bg-secondary"
                        onClick={() => this.props.createLesson(this.props.selected)}>
                        <a href="#" className="nav-link text-white">
                            <i className="fas fa-plus"/>
                        </a>
                    </li>
                    }
                </ul>

            </div>

        )
    }

    // }
}

// const stateToPropertyMapper = (state) => {
//     return {
//         lessons: state.lesson1.lessons
//     }
// }

const
    stateToPropertyMapper = (state) => {
        return {
            lessons: state.lesson1.lessons,
            // modules: state.module1.modules,
            selected: state.module1.selected,
            selectedLesson: state.lesson1.selectedLesson,
            selectedTopic: state.topic1.selectedTopic,
            edit: state.lesson1.edit
            // history: [...state.history],
            // courseId : [ ...state.courseId]
        }
    }

const
    dispatchToPropertyMapper = (dispatch) => {
        return {

            setCurrTitle1: async (newLesson, lessonId) => {
                await lessonService.updateLesson(newLesson, lessonId)
                    .then(res =>
                        dispatch({type: UPDATE_LESSON})
                    )
            },

            editState1: () => {
                // alert("ES")
                dispatch({
                    type: "EDIT_LESSON"
                })
            },
            editStateTrue1: () => {
                dispatch({
                    type: "EDIT_TRUE_LESSON"
                })
            },

            deleteLesson: (lessonId) =>
                lessonService.deleteLesson(lessonId)
                    .then(status => dispatch({
                        type: DELETE_LESSON,
                        lessonId: lessonId
                    })),

            setLessonToDefault: () => {
                dispatch({
                    type: "SET_LESSON_TO_DEFAULT"
                })
            },

            createLesson: (moduleId) => {
                lessonService.createLesson(moduleId, {
                    title: 'New Lesson'

                }).then(actualLesson =>
                    dispatch({
                        type: CREATE_LESSON,
                        newLesson: actualLesson
                    }))
            },

            findLessonsForModule: (moduleId) => {
                // console.log("Here",moduleId)
                // alert(moduleId)
                lessonService.findLessonsForModule(moduleId)
                    .then(actualLessons =>
                        dispatch({
                            type: FIND_LESSON_FOR_MODULE,
                            lessons: actualLessons

                        })
                    )
            },

            // findTopicsForLesson: (lessonId) => {
            //     // console.log("Here",moduleId)
            //     topicService.findTopicsForLesson(lessonId)
            //         .then(actualTopics =>
            //             dispatch({
            //                 type: FIND_TOPICS_FOR_LESSON,
            //                 topics: actualTopics
            //
            //             }))
            // },

            findTopicsForLesson: (lessonId) =>
                fetch(`http://localhost:8080/api/lessons/${lessonId}/topics`)
                    .then(response => response.json())
                    .then(topics => dispatch({
                        type: "SET_TOPICS",
                        topics: topics
                    })),

            selectLesson: (lessonId) => {
                dispatch({
                        type: "SELECTED_LESSON",
                        lessonId: lessonId
                    }
                )
            },

            deSelectTopic: () => {
                dispatch({
                        type: "DESELECT_TOPIC",
                    }
                )
            },
            emptyTopic: () => {
                dispatch({
                    type: EMPTY_TOPIC

                })
            },

            emptyWidget: () => {
                // alert("ABC")
                dispatch({
                    type: "EMPTY_WIDGET"

                })
            },

            // selectModule : (moduleId) =>
            //     dispatch({
            //         type : "SELECTED_MODULE",
            //         moduleId : moduleId
            //     }),

            // deleteModule: (moduleId) =>
            //     moduleService.deleteModule(moduleId)
            //         .then(status => dispatch(deleteModule(moduleId))),
            //
            // createModule: (courseId) => {
            //     moduleService.createModule(courseId, {
            //         title: 'New Module'
            //
            //     }).then(actualModule =>
            //         dispatch(createModule(actualModule)))
            // }

        }

    }


// export default connect(stateToPropertyMapper)(CourseEditorComponent)

export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(LessonListComponent)