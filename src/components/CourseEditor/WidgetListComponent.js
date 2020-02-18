import React from "react";
import {connect} from "react-redux";
import HeadingWidget from "./widgets/HeadingWidget";
import ParagraphWidget from "./widgets/ParagraphWidget";
import Widget from "./widgets/Widget";

class WidgetListComponent extends React.Component {

    componentDidMount() {
        // this.props.findAllWidgets();
        this.props.findWidgetsForTopic(this.props.topicId);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.topicId !== this.props.topicId)
            this.props.findWidgetsForTopic(this.props.topicId);
    }


    state = {
        widget: {},
        preview: false
    }

    save = () => {
        this.setState({
            widget: {}
        })
    }

    changePreview = () => {
        if(this.state.preview === true) {
            this.setState({
                preview: false
            })
        }else {
            this.setState({
                preview: true
            })
        }
    }

    // render() {
    //     return (
    //         <div>
    //
    //             <h1>Widget List: {this.props.selectedTopic}</h1>
    //             {this.props.widgets &&
    //             this.props.widgets.map(widget =>
    //                 <div id={widget.id}>
    //                     <Widget
    //                         save={this.save}
    //                         editing={widget === this.state.widget}
    //                         deleteWidget={this.props.deleteWidget}
    //                         widget={widget}/>
    //                     { widget !== this.state.widget &&
    //                         <button onClick={() => this.setState({
    //                             widget: widget
    //                         })}>
    //                             ...
    //                         </button>
    //                     }
    //                 </div>
    //             )
    //             }
    //             <button onClick={() => this.props.createWidget(this.props.selectedTopic)}>
    //                 +
    //             </button>
    //         </div>
    //     )
    // }

    render() {
        return (
            <div>
                <h1>Widget List: {this.props.selectedTopic}</h1>
                {this.props.widgets &&
                this.props.widgets.map(widget =>
                    <div id={widget.id}>
                        <Widget
                            // preview = {this.state.preview}
                            // changePreview = {this.changePreview}
                            save={this.save}
                            editing={widget === this.state.widget}
                            deleteWidget={this.props.deleteWidget}
                            updateWidget={this.props.updateWidget}
                            widget={widget}/>
                            { widget !== this.state.widget &&
                            <button onClick={() => this.setState({
                                widget: widget
                            })}>
                                <span>
                                <i className="fas fa-pencil-alt cursor-pointer"/>
                                </span>
                            </button>
                            }
                    </div>
                )}

                <div className="row-8" >
                    <ul className="nav nav-pills">
                        <li className="wbdv-course-add ml-auto" onClick={() => this.props.createWidget(this.props.selectedTopic)}>
                            <i className="wbdv-course-add-btn fas fa-plus fa-2x"/>
                        </li>
                    </ul>
                </div>


            </div>
        )
    }
}

const stateToPropertyManager = (state) => ({
    widgets: state.widget1.widgets,
    selectedTopic: state.topic1.selectedTopic
})

const dispatchToPropertyMapper = (dispatch) => ({

    updateWidget: (wid, newWidget) => {
      fetch(`http://localhost:8080/api/widgets/${wid}`, {
          method: "PUT",
          body: JSON.stringify(newWidget),
          headers: {
              'content-type': 'application/json'
          }
      }).then(response => response.json())
          .then(actualWidget => dispatch({
              type: "UPDATE_WIDGET",
              widget: actualWidget
          }))
    },

    createWidget: (tid) =>
        fetch(`http://localhost:8080/api/topics/${tid}/widgets`, {
            method: "POST",
            body: JSON.stringify(
                {
                    id: (new Date()).getTime() + "",
                    title: "New Widget"
                }),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json())
            .then(actualWidget => dispatch({
                type: "CREATE_WIDGET",
                widget: actualWidget
            })),
    deleteWidget: (wid) => {
        fetch(`http://localhost:8080/api/widgets/${wid}`, {
            method: "DELETE"
        })
            .then(response => response.json())
            .then(status => dispatch({
                type: "DELETE_WIDGET",
                widgetId: wid
            }))
    },
    findWidgetsForTopic: (tid) =>
        fetch(`http://localhost:8080/api/topics/${tid}/widgets`)
            .then(response => response.json())
            .then(widgets => dispatch({
                type: "FIND_WIDGETS_FOR_TOPIC",
                widgets: widgets
            })),

    findAllWidgets: () =>
        // TODO: Create a service
        fetch("http://localhost:8080/api/widgets")
            .then(response => response.json())
            .then(widgets => dispatch({
                type: "FIND_ALL_WIDGETS",
                widgets: widgets
            }))
})


export default connect(stateToPropertyManager, dispatchToPropertyMapper)(WidgetListComponent)