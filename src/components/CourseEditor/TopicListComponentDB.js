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


class TopicListComponentDB extends React.Component {

    // componentDidMount() {
    //     this.props.findTopicsForLesson("EP1jlFgib7QNyEjw")
    // }
    componentDidUpdate(prevProps, prevState, snapshot ) {
        if(prevProps.lessonId !== this.props.lessonId)
            this.props.findTopicsForLesson(this.props.lessonId)
    }

    state = {
        course: ""
    }

    render() {
        return (
            <div>
                {this.props.lessonId}
                <ul>
                    {
                        this.props.topics.map(topic =>
                            <li key={topic.id}>
                                <Link
                                    to={`/course-editor/${this.props.courseId}/module/${this.props.selected}/lesson/${this.props.selectedLesson}/topic/${topic.id}`}>
                                <span
                                onClick={async () => {
                                    await this.props.selectTopic(topic.id)
                                    await this.props.findWidgetsForTopic(topic.id)
                                }}
                                >
                                    {topic.title}
                                </span>
                                </Link>
                            </li>
                        )
                    }
                </ul>
            </div>

        )
    }
}

const stateToPropertyMapper = (state) => {
    return {
        topics: state.topicDB1.topics,
        // modules: state.module1.modules,
        selected: state.module1.selected,
        selectedLesson: state.lesson1.selectedLesson,
        selectedTopic: state.topic1.selectedTopic,
        edit: state.topic1.edit
        // history: [...state.history],
        // courseId : [ ...state.courseId]
    }
}

const dispatchToPropertyMapper = (dispatch) => {
    return {

        findTopicsForLesson: (lessonId) =>
            fetch(`http://localhost:8080/api/lessons/${lessonId}/topics`)
                .then(response => response.json())
                .then(topics => dispatch({
                    type:  FIND_TOPICS_FOR_LESSON,
                    topics: topics
                })),

        findAllTopics: () =>
            fetch("http://localhost:8080/api/topics")
                .then(response => response.json())
                .then(topics => dispatch({
                    type: "SET_TOPICS",
                    topics: topics
                })),

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

    }

}

export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(TopicListComponentDB)
