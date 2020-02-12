import React from "react";
import ModuleListComponent from "./ModuleListComponent";
import LessonListComponent from "./LessonListComponent";
// import ModuleListComponent1 from "./ModuleListComponent";
import './CourseEditorComponent.css'
import {createStore, combineReducers} from 'redux';
import {connect, Provider} from 'react-redux'
import moduleReducer from "../../reducers/moduleReducer";
import lessonReducer from "../../reducers/lessonReducer";
import selectedCourse from "./ModuleListComponent";
import TopicListComponent from "./TopicListComponent";
import topicReducer from "../../reducers/topicReducer";
import {BrowserRouter as Router, Route} from "react-router-dom";

const reducer = combineReducers({
    lesson1 : lessonReducer,
    module1 : moduleReducer,
    topic1 : topicReducer
})
const store = createStore(reducer)


const moduleId = 'abcd'

const CourseEditorComponent = ({hideCourseEditor, match, history, courseId}) =>
    <Provider store={store}>
        <div>
            <h1>ABCD {courseId} </h1>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

                <a className="nav-link cursor-pointer">
                    <i className="fas fa-times wbdv-course-editor wbdv-close" onClick={() => history.push("/")}/>
                </a>
                <a href="#" className="navbar-brand wbdv-course-title">CS5610-WebDev</a>

                <button className="navbar-toggler" data-toggle="collapse" data-target="#navbar-menu">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbar-menu">
                    {/*<LessonListComponent/>*/}

                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a href="#" className="nav-link wbdv-page-tab">Build</a>
                        </li>
                        <li className="nav-item active">
                            <a href="#" className="nav-link wbdv-page-tab">Pages</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link wbdv-page-tab">Theme</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link wbdv-page-tab">Store</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link wbdv-page-tab">Apps</a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link wbdv-page-tab">Settings</a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link">
                                <i class="fas fa-plus wbdv-new-page-btn"/>
                            </a>
                        </li>


                    </ul>

                </div>

            </nav>

            <div className="container">
                <div className="row">
                    {/*<div className="col-4">*/}
                    {/*    <ModuleListComponent*/}
                    {/*        courseId = {courseId}*/}

                    {/*    />*/}
                    {/*</div>*/}
                    <div className="col-sm-4 bg-secondary">

                        {/*<Router>*/}
                        {/*    <Route path="/course-editor/:courseId"*/}
                        {/*           exact={true}*/}
                        {/*           render={(props) =>*/}
                        {/*               <CourseEditorComponent*/}
                        {/*                   courseId = {props.match.params.courseId}*/}
                        {/*                   hideCourseEditor={this.hideCourseEditor}*/}
                        {/*                   {...props}/>*/}
                        {/*           }*/}
                        {/*    />*/}


                            {/*<Route path="/course-editor/:courseId/:moduleId"*/}
                            {/*       exact={true}*/}
                            {/*       render={(props) =>*/}
                            {/*           <ModuleListComponent*/}
                            {/*               courseId = {props.match.params.courseId}*/}
                            {/*               moduleId = {props.match.params.moduleId}*/}
                            {/*               // hideCourseEditor={this.hideCourseEditor}*/}
                            {/*               {...props}/>*/}
                            {/*       }*/}
                            {/*/>*/}


                        <ModuleListComponent
                            courseId = {courseId}
                            moduleId = {moduleId}

                        />

                        {/*<ul className="list-group wbdv-module-list">*/}
                        {/*    <li className="list-group-item bg-dark wbdv-module-item">*/}
                        {/*        <span className="wbdv-module-item-title">Module 1 - JQuery</span>*/}
                        {/*        <i className="fas fa-times wbdv-module-item-delete-btn"/>*/}
                        {/*    </li>*/}

                        {/*    <li className="list-group-item active wbdv-module-item">*/}
                        {/*        <span className="wbdv-module-item-title">Module 2 - React</span>*/}
                        {/*        <i className="fas fa-times wbdv-module-item-delete-btn"/>*/}
                        {/*    </li>*/}

                        {/*    <li className="list-group-item bg-dark wbdv-module-item">*/}
                        {/*        <span className="wbdv-module-item-title">Module 3 - Redux</span>*/}
                        {/*        <i className="fas fa-times wbdv-module-item-delete-btn"/>*/}
                        {/*    </li>*/}

                        {/*    <li className="list-group-item bg-dark wbdv-module-item">*/}
                        {/*        <span className="wbdv-module-item-title">Module 4 - Native</span>*/}
                        {/*        <i className="fas fa-times wbdv-module-item-delete-btn"/>*/}
                        {/*    </li>*/}

                        {/*    <li className="list-group-item bg-dark wbdv-module-item">*/}
                        {/*        <span className="wbdv-module-item-title">Module 5 - Angular</span>*/}
                        {/*        <i className="fas fa-times wbdv-module-item-delete-btn"/>*/}
                        {/*    </li>*/}

                        {/*    <li className="list-group-item bg-dark wbdv-module-item">*/}
                        {/*        <span className="wbdv-module-item-title">Module 6 - Node</span>*/}
                        {/*        <i className="fas fa-times wbdv-module-item-delete-btn"/>*/}
                        {/*    </li>*/}

                        {/*    <li className="list-group-item bg-dark wbdv-module-item">*/}
                        {/*        <span className="wbdv-module-item-title">Module 7 - Mongo</span>*/}
                        {/*        <i className="fas fa-times wbdv-module-item-delete-btn"/>*/}
                        {/*    </li>*/}

                        {/*    <li className="list-group-item bg-dark wbdv-module-item">*/}
                        {/*        <i className="fas fa-plus wbdv-module-item-add-btn"/>*/}
                        {/*    </li>*/}

                        {/*</ul>*/}


                    </div>
                    <div className="col-sm-8">

                            <LessonListComponent/>
                        {/*<ul className="nav nav-pills wbdv-topic-pill-list">*/}
                        {/*    <LessonListComponent/>*/}

                        {/*    */}
                        {/*    <li className="wbdv-topic-pill bg-secondary">*/}
                        {/*        <a className="nav-link text-white" href="#">Topic 1</a>*/}
                        {/*    </li>*/}
                        {/*    <li className="wbdv-topic-pill bg-secondary">*/}
                        {/*        <a className="nav-link text-white active" href="#">Topic 2</a>*/}
                        {/*    </li>*/}
                        {/*    <li className="wbdv-topic-pill bg-secondary">*/}
                        {/*        <a className="nav-link text-white" href="#">Topic 3</a>*/}
                        {/*    </li>*/}
                        {/*    <li className="wbdv-topic-pill bg-secondary">*/}
                        {/*        <a className="nav-link text-white" href="#">Topic 4</a>*/}
                        {/*    </li>*/}
                        {/*    <li className="wbdv-topic-add-btn bg-secondary">*/}
                        {/*        <a href="#" className="nav-link text-white">*/}
                        {/*            <i className="fas fa-plus"/>*/}
                        {/*        </a>*/}
                        {/*    </li>*/}
                        {/*</ul>*/}


                        <div>
                        <TopicListComponent/>
                        {/*<ul className="nav nav-pills wbdv-topic-pill-list">*/}

                        {/*    <li className="wbdv-topic-pill bg-secondary">*/}
                        {/*        <a className="nav-link text-white" href="#">Topic 1</a>*/}
                        {/*    </li>*/}
                        {/*    <li className="wbdv-topic-pill bg-secondary">*/}
                        {/*        <a className="nav-link text-white active" href="#">Topic 2</a>*/}
                        {/*    </li>*/}
                        {/*    <li className="wbdv-topic-pill bg-secondary">*/}
                        {/*        <a className="nav-link text-white" href="#">Topic 3</a>*/}
                        {/*    </li>*/}
                        {/*    <li className="wbdv-topic-pill bg-secondary">*/}
                        {/*        <a className="nav-link text-white" href="#">Topic 4</a>*/}
                        {/*    </li>*/}
                        {/*    <li className="wbdv-topic-add-btn bg-secondary">*/}
                        {/*        <a href="#" className="nav-link text-white">*/}
                        {/*            <i className="fas fa-plus"/>*/}
                        {/*        </a>*/}
                        {/*    </li>*/}
                        {/*</ul>*/}
                        </div>

                        <ul className="nav nav-pills">
                            <li className="wbdv-topic-edit  ml-auto">
                                <button className="wbdv-topic-save btn btn-success">Save</button>
                            </li>
                            <li className="wbdv-topic-edit ml-right">
                                <a className="nav-link text-white" href="#">
                                    <button className="wbdv-topic-preview btn btn-white">Preview</button>
                                </a>
                            </li>
                            <li className="wbdv-topic-edit ml-right">
                                <a href="#" className="wbdv-topic-toggle nav-link text-dark">
                                    <i className="wbdv-topic-toggle fas fa-toggle-off fa-lg"/>
                                </a>
                            </li>
                        </ul>
                        <br/>
                        <div className="wbdv-topic-widget-div row-4 border border-secondary">
                            <ul className="nav nav-pills">
                                <li className="wbdv-topic-edit">
                                    <h4 className="wbdv-topic-heading">Heading widget</h4>
                                </li>
                                <li className="wbdv-topic-edit ml-auto">
                                    <a href="#" className="wbdv-arrow-link nav-link text-dark">
                                        <i className="wbdv-topic-arrow-up ml-auto far fa-arrow-alt-circle-up fa-lg"/>
                                    </a>
                                </li>
                                <li className="wbdv-topic-edit">
                                    <a href="#" className="wbdv-arrow-link nav-link text-dark">
                                        <i className="wbdv-topic-arrow-down far fa-arrow-alt-circle-down fa-lg"/>
                                    </a>
                                </li>
                                <li className="wbdv-topic-edit">


                                    <label>
                                        <select className="form-control wbdv-topic-edit-heading">
                                            <option value="Heading 1">Heading 1</option>
                                            <option value="Heading 2">Heading 2</option>
                                            <option value="Heading 3">Heading 3</option>
                                            <option value="Heading 4">Heading 4</option>
                                        </select>
                                    </label>

                                </li>
                                <li className="wbdv-topic-edit">
                                    <a href="#" className="wbdv-arrow-link nav-link text-dark">
                                        <i className="wbdv-topic-edit-cancel-btn fas fa-times-circle fa-lg"/>

                                    </a>
                                </li>
                            </ul>

                            <br/>
                            <form>
                                <div className="outer-form">
                                    <div className="wdbv-widget-form form-group row">

                                        <input type="text" className="form-control wbdv-field wbdv-heading-text"
                                               id="heading"
                                               placeholder="Heading Text"/>

                                    </div>
                                </div>
                                <div className="outer-form">
                                    <div className="wdbv-widget-form form-group row">

                                        <select className="form-control wbdv-field wbdv-heading1" id="heading1">
                                            <option value="Heading Widget">Heading Widget</option>
                                            <option value="Paragraph Widget">Paragraph Widget</option>
                                            <option value="List Widget">List Widget</option>
                                            <option value="Image Widget">Image Widget</option>
                                        </select>

                                    </div>
                                </div>
                                <div className="outer-form">
                                    <div className="wdbv-widget-form form-group row">
                                        <input type="text" className="form-control wbdv-field wbdv-widget-name"
                                               id="widgetName" placeholder="Widget name"/>

                                    </div>
                                </div>

                            </form>

                            <h5>Preview</h5>
                            <h1>Heading Text</h1>


                        </div>

                        <div className="row-8">
                            <ul className="nav nav-pills">
                                <li className="wbdv-course-add ml-auto">
                                    <i className="wbdv-course-add-btn fas fa-plus fa-2x"/>
                                </li>
                            </ul>
                        </div>


                    </div>
                </div>

            </div>


        </div>
    </Provider>

// const stateToPropertyMapper = (state) => {
//     return {
//         modules: state.module1.modules,
//         selected: state.module1.selected,
//         history: [...state.history],
//         courseId : [ ...state.courseId]
//     }
// }
// export default connect(stateToPropertyMapper)(CourseEditorComponent)
export default CourseEditorComponent
