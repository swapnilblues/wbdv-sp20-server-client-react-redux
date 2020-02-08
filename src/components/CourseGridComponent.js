import React from "react";
import CourseCardContainer from "../containers/CourseCardContainer";
import CourseGridHeadingComponent from "./CourseGridHeadingComponent";

const CourseGridComponent = ({courses, toggle, updateCourse, deleteCourse, showCourseEditor}) =>
    <div className="grid-view">
        <a href="#" className="float">
            <i className="fa fa-plus my-float cursor-pointer" aria-hidden="true"/>
        </a>
        <CourseGridHeadingComponent
            toggle={toggle}
        />

        <div className="container-line course-heading d-none d-sm-block">
        </div>
        <div className="row">

            {/*<ul className="list-group">*/}
            {
                courses.map(function (course, index) {
                    return (

                        <CourseCardContainer className="container"
                                             showCourseEditor={showCourseEditor}
                                             deleteCourse={deleteCourse}
                                             updateCourse={updateCourse}
                                             key={course._id}
                                             course={course}/>
                    )
                })
            }
            {/*</ul>*/}
        </div>
    </div>
export default CourseGridComponent
