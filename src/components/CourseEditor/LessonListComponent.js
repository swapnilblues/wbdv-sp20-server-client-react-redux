import React from "react";
// import TopicListItem from "./TopicListItem";
import {connect} from "react-redux";
import {createModule, deleteModule, FIND_ALL_MODULES} from "../../actions/moduleAction";
import moduleService from "../../services/ModuleService"
import lessonService from "../../services/LessonService"
import {FIND_ALL_LESSONS} from "../../actions/lessonAction";

const LessonListComponent = ({lessons,selected}) => {

    return (
        <div>
            <ul className="nav nav-pills wbdv-topic-pill-list">
                <h1>{selected}</h1>
                {
                    lessons && lessons.map(lesson =>
                        <li className="wbdv-topic-pill bg-secondary">
                            <a className="nav-link text-white" href="#">{lesson.title}</a>
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

// const stateToPropertyMapper = (state) => {
//     return {
//         lessons: state.lesson1.lessons
//     }
// }

 const stateToPropertyMapper = (state) => {
     return {
           lessons: state.lesson1.lessons,
           modules: state.module1.modules,
           selected: state.module1.selected,
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

export default connect(stateToPropertyMapper)(LessonListComponent)
