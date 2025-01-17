import React from "react";
import HeadingWidget from "./HeadingWidget";
import ParagraphWidget from "./ParagraphWidget";


export default class Widget extends React.Component {

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevState.widget.id!==this.props.widget.id) {
            this.setState({
                    widget: this.props.widget
                }
            )
        }

    }

    state = {
        widget: this.props.widget,
        preview: false
    }

    changePreview = () => {
        if (this.state.preview === true) {
            this.setState({
                preview: false
            })
        } else {
            this.setState({
                preview: true
            })
        }
    }

    render() {
        return (
            <div>
                {this.props.editing &&
                <ul className="nav nav-pills">
                    <li className="wbdv-topic-edit  ml-auto"
                        onClick={async () => {
                            await this.props.updateWidget(this.props.widget.id, this.state.widget)
                            await this.props.save()
                            await this.setState({
                                preview: false
                            })
                        }
                        }>
                        <button className="wbdv-topic-save btn btn-success">Save</button>
                    </li>

                    <li className="wbdv-topic-edit ml-right">
                        <a className="nav-link text-white" href="#">
                            <button className="wbdv-topic-preview btn btn-white">Preview</button>
                        </a>
                    </li>
                    {!this.state.preview &&
                    <li className="wbdv-topic-edit ml-right" onClick={() => this.changePreview()}>
                        <a href="#" className="wbdv-topic-toggle nav-link text-dark">
                            <i className="wbdv-topic-toggle fas fa-toggle-off fa-lg"/>
                        </a>
                    </li>
                    }
                    {this.state.preview &&
                    <li className="wbdv-topic-edit ml-right" onClick={() => this.changePreview()}>
                        <a href="#" className="wbdv-topic-toggle nav-link text-dark">
                            <i className="wbdv-topic-toggle fas fa-toggle-on fa-lg"/>
                        </a>
                    </li>
                    }
                </ul>
                }
                {this.state.widget.type === "HEADING" &&
                // <HeadingWidget
                //     editing = {this.props.editing}
                //     widget = {this.props.widget}
                //     deleteWidget={this.props.deleteWidget}
                //     newWidget = {this.state.newWidget}
                // />

                //TODO Refactor to HeadingWidget class
                <div>

                    <br/>
                    {!this.state.preview && this.props.editing &&
                    <div className="wbdv-topic-widget-div row-4 border border-secondary">
                        <ul className="nav nav-pills">
                            <li className="wbdv-topic-edit">
                                <h4 className="wbdv-topic-heading">Heading Widget</h4>
                            </li>

                            <li className="wbdv-topic-edit ml-auto"
                                onClick={() => this.props.upWidget(this.state.widget.id)}
                            >
                                <a href="#" className="wbdv-arrow-link nav-link text-dark">
                                    <i className="wbdv-topic-arrow-up ml-auto far fa-arrow-alt-circle-up fa-lg"/>
                                </a>
                            </li>

                            <li className="wbdv-topic-edit"
                                onClick={() => this.props.downWidget(this.state.widget.id)}
                            >
                                <a href="#" className="wbdv-arrow-link nav-link text-dark">
                                    <i className="wbdv-topic-arrow-down far fa-arrow-alt-circle-down fa-lg"/>
                                </a>
                            </li>
                            <li className="wbdv-topic-edit">


                                <label>
                                    <select className="form-control wbdv-topic-edit-heading"
                                            onChange={(e) => {
                                                let newType = e.target.value
                                                this.setState(prevState => ({
                                                    widget: {
                                                        ...prevState.widget,
                                                        type: newType
                                                    },
                                                    newWidget: {
                                                        ...prevState.newWidget,
                                                        type: newType
                                                    }
                                                }))
                                            }}
                                            value={this.state.widget.type}
                                    >
                                        <option value="HEADING">Heading</option>
                                        <option value="PARAGRAPH">Paragraph</option>
                                        <option value="LIST">List</option>
                                        <option value="IMAGE">Image</option>
                                    </select>
                                </label>

                            </li>
                            {this.props.editing &&
                            <li className="wbdv-topic-edit"
                                onClick={ () => {
                                    this.props.deleteWidget(this.props.widget.id)
                                }}
                            >
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
                                                       ...prevState.widget,
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
                                                       ...prevState.widget,
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

                    </div>
                    }
                    {/*End of preview == false*/}

                    {this.state.widget.type === "HEADING" &&
                    <div className="row-4 border border-secondary">
                        <h5>Heading Preview</h5>
                        {this.state.widget.size === 1 && <h1>{this.state.widget.text}</h1>}
                        {this.state.widget.size === 2 && <h2>{this.state.widget.text}</h2>}
                        {this.state.widget.size === 3 && <h3>{this.state.widget.text}</h3>}
                        {this.state.widget.size === 4 && <h4>{this.state.widget.text}</h4>}
                        {this.state.widget.size === 5 && <h5>{this.state.widget.text}</h5>}
                        {this.state.widget.size === 6 && <h6>{this.state.widget.text}</h6>}
                    </div>
                    }
                </div>
                }



                {this.state.widget.type === "PARAGRAPH" &&


                    //TODO Refactor to Paragraph Widget Class

                    // <ParagraphWidget
                    //     editing={this.props.editing}
                    //     widget={this.props.widget}
                    //     newWidget={this.state.newWidget}
                    // />
                    // }
                    // {/*{this.props.editing &&*/}
                    // {/*<span>*/}
                    // {/*      <button onClick={() => this.props.deleteWidget(this.props.widget.id)}>*/}
                    // {/*        X*/}
                    // {/*      </button>*/}
                    // {/*      <button onClick={() => this.props.save()}>*/}
                    // {/*        Save*/}
                    // {/*      </button>*/}
                    // {/*</span>*/}
                    // {/*}*/}
                <div>
                    <br/>
                    {!this.state.preview && this.props.editing &&
                    <div className="wbdv-topic-widget-div row-4 border border-secondary">
                        <ul className="nav nav-pills">
                            <li className="wbdv-topic-edit">
                                <h4 className="wbdv-topic-heading">Paragraph Widget</h4>
                            </li>
                            <li className="wbdv-topic-edit ml-auto"
                                onClick={() => this.props.upWidget(this.state.widget.id)}>
                                <a href="#" className="wbdv-arrow-link nav-link text-dark">
                                    <i className="wbdv-topic-arrow-up ml-auto far fa-arrow-alt-circle-up fa-lg"/>
                                </a>
                            </li>

                            <li className="wbdv-topic-edit"
                                onClick={() => this.props.downWidget(this.state.widget.id)}
                            >
                                <a href="#" className="wbdv-arrow-link nav-link text-dark">
                                    <i className="wbdv-topic-arrow-down far fa-arrow-alt-circle-down fa-lg"/>
                                </a>
                            </li>
                            <li className="wbdv-topic-edit">


                                <label>
                                    <select className="form-control wbdv-topic-edit-heading"
                                            onChange={(e) => {
                                                let newType = e.target.value
                                                this.setState(prevState => ({
                                                    widget: {
                                                        ...prevState.widget,
                                                        type: newType
                                                    },
                                                    newWidget: {
                                                        ...prevState.newWidget,
                                                        type: newType
                                                    }
                                                }))
                                            }}
                                            value={this.state.widget.type}
                                    >
                                        <option value="HEADING">Heading</option>
                                        <option value="PARAGRAPH">Paragraph</option>
                                        <option value="LIST">List</option>
                                        <option value="IMAGE">Image</option>
                                    </select>
                                </label>

                            </li>
                            {this.props.editing &&
                            <li className="wbdv-topic-edit"
                                onClick={() =>
                                    this.props.deleteWidget(this.props.widget.id)
                                }>
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

                                    <textarea className="form-control wbdv-field wbdv-heading-text"
                                           id="heading"
                                           onChange={(e) => {
                                               const newText = e.target.value;
                                               this.setState(prevState => ({
                                                   widget: {
                                                       ...prevState.widget,
                                                       text: newText
                                                   },
                                                   newWidget: {
                                                       ...prevState.newWidget,
                                                       text: newText
                                                   }

                                               }))
                                           }
                                           }
                                           placeholder="Paragraph Text"
                                           value={this.state.widget.text}
                                    />

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
                                                       ...prevState.widget,
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

                    </div>
                    }
                    {/*End of preview == false*/}

                    {this.state.widget.type === "PARAGRAPH" &&
                    <div className="row-4 border border-secondary">
                        <h5>Paragraph Preview</h5>
                        <pre>{this.state.widget.text}</pre>
                    </div>
                    }


                </div>

                }

                {this.state.widget.type === "LIST" &&


                //TODO Refactor to List Widget Class


                <div>
                    <br/>
                    {!this.state.preview && this.props.editing &&
                    <div className="wbdv-topic-widget-div row-4 border border-secondary">
                        <ul className="nav nav-pills">
                            <li className="wbdv-topic-edit">
                                <h4 className="wbdv-topic-heading">List Widget</h4>
                            </li>
                            <li className="wbdv-topic-edit ml-auto"
                                onClick={() => this.props.upWidget(this.state.widget.id)}>
                                <a href="#" className="wbdv-arrow-link nav-link text-dark">
                                    <i className="wbdv-topic-arrow-up ml-auto far fa-arrow-alt-circle-up fa-lg"/>
                                </a>
                            </li>

                            <li className="wbdv-topic-edit"
                                onClick={() => this.props.downWidget(this.state.widget.id)}
                            >
                                <a href="#" className="wbdv-arrow-link nav-link text-dark">
                                    <i className="wbdv-topic-arrow-down far fa-arrow-alt-circle-down fa-lg"/>
                                </a>
                            </li>
                            <li className="wbdv-topic-edit">


                                <label>
                                    <select className="form-control wbdv-topic-edit-heading"
                                            onChange={(e) => {
                                                let newType = e.target.value
                                                this.setState(prevState => ({
                                                    widget: {
                                                        ...prevState.widget,
                                                        type: newType
                                                    },
                                                    newWidget: {
                                                        ...prevState.newWidget,
                                                        type: newType
                                                    }
                                                }))
                                            }}
                                            value={this.state.widget.type}
                                    >
                                        <option value="HEADING">Heading</option>
                                        <option value="PARAGRAPH">Paragraph</option>
                                        <option value="LIST">List</option>
                                        <option value="IMAGE">Image</option>
                                    </select>
                                </label>

                            </li>
                            {this.props.editing &&
                            <li className="wbdv-topic-edit"
                                onClick={() =>
                                    this.props.deleteWidget(this.props.widget.id)
                                }>
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

                                    <textarea className="form-control wbdv-field wbdv-heading-text"
                                              id="heading"
                                              onChange={(e) => {
                                                  const newText = e.target.value;
                                                  this.setState(prevState => ({
                                                      widget: {
                                                          ...prevState.widget,
                                                          text: newText
                                                      },
                                                      newWidget: {
                                                          ...prevState.newWidget,
                                                          text: newText
                                                      }

                                                  }))
                                              }
                                              }
                                              placeholder="List Text"
                                              value={this.state.widget.text}
                                    />

                                </div>
                            </div>

                            <div className="outer-form">
                                <div className="wdbv-widget-form form-group row">

                                    <select className="form-control wbdv-field wbdv-heading1" id="heading1"
                                            onChange={(e) => {
                                                let newStyle = e.target.value

                                                this.setState(prevState => ({
                                                    widget: {
                                                        ...prevState.widget,
                                                        style: newStyle
                                                    },
                                                    newWidget: {
                                                        ...prevState.newWidget,
                                                        style: newStyle
                                                    }
                                                }))
                                            }}
                                            value={this.state.widget.style}>

                                        <option value="ul">Unordered List</option>
                                        <option value="ol">Ordered List</option>

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
                                                       ...prevState.widget,
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

                    </div>
                    }
                    {/*End of preview == false*/}

                    {this.state.widget.type === "LIST" &&
                    <div className="row-4 border border-secondary">
                        <h5>List Preview</h5>
                        {this.state.widget.text !== null && this.state.widget.text !== '' &&
                        <div>
                            {this.state.widget.style === "ol" &&
                            <ol>
                                {this.state.widget.text.split('\n').map((line, i) => {
                                    return <li>{line}</li>
                                })}
                            </ol>}
                            {this.state.widget.style === "ul" &&
                            <ul>
                                {this.state.widget.text.split('\n').map((line, i) => {
                                    return <li>{line}</li>
                                })}
                            </ul>}
                        </div>
                            }
                    </div>
                    }


                </div>

                }

                {this.state.widget.type === "IMAGE" &&


                //TODO Refactor to Image Widget Class


                <div>
                    <br/>
                    {!this.state.preview && this.props.editing &&
                    <div className="wbdv-topic-widget-div row-4 border border-secondary">
                        <ul className="nav nav-pills">
                            <li className="wbdv-topic-edit">
                                <h4 className="wbdv-topic-heading">Image Widget</h4>
                            </li>
                            <li className="wbdv-topic-edit ml-auto"
                                onClick={() => this.props.upWidget(this.state.widget.id)}>
                                <a href="#" className="wbdv-arrow-link nav-link text-dark">
                                    <i className="wbdv-topic-arrow-up ml-auto far fa-arrow-alt-circle-up fa-lg"/>
                                </a>
                            </li>

                            <li className="wbdv-topic-edit"
                                onClick={() => this.props.downWidget(this.state.widget.id)}
                            >
                                <a href="#" className="wbdv-arrow-link nav-link text-dark">
                                    <i className="wbdv-topic-arrow-down far fa-arrow-alt-circle-down fa-lg"/>
                                </a>
                            </li>
                            <li className="wbdv-topic-edit">


                                <label>
                                    <select className="form-control wbdv-topic-edit-heading"
                                            onChange={(e) => {
                                                let newType = e.target.value
                                                this.setState(prevState => ({
                                                    widget: {
                                                        ...prevState.widget,
                                                        type: newType
                                                    },
                                                    newWidget: {
                                                        ...prevState.newWidget,
                                                        type: newType
                                                    }
                                                }))
                                            }}
                                            value={this.state.widget.type}
                                    >
                                        <option value="HEADING">Heading</option>
                                        <option value="PARAGRAPH">Paragraph</option>
                                        <option value="LIST">List</option>
                                        <option value="IMAGE">Image</option>
                                    </select>
                                </label>

                            </li>
                            {this.props.editing &&
                            <li className="wbdv-topic-edit"
                                onClick={() =>
                                    this.props.deleteWidget(this.props.widget.id)
                                }>
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

                                    <textarea className="form-control wbdv-field wbdv-heading-text"
                                              id="heading"
                                              onChange={(e) => {
                                                  const newUrl = e.target.value;
                                                  this.setState(prevState => ({
                                                      widget: {
                                                          ...prevState.widget,
                                                          url: newUrl
                                                      },
                                                      newWidget: {
                                                          ...prevState.newWidget,
                                                          text: newUrl
                                                      }

                                                  }))
                                              }
                                              }
                                              placeholder="Image URL"
                                              value={this.state.widget.url}
                                    />

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
                                                       ...prevState.widget,
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

                    </div>
                    }
                    {/*End of preview == false*/}

                    {this.state.widget.type === "IMAGE" &&
                    <div className="row-4 border border-secondary">
                        <h5>Image Preview</h5>
                        <img src={this.state.widget.url} alt={"Image not found"}/>
                    </div>
                    }


                </div>

                }


                </div>

        )
    }

}