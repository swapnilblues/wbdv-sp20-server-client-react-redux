import React from "react";
import CourseManagerHeadingComponent from "../components/CourseManagerHeadingComponent";
import CourseTableComponent from "../components/CourseTableComponent";
import CourseGridComponent from "../components/CourseGridComponent";
import CourseEditorComponent from "../components/CourseEditor/CourseEditorComponent";
import {deleteCourse, createCourse, findAllCourses, updateCourse} from "../services/CourseService"

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
        const status = await updateCourse(course._id,course)
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
                {/*<h1>Course Manager</h1>*/}
                {
                    this.state.editingCourse
                    && <CourseEditorComponent hideCourseEditor={this.hideCourseEditor}/>
                }
                {!this.state.editingCourse &&
                <div>

                    <div className="navbar navbar-expand-sm navbar-dark bg-dark">

                        <i className="wbdv-toggle-btn fas fa-sliders-h fa-2x cursor-pointer" />

                        <div className="collapse navbar-collapse" id="navbar-item">
                            <CourseManagerHeadingComponent/>
                        </div>

                        <div id="navbar-item">
                            <input
                                className="form-control"
                                placeholder="New Course"
                                onChange={this.updateForm}
                                value={this.state.newCourseTitle}/>
                        </div>
                        <div id="navbar-item">
                            <i className="wbdv-course-add-btn fas fa-plus-circle fa-2x cursor-pointer" onClick={this.addCourse}/>
                        </div>


                    </div>

                    {this.state.layout === 'table' &&
                    <CourseTableComponent
                        showCourseEditor={this.showCourseEditor}
                        deleteCourse={this.deleteCourse}
                        updateCourse = {this.updateCourse}
                        toggle = {this.toggle}
                        courses={this.state.courses}/>}
                    {this.state.layout === 'grid' &&
                    <CourseGridComponent
                        showCourseEditor={this.showCourseEditor}
                        deleteCourse={this.deleteCourse}
                        updateCourse = {this.updateCourse}
                        toggle = {this.toggle}
                        courses={this.state.courses}/>}
                </div>
                }
            </div>
        )
    }
}

export default CourseManagerContainer
