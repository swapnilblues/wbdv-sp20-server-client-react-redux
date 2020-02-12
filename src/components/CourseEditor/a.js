// render()
// {
//     return (
//         <div>
//             <ul className="nav nav-pills wbdv-topic-pill-list">
//                 <h1>{this.props.selectedLesson}</h1>
//                 {
//                     this.props.topics && this.props.topics.map(topic =>
//                         <li className="wbdv-topic-pill bg-secondary">
//                             <a className="nav-link text-white" href="#">{topic.title}</a>
//                             <i onClick={  () =>
//                                 this.props.deleteTopic(topic._id)
//                                 // await this.props.setLessonToDefault()
//                                 // await this.props.emptyTopic()
//                             }
//                                className="fas fa-times wbdv-module-item-delete-btn"/>
//                         </li>
//                     )
//                 }
//                 {this.props.selectedLesson !== 'cde' &&
//                 <li className="wbdv-topic-add-btn bg-secondary"
//                     onClick={() => this.props.createTopic(this.props.selectedLesson)}>
//                     <a href="#" className="nav-link text-white">
//                         <i className="fas fa-plus"/>
//                     </a>
//                 </li>
//                 }
//             </ul>
//
//         </div>
//
//     )
//