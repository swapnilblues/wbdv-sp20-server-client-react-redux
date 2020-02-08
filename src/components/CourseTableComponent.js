import React from "react";
import CourseRowContainer from "../containers/CourseRowContainer";
import CourseTableHeadingComponent from "./CourseTableHeadingComponent";

const CourseTableComponent = ({courses, toggle, updateCourse, deleteCourse, showCourseEditor}) =>
    <div className="table-view">
        <CourseTableHeadingComponent
        toggle ={toggle}
        />
        <div className="container-line course-heading d-none d-sm-block">
        </div>
        <div className="container course-heading">



            <ul className="list-group">
                {
                    courses.map(function (course, index) {
                        return (

                // style={{backgroundColor: 'green'}}

                            <CourseRowContainer className="container"
                                                showCourseEditor={showCourseEditor}
                                                deleteCourse={deleteCourse}
                                                updateCourse={updateCourse}
                                                key={course._id}
                                                course={course}/>

                        )
                    })
                }
            </ul>
        </div>
    </div>
export default CourseTableComponent
