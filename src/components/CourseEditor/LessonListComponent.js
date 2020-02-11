import React from "react";
// import TopicListItem from "./TopicListItem";
import {connect} from "react-redux";
import moduleService from "../../services/ModuleService"
import lessonService from "../../services/LessonService"
import topicService from "../../services/TopicService";
import {CREATE_LESSON, DELETE_LESSON} from "../../actions/lessonAction";
import {EMPTY_TOPIC, FIND_ALL_TOPICS} from "../../actions/topicAction";
import {DELETE_MODULE, deleteModule} from "../../actions/moduleAction";

class LessonListComponent extends React.Component {

    // LessonListComponent = ({lessons, selected, selectedLesson}) => {
    render() {
        return (
            <div>
                <ul className="nav nav-pills wbdv-topic-pill-list">
                    <h1>{this.props.selected}</h1>
                    {
                        this.props.lessons && this.props.lessons.map(lesson =>
                            <li className="wbdv-topic-pill bg-secondary"
                                onClick={async () => {
                                    // this.props.findTopicsForLesson(lesson._id)
                                    // await
                                    await this.props.selectLesson(lesson._id)
                                    await this.props.findTopicsForLesson(lesson._id)
                                }}>
                                <a className="nav-link text-white" href="#">{lesson.title}</a>
                                <i onClick={ async () => {
                                    await this.props.deleteLesson(lesson._id)
                                    // await this.props.setLessonToDefault()
                                    await this.props.emptyTopic()
                                }}
                                   className="fas fa-times wbdv-module-item-delete-btn"/>
                            </li>
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
            // history: [...state.history],
            // courseId : [ ...state.courseId]
        }
    }

const
    dispatchToPropertyMapper = (dispatch) => {
        return {

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

            findTopicsForLesson: (lessonId) => {
                // console.log("Here",moduleId)
                topicService.findTopicsForLesson(lessonId)
                    .then(actualTopics =>
                        dispatch({
                            type: FIND_ALL_TOPICS,
                            topics: actualTopics

                        }))
            },
            selectLesson: (lessonId) => {
                dispatch({
                        type: "SELECTED_LESSON",
                        lessonId: lessonId
                    }
                )
            },
            emptyTopic: () => {
                dispatch({
                    type: EMPTY_TOPIC

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
