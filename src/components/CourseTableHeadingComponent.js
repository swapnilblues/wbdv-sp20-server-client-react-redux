import React from "react";

const CourseTableHeadingComponent = ({toggle}) =>
    <div className="container course-heading course-table-heading">
        <br/><br/>
        <div className="row table-course-heading">
            <div className="col-sm-5 course-link">
                <h6 className="wbdv-header wbdv-title" aria-hidden="true">Title</h6>
            </div>
            <div className="col-sm-2 d-none d-sm-block">
                <h6 className="wbdv-header wbdv-owner">Owned by</h6>
            </div>
            <div className="col-sm-1 d-none d-sm-block">

            </div>

            <div className="col-sm-3 d-none d-md-block">
                <h6 className="wbdv-header wbdv-last-modified">Last modified</h6>
            </div>
            <div className="col-sm-0">
                <i className="fas fa-grip-horizontal fa-lg wbdv-button wbdv-list-layout wbdv-button wbdv-grid-layout cursor-pointer"
                   aria-hidden="true" onClick={toggle}/>
            </div>
            <div className="col-sm-1">
                <i className="fas fa fa-sort-alpha-down wbdv-header wbdv-sort cursor-pointer" aria-hidden="true"/>
            </div>
        </div>
    </div>
export default CourseTableHeadingComponent