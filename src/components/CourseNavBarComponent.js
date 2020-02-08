import React from "react";
// import CourseManagerContainer from "./CourseManagerContainer";
const CourseNavBarComponent = () =>
    <div>
        <button onClick={this.toggle}>Toggle</button>
        <input
            onChange={this.updateForm}
            value={this.state.newCourseTitle}/>
        <button onClick={this.addCourse}>Add Course</button>
    </div>

export default CourseNavBarComponent
