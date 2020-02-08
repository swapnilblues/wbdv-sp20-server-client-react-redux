import React from "react";


class CourseCardContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        editing: false,
        course: this.props.course,
        backgroundColor: 'lightgrey',
        color: 'black',
        selected: false,
        selected1: true
    }

    render() {
        return (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card card-body  wbdv-grid-card" style={{backgroundColor:this.state.backgroundColor, color: this.state.color}}
                     onClick={() => {
                         if (this.state.selected === false) {
                             this.setState({
                                 backgroundColor: 'dodgerblue',
                                 color: 'white',
                                 selected: true,
                             })
                         } else if (this.state.selected === true) {
                             this.setState({
                                 backgroundColor: 'lightgrey',
                                 color: 'black',
                                 selected: false,
                             })
                         }
                     }
                     }
                >
                    <h5 className="card-title">
                        {!this.state.editing &&
                        <a className="course-link" href="#" onClick={this.props.showCourseEditor}>
                            {this.state.course.title}
                        </a>
                        }
                        {
                            this.state.editing &&
                            <input className="card-input"
                                onChange={(e) => this.setState({
                                    course: {
                                        ...this.state.course,
                                        title: e.target.value
                                    }
                                })}
                                value={this.state.course.title}/>
                        }
                    </h5>
                    <div className="row">
                        <div className="col-sm-3">
                            <i className="fas fa-file-alt document-icon cursor-pointer"/>
                        </div>
                        <div className="col-sm-6 modified-text-div">
                            <h6>Modified 7:45 am</h6>
                        </div>
                        <div className="col-sm-3">
                            <i className="fas fa-ellipsis-v cursor-pointer"/>
                        </div>
                    </div>

                    <div className="row div-grid-buttons">
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



            // <div >
            //     {/* eslint-disable-next-line react/style-prop-object */}
            //     <div className="card" >
            //         <div className="card-body">
            //             <h5 className="card-title">Card title</h5>
            //             <p className="card-text">Some quick example text to build on the card title and make up the
            //                 bulk of the card's content.</p>
            //             <a href="#" className="btn btn-primary">Go somewhere</a>
            //         </div>
            //     </div>

                {/*<div className="row table-row" onMouseOver={() => this.setState({selected: true})}*/}
                {/*     onMouseLeave={() => this.setState({selected: false})}>*/}

                {/*    <div class="col-sm-5 course-link">*/}
                {/*        <i className="fas fa-file-alt doc-icon"/>*/}
                {/*        {!this.state.editing &&*/}
                {/*        <a className="course-link" href="#" onClick={this.props.showCourseEditor}>*/}
                {/*            {this.state.course.title}*/}
                {/*        </a>*/}
                {/*        }*/}
                {/*        {*/}
                {/*            this.state.editing &&*/}
                {/*            <input*/}
                {/*                onChange={(e) => this.setState({*/}
                {/*                    course: {*/}
                {/*                        ...this.state.course,*/}
                {/*                        title: e.target.value*/}
                {/*                    }*/}
                {/*                })}*/}
                {/*                value={this.state.course.title}/>*/}
                {/*        }*/}
                {/*    </div>*/}
                {/*    <div className="col-sm-2 d-none d-sm-block">*/}
                {/*        <h6 className="wbdv-header wbdv-owner">me</h6>*/}
                {/*    </div>*/}
                {/*    <div className="col-sm-4 d-none d-sm-block">*/}
                {/*        <h6 className="wbdv-header wbdv-last-modified">02/24/2020</h6>*/}
                {/*    </div>*/}
                {/*    <div className="col-sm-2">*/}
                {/*        {*/}
                {/*            this.state.selected &&*/}
                {/*            this.state.selected1 &&*/}
                {/*            <i className="fas fa-pencil-alt"*/}
                {/*               onClick={() => this.setState({editing: true, selected1: false})}/>*/}
                {/*        }*/}
                {/*        {*/}
                {/*            this.state.selected &&*/}
                {/*            this.state.selected1 &&*/}
                {/*            < i className="fas fa-trash-alt"*/}
                {/*                onClick={() => this.props.deleteCourse(this.props.course)}/>*/}
                {/*        }*/}
                {/*        {*/}
                {/*            this.state.editing &&*/}
                {/*            <i className="fas fa-check" onClick={(e) => {*/}
                {/*                updateCourse(this.state.course._id, this.state.course).then(status => {*/}
                {/*                })*/}
                {/*                this.setState({*/}
                {/*                    editing: false,*/}
                {/*                    selected1: true*/}
                {/*                })*/}
                {/*            }}/>*/}
                {/*        }*/}
                {/*    </div>*/}
                {/*</div>*/}

//         )
//     }
// }


export default CourseCardContainer
