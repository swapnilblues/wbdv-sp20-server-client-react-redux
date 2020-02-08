import CourseManagerHeadingComponent from "./CourseManagerHeadingComponent";
import CourseTableComponent from "./CourseTableComponent";
import CourseGridComponent from "./CourseGridComponent";
import React from "react";

const CourseListComponent = ({
        layout,
        updateForm,
        newCourseTitle,
        addCourse,
        showCourseEditor,
        deleteCourse,
        updateCourse,
        courses,
        toggle
    }) =>
<div>

    <div className="navbar navbar-expand-sm navbar-dark bg-dark">

        <i className="wbdv-toggle-btn fas fa-sliders-h fa-2x cursor-pointer"/>

        <div className="collapse navbar-collapse" id="navbar-item">
            <CourseManagerHeadingComponent/>
        </div>

        <div id="navbar-item">
            <input
                className="form-control"
                placeholder="New Course"
                onChange={updateForm}
                value={newCourseTitle}/>
        </div>
        <div id="navbar-item">
            <i className="wbdv-course-add-btn fas fa-plus-circle fa-2x cursor-pointer"
               onClick={addCourse}/>
        </div>


    </div>

    {layout === 'table' &&
    <CourseTableComponent
        showCourseEditor={showCourseEditor}
        deleteCourse={deleteCourse}
        updateCourse={updateCourse}
        toggle={toggle}
        courses={courses}/>}
    {layout === 'grid' &&
    <CourseGridComponent
        showCourseEditor={showCourseEditor}
        deleteCourse={deleteCourse}
        updateCourse={updateCourse}
        toggle={toggle}
        courses={courses}/>}
</div>

export default CourseListComponent