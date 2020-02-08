import React from "react";

const CourseGridHeadingComponent = ({toggle}) =>
    <div className="container course-heading course-grid-heading">
        <br/><br/>
        <div className="row grid-course-heading">
            <div className="col-sm-5 course-link">
                <h6 className="wbdv-header wbdv-title" aria-hidden="true">Recent documents</h6>
            </div>
            <div className="col-sm-4 d-none d-sm-block">
                <h6 className="wbdv-header wbdv-owner">Owned by me</h6>
                <i className="fa fa-angle-down cursor-pointer" aria-hidden='true'/>
            </div>
            <div className="col-sm-1">
                <i className="fas fa-bars cursor-pointer" onClick = {toggle}/>
            </div>
            <div className="col-sm-1">
                <i className="fas fa-sort-alpha-down cursor-pointer" />
            </div>
            <div className="col-sm-1">
                <i className="fas fa-folder cursor-pointer"/>
            </div>
        </div>
    </div>
export default CourseGridHeadingComponent