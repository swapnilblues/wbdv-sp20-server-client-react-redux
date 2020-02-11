import React from "react";
// import TopicListItem from "./TopicListItem";
import {connect} from "react-redux";
import {createModule, deleteModule, FIND_ALL_MODULES} from "../../actions/moduleAction";
import moduleService from "../../services/ModuleService"
import topicService from "../../services/TopicService"
import {FIND_ALL_TOPICS} from "../../actions/topicAction";


class TopicListComponent extends React.Component {


    render()
    {
        return (
            <div>
                <ul className="nav nav-pills wbdv-topic-pill-list">
                    <h1>{this.props.selectedLesson}</h1>
                    {
                        this.props.topics && this.props.topics.map(topic =>
                            <li className="wbdv-topic-pill bg-secondary">
                                <a className="nav-link text-white" href="#">{topic.title}</a>
                            </li>
                        )
                    }
                    <li className="wbdv-topic-add-btn bg-secondary">
                        <a href="#" className="nav-link text-white">
                            <i className="fas fa-plus"/>
                        </a>
                    </li>
                </ul>

            </div>

        )
    }
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
        // selected: state.module1.selected,
        selectedLesson : state.lesson1.selectedLesson
        // history: [...state.history],
        // courseId : [ ...state.courseId]
    }
}

const dispatchToPropertyMapper = (dispatch) => {
    return {

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
