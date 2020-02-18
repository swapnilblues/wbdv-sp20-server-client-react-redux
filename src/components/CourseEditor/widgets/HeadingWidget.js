import React from "react";

export default class HeadingWidget extends React.Component {

    state = {
        widget: this.props.widget
    }

    // render() {
    //     return (
    //         <div>
    //             { this.props.editing &&
    //                 <div>
    //                     <input
    //                         onChange={(e) => {
    //                         const newTitle = e.target.value;
    //                         this.setState(prevState => ({
    //                             widget: {
    //                                 ...prevState.widget,
    //                                 title: newTitle
    //                             }
    //                         }))
    //                         }
    //                         }
    //                         value = {this.state.widget.title}
    //                     />
    //                 <select
    //                     onChange={(e) => {
    //                         let newSize = e.target.value
    //                         newSize = parseInt(newSize)
    //                         this.setState(prevState => ({
    //                             widget: {
    //                                 ...prevState.widget,
    //                                 size: newSize
    //                             }
    //                         }))
    //                     }}
    //                     value={this.state.widget.size}>
    //                     <option value={1}>Heading 1</option>
    //                     <option value={2}>Heading 2</option>
    //                     <option value={3}>Heading 3</option>
    //                     <option value={4}>Heading 4</option>
    //                     <option value={5}>Heading 5</option>
    //                 </select>
    //                 </div>
    //
    //             }
    //             {
    //                 !this.props.editing &&
    //                     <span>
    //                         {this.props.widget.size === 1 && <h1>{this.props.widget.title}</h1>}
    //                         {this.props.widget.size === 2 && <h2>{this.props.widget.title}</h2>}
    //                         {this.props.widget.size === 3 && <h3>{this.props.widget.title}</h3>}
    //                     </span>
    //             }
    //         </div>
    //
    //     )
    // }

    render() {
        return (
            <div>

                <br/>
                <div className="wbdv-topic-widget-div row-4 border border-secondary">
                    <ul className="nav nav-pills">
                        <li className="wbdv-topic-edit">
                            <h4 className="wbdv-topic-heading">Heading widget</h4>
                        </li>
                        <li className="wbdv-topic-edit ml-auto">
                            <a href="#" className="wbdv-arrow-link nav-link text-dark">
                                <i className="wbdv-topic-arrow-up ml-auto far fa-arrow-alt-circle-up fa-lg"/>
                            </a>
                        </li>

                        <li className="wbdv-topic-edit">
                            <a href="#" className="wbdv-arrow-link nav-link text-dark">
                                <i className="wbdv-topic-arrow-down far fa-arrow-alt-circle-down fa-lg"/>
                            </a>
                        </li>
                        <li className="wbdv-topic-edit">


                            <label>
                                <select className="form-control wbdv-topic-edit-heading">
                                    <option value="Heading">Heading</option>
                                    <option value="Paragraph">Paragraph</option>
                                </select>
                            </label>

                        </li>
                        {this.props.editing &&
                        <li className="wbdv-topic-edit" onClick={() => this.props.deleteWidget(this.props.widget.id)}>
                            <a href="#" className="wbdv-arrow-link nav-link text-dark">
                                <i className="wbdv-topic-edit-cancel-btn fas fa-times-circle fa-lg"/>

                            </a>
                        </li>
                        }
                    </ul>

                    <br/>
                    <form>
                        <div className="outer-form">
                            <div className="wdbv-widget-form form-group row">

                                <input type="text" className="form-control wbdv-field wbdv-heading-text"
                                       id="heading"
                                       onChange={(e) => {
                                           const newText = e.target.value;
                                           this.setState(prevState => ({
                                               widget: {
                                                   ...prevState.widgets,
                                                   text: newText
                                               },
                                               newWidget: {
                                                   ...prevState.newWidget,
                                                   text: newText
                                               }

                                           }))
                                       }
                                       }
                                       placeholder="Heading Text"
                                       value={this.state.widget.text}
                                />

                            </div>
                        </div>
                        <div className="outer-form">
                            <div className="wdbv-widget-form form-group row">

                                <select className="form-control wbdv-field wbdv-heading1" id="heading1"
                                        onChange={(e) => {
                                            let newSize = e.target.value
                                            newSize = parseInt(newSize)
                                            this.setState(prevState => ({
                                                widget: {
                                                    ...prevState.widget,
                                                    size: newSize
                                                },
                                                newWidget: {
                                                    ...prevState.newWidget,
                                                    size: newSize
                                                }
                                            }))
                                        }}
                                        value={this.state.widget.size}>

                                    <option value="1">Heading 1</option>
                                    <option value="2">Heading 2</option>
                                    <option value="3">Heading 3</option>
                                    <option value="4">Heading 4</option>
                                    <option value="5">Heading 5</option>
                                    <option value="6">Heading 6</option>

                                    {/*<option value="List Widget">List Widget</option>*/}
                                    {/*<option value="Image Widget">Image Widget</option>*/}
                                </select>

                            </div>
                        </div>
                        <div className="outer-form">
                            <div className="wdbv-widget-form form-group row">
                                <input type="text" className="form-control wbdv-field wbdv-widget-name"
                                       id="widgetName"
                                       onChange={(e) => {
                                           const newName = e.target.value
                                           this.setState(prevState => ({
                                               widget: {
                                                   ...prevState.widgets,
                                                   name: newName
                                               },
                                               newWidget: {
                                                   ...prevState.newWidget,
                                                   name: newName
                                               }
                                           }))
                                       }}

                                       value={this.state.widget.name}
                                       placeholder="Widget name"/>

                            </div>
                        </div>

                    </form>

                    <h5>Preview</h5>
                    {this.props.widget.size === 1 && <h6>{this.props.widget.text}</h6>}
                    {this.props.widget.size === 2 && <h5>{this.props.widget.text}</h5>}
                    {this.props.widget.size === 3 && <h4>{this.props.widget.text}</h4>}
                    {this.props.widget.size === 4 && <h3>{this.props.widget.text}</h3>}
                    {this.props.widget.size === 5 && <h2>{this.props.widget.text}</h2>}
                    {this.props.widget.size === 6 && <h1>{this.props.widget.text}</h1>}

                </div>
            </div>
        )
    }
}