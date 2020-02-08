import React from "react";
// import {updateCourse} from "../services/CourseService";
// import {deleteCourse, createCourse, findAllCourses, updateCourse} from "../services/CourseService"


class CourseRowContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        editing: false,
        course: this.props.course,
        backgroundColor: 'white',
        color: 'black',
        selected: false,
        selected1: true
    }

    render() {

        return (
            <div className="hover-row1" style={{backgroundColor:this.state.backgroundColor, color: this.state.color}}
                 onClick={() => {
                     if (this.state.selected === false) {
                         this.setState({
                             backgroundColor: 'dodgerblue',
                             color: 'white',
                             selected: true,
                         })
                     } else if (this.state.selected === true) {
                         this.setState({
                             backgroundColor: 'white',
                             color: 'black',
                             selected: false,
                         })
                     }
                 }
                 }
                // onMouseOver={() => this.setState({selected: true})}
                // onMouseLeave={() => this.setState({selected: false})}

            >
                <div className="row table-row">

                    <div className="col-9 col-sm-5 col-md-6 col-lg-5 course-name">
                        <i className="fas fa-file-alt doc-icon cursor-pointer"/>
                        {!this.state.editing &&
                        <a className="course-link" href="#" onClick={this.props.showCourseEditor}>
                            {this.state.course.title}
                        </a>
                        }
                        {
                            this.state.editing &&
                            <input
                                onChange={(e) => this.setState({
                                    course: {
                                        ...this.state.course,
                                        title: e.target.value
                                    }
                                })}
                                value={this.state.course.title}/>
                        }
                    </div>
                    <div className="col-md-3 col-sm-5 col-lg-3 d-none d-sm-block">
                        <h6 className="wbdv-header wbdv-owner">me</h6>
                    </div>
                    <div className="col-lg-2 d-none d-md-none d-lg-block">
                        <h6 className="wbdv-header wbdv-last-modified">02/24/2020</h6>
                    </div>
                    <div className="col-3 col-sm-2 col-md-3 col-lg-2">
                        {/*{   console.log("AA",this.state.selected)}*/}
                        {
                            this.state.selected &&
                            this.state.selected1 &&
                            <i className="fas fa-pencil-alt cursor-pointer"
                               onClick={() => this.setState({editing: true, selected1: false})}/>
                        }
                        {
                            this.state.selected &&
                            this.state.selected1 &&
                            < i className="fas fa-trash-alt cursor-pointer"
                                onClick={() => this.props.deleteCourse(this.props.course)}/>
                        }
                        {
                            this.state.editing &&
                            <i className="fas fa-check cursor-pointer" onClick={(e) => {
                                this.props.updateCourse(this.state.course).then(status => {
                                })
                                this.setState({
                                    editing: false,
                                    selected1: true
                                })
                            }}/>
                        }
                    </div>
                </div>
            </div>
        )
    }
}


export default CourseRowContainer
