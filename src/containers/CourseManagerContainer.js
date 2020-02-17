import React from "react";
import CourseManagerHeadingComponent from "../components/CourseManagerHeadingComponent";
import CourseTableComponent from "../components/CourseTableComponent";
import CourseGridComponent from "../components/CourseGridComponent";
import CourseEditorComponent from "../components/CourseEditor/CourseEditorComponent";
import {deleteCourse, createCourse, findAllCourses, updateCourse} from "../services/CourseService"
import Page1 from "../components/Page1";
import Page2 from "../components/Page2";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import CourseListComponent from "../components/CourseListComponent";

// import Link from "react-router-dom/modules/Link";

class CourseManagerContainer extends React.Component {
    state = {
        layout: 'table',
        editingCourse: false,
        //newCourseTitle: 'Whatever',
        courses: []
    }

    componentDidMount = async () => {

        const allCourses = await findAllCourses()
        this.setState({
            courses: allCourses
        })

        // findAllCourses()
        //     .then(courses => this.setState({
        //         courses: courses
        //     }))
    }

    deleteCourse = async (deletedCourse) => {
        const status = await deleteCourse(deletedCourse._id)
        const courses = await findAllCourses()
        this.setState({
            courses: courses
        })
        // this.setState(prevState => ({
        //     courses: prevState.courses.filter(course => course._id !== deletedCourse._id)
        // }))
    }

    updateCourse = async (course) => {
        const status = await updateCourse(course._id, course)
        const courses1 = await findAllCourses()
        this.setState({
            courses: courses1
        })
        // this.setState(prevState => ({
        //     courses: prevState.courses.filter(course => course._id !== deletedCourse._id)
        // }))s.setState(prevState => ({
        //     courses: prevState.courses.filter(course => course._id !== deletedCourse._id)
        // }))
    }

    toggle = () => {
        this.setState((prevState) => {
            if (prevState.layout === 'grid') {
                return {
                    layout: 'table'
                }
            } else {
                return {
                    layout: 'grid'
                }
            }
        })
    }

    showCourseEditor = () =>
        this.setState({
            editingCourse: true
        })

    hideCourseEditor = () =>
        this.setState({
            editingCourse: false
        })

    addCourse = async () => {
        const newCourse = {
            title: this.state.newCourseTitle
        }
        const actualCourse = await createCourse(newCourse)
        console.log(actualCourse)
        const allCourses = await findAllCourses()
        this.setState({
            courses: allCourses
        })
        // this.setState(prevState => ({
        //     courses: [
        //         ...prevState.courses,
        //         {
        //             _id: (new Date()).getTime() + "",
        //             title: prevState.newCourseTitle
        //         }
        //     ]
        // }))
    }

    updateForm = (e) =>
        this.setState({
            newCourseTitle: e.target.value
        })

    render() {
        return (
            <div>
                {/*<Router>*/}
                {/*    <Link to="/page1">*/}
                {/*        Page 1*/}
                {/*    </Link>*/}
                {/*    <Link to="/page2">*/}
                {/*        Page 2*/}
                {/*    </Link>*/}
                {/*    <Route path = "/page1" exact={true} component = {Page1}/>*/}
                {/*    <Route path = "/page2/:message" exact={true} component = {Page2}/>*/}
                {/*</Router>*/}
                {/*<h1>Course Manager</h1>*/}
                {/*{   */}
                {/*    this.state.editingCourse && */}
                <Router>
                    <Route path="/course-editor/:courseId"
                           exact={true}
                           render={(props) =>
                               <CourseEditorComponent
                                   courseId={props.match.params.courseId}
                                   hideCourseEditor={this.hideCourseEditor}
                                   {...props}/>
                           }
                    />

                    <Route path="/course-editor/:courseId/topic/:topicId"
                           exact={true}
                           render={(props) =>
                               <CourseEditorComponent
                                   courseId={props.match.params.courseId}
                                   topicId={props.match.params.topicId}
                                   hideCourseEditor={this.hideCourseEditor}
                                   {...props}/>
                           }
                    />

                    <Route path="/course-editor/:courseId/module/:moduleId"
                           exact={true}
                           render={(props) =>
                               <CourseEditorComponent
                                   courseId={props.match.params.courseId}
                                   moduleId={props.match.params.moduleId}
                                   hideCourseEditor={this.hideCourseEditor}
                                   {...props}/>
                           }
                    />

                    <Route path="/course-editor/:courseId/module/:moduleId/lesson/:lessonId"
                           exact={true}
                           render={(props) =>
                               <CourseEditorComponent
                                   courseId={props.match.params.courseId}
                                   moduleId={props.match.params.moduleId}
                                   lessonId={props.match.params.lessonId}
                                   hideCourseEditor={this.hideCourseEditor}
                                   {...props}/>
                           }
                    />

                    <Route path="/"
                           exact={true}

                           render={() =>
                               <CourseListComponent
                                   layout={this.state.layout}
                                   updateForm={this.updateForm}
                                   newCourseTitle={this.state.newCourseTitle}
                                   addCourse={this.addCourse}
                                   showCourseEditor={this.showCourseEditor}
                                   deleteCourse={this.deleteCourse}
                                   updateCourse={this.updateCourse}
                                   courses={this.state.courses}
                                   toggle={this.toggle}
                               />
                           }/>

                    {/*}*/}
                    {/*{!this.state.editingCourse &&*/}

                    {/*}*/}

                </Router>
            </div>
        )
    }
}

export default CourseManagerContainer
