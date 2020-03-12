import React from "react";
// import TopicListItem from "./TopicListItem";
import {connect} from "react-redux";
import {createModule, deleteModule} from "../../actions/moduleAction";
import moduleService from "../../services/ModuleService"
import topicService from "../../services/TopicService"
import {CREATE_TOPIC, DELETE_TOPIC, EMPTY_TOPIC, FIND_TOPICS_FOR_LESSON, UPDATE_TOPIC} from "../../actions/topicAction";
import lessonService from "../../services/LessonService";
import {CREATE_LESSON, UPDATE_LESSON} from "../../actions/lessonAction";
import {Link} from "react-router-dom";


class TopicListComponent extends React.Component {

    state = {
        course: ""
    }

    render() {
        return (
            <div>
                <ul className="nav nav-pills wbdv-topic-pill-list">
                    <h3>Topics:</h3>
                    {/*<h1>{this.props.selectedLesson}</h1>*/}
                    {
                        this.props.topics && this.props.topics.map(topic => {
                               // alert(this.props.selectedTopic)
                                if (!this.props.edit && this.props.selectedTopic === topic.id) {
                                    // alert("A")
                                    return (
                                        <Link to={`/course-editor/${this.props.courseId}/module/${this.props.selected}/lesson/${this.props.selectedLesson}/topic/${topic.id}`} >
                                        <li className="list-group-item wbdv-topic-pill active"
                                            onClick={async () => {
                                                // this.props.findTopicsForLesson(lesson.id)
                                                // await
                                                // await this.props.selectLesson(topic.id)
                                                // await this.props.findTopicsForLesson(topic.id)
                                            }}>
                                            <a className="nav-link text-white" href="#">{topic.title}</a>

                                            <span
                                                onClick={async ()=> {
                                                    await this.props.editState2()

                                                    // await this.props.findWidgetsForTopic(this.props.id)
                                                }}
                                            >
                                <i className="fas fa-pencil-alt cursor-pointer wbdv-module-item-edit-btn"/>
                                </span>

                                        </li>
                                        </Link>
                                    )

                                } else if(this.props.edit && this.props.selectedTopic === topic.id) {
                                    // alert("B")
                                    return (
                                        <Link to={`/course-editor/${this.props.courseId}/module/${this.props.selected}/lesson/${this.props.selectedLesson}/topic/${topic.id}`} >
                                        <li className="list-group-item wbdv-topic-pill active"
                                            // onClick={async () => {
                                            //     await this.props.selectLesson(lesson.id)
                                            //     await this.props.findTopicsForLesson(lesson.id)
                                            // }}
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
                                            <span
                                                onClick={async () => {
                                                    await this.props.setCurrTitle2(this.state.course, this.props.selectedTopic)
                                                    // await this.props.editStateTrue1()
                                                    await this.props.findTopicsForLesson(this.props.selectedLesson)
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
                                            <span
                                                onClick={async () => {
                                                await this.props.deleteTopic(topic.id)
                                                // await this.props.setLessonToDefault()
                                                await this.props.emptyWidget()
                                                await this.props.editStateTrue2()
                                                // await this.props.editStateTrue1()
                                            }}
                                            >
                                <i className="fas fa-times wbdv-module-item-delete-btn"/>
                                   </span>
                                        </li>
                                        </Link>
                                    )
                                }else {
                                    // alert("C")
                                    return (
                                        <Link to={`/course-editor/${this.props.courseId}/module/${this.props.selected}/lesson/${this.props.selectedLesson}/topic/${topic.id}`} >
                                        <li className="list-group-item wbdv-topic-pill bg-secondary"
                                            onClick={async () => {
                                                // this.props.findTopicsForLesson(lesson.id)
                                                // await
                                                await this.props.selectTopic(topic.id)
                                                await this.props.findWidgetsForTopic(topic.id)

                                                // await this.props.findTopicsForLesson(topic.id)
                                            }}>
                                            <a className="nav-link text-white" href="#">{topic.title}</a>

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
                                //             // this.props.findTopicsForLesson(lesson.id)
                                //             // await
                                //             await this.props.selectLesson(lesson.id)
                                //             await this.props.findTopicsForLesson(lesson.id)
                                //         }}>
                                //         <a className="nav-link text-white" href="#">{lesson.title}</a>
                                // <span>
                                // <i className="fas fa-check cursor-pointer wbdv-module-item-check-btn"/>
                                // </span>
                                // <span>
                                // <i className="fas fa-pencil-alt cursor-pointer wbdv-module-item-edit-btn"/>
                                // </span>
                                //         <span onClick={async () => {
                                //             await this.props.deleteLesson(lesson.id)
                                //             // await this.props.setLessonToDefault()
                                //             await this.props.emptyTopic()
                                //         }}>
                                // <i className="fas fa-times wbdv-module-item-delete-btn"/>
                                //    </span>
                                //     </li>)
                            }
                        )
                    }

                    {this.props.selectedLesson !== 'cde' &&
                    <li className="wbdv-topic-add-btn bg-secondary"
                        onClick={() => this.props.createTopic(this.props.selectedLesson)}>
                        <a href="#" className="nav-link text-white">
                            <i className="fas fa-plus"/>
                        </a>
                    </li>
                    }
                </ul>

            </div>

        )
    }
    // render()
    // {
    //     return (
    //         <div>
    //             <ul className="nav nav-pills wbdv-topic-pill-list">
    //                 <h1>{this.props.selectedLesson}</h1>
    //                 {
    //                     this.props.topics && this.props.topics.map(topic =>
    //                         <li className="wbdv-topic-pill bg-secondary">
    //                             <a className="nav-link text-white" href="#">{topic.title}</a>
    //                             <i onClick={  () =>
    //                                 this.props.deleteTopic(topic.id)
    //                                 // await this.props.setLessonToDefault()
    //                                 // await this.props.emptyTopic()
    //                             }
    //                                className="fas fa-times wbdv-module-item-delete-btn"/>
    //                         </li>
    //                     )
    //                 }
    //                 {this.props.selectedLesson !== 'cde' &&
    //                 <li className="wbdv-topic-add-btn bg-secondary"
    //                     onClick={() => this.props.createTopic(this.props.selectedLesson)}>
    //                     <a href="#" className="nav-link text-white">
    //                         <i className="fas fa-plus"/>
    //                     </a>
    //                 </li>
    //                 }
    //             </ul>
    //
    //         </div>
    //
    //     )
    // }
}

// const stateToPropertyMapper = (state) => {
//     return {
//         topics: state.topic1.topics
//     }
// }

const stateToPropertyMapper = (state) => {
    return {
        topics: state.topic1.topics,
        // modules: state.module1.modules,
        selected: state.module1.selected,
        selectedLesson : state.lesson1.selectedLesson,
        selectedTopic : state.topic1.selectedTopic,
        edit: state.topic1.edit
        // history: [...state.history],
        // courseId : [ ...state.courseId]
    }
}

const dispatchToPropertyMapper = (dispatch) => {
    return {

        setCurrTitle2: async (newTopic, topicId) => {
            await topicService.updateTopic(newTopic, topicId)
                .then(res =>
                    dispatch({type: UPDATE_TOPIC})
                )
        },

        editState2: () => {
            // alert("ES")
            dispatch({
                type: "EDIT_TOPIC"
            })
        },

        editStateTrue2: () => {
            dispatch({
                type: "EDIT_TRUE_TOPIC"
            })
        },

        findWidgetsForTopic: (tid) =>
            fetch(`http://localhost:8080/api/topics/${tid}/widgets`)
                .then(response => response.json())
                .then(widgets => dispatch({
                    type: "FIND_WIDGETS_FOR_TOPIC",
                    widgets: widgets
                })),

        createTopic: (moduleId) => {
            topicService.createTopic(moduleId, {
                title: 'New Topic'

            }).then(actualTopic =>
                dispatch({
                    type: CREATE_TOPIC,
                    newTopic: actualTopic
                }))
        },

        deleteTopic: (topicId) =>
            topicService.deleteTopic(topicId)
                .then(status => dispatch({
                    type: DELETE_TOPIC,
                    topicId: topicId
                })),

        findTopicsForLesson: (lessonId) =>
            fetch(`http://localhost:8080/api/lessons/${lessonId}/topics`)
                .then(response => response.json())
                .then(topics => dispatch({
                    type:  FIND_TOPICS_FOR_LESSON,
                    topics: topics
                })),

        selectTopic: (topicId) => {
            dispatch({
                    type: "SELECTED_TOPIC",
                    topicId: topicId
                }
            )
        },

        emptyWidget: () => {
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

export default connect(stateToPropertyMapper,dispatchToPropertyMapper)(TopicListComponent)
