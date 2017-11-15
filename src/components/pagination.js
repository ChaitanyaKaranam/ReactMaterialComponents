import React, {Component} from 'react';
import * as actions from '../actions';
import {connect} from 'react-redux'

class Pagination extends Component{
    
    componentDidMount(){  
        this.props.getData();
    }

    initialize(){
        if(this.props.getGitData.data){
            return( this.props.getGitData.data.items.map(val=>{
                return(
                    <div>
                        <div className="col s12 m8">
                            <div className="card-panel grey lighten-5 z-depth-1">
                                <div className="row valign-wrapper">
                                    <div className="col s2">
                                        <img src={val.owner.avatar_url} alt="" className="circle responsive-img"/>
                                    </div>
                                    <div className="col s10">
                                        <h4>{val.name}</h4>
                                        <hr/>
                                        <br/>
                                        <span className="black-text">
                                        {val.description}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>    
                    
                )
            })                
            )
        }
    }
    
    render(){       
        return(
            <div>
                <br/>
                <ul className="pagination">
                    <li className="disabled"><a href="#!"><i className="material-icons">first_page</i></a></li>
                    <li className="disabled"><a href="#!"><i className="material-icons">chevron_left</i></a></li>
                    <li className="active blue"><a href="#!">1</a></li>
                    <li className="waves-effect"><a href="#!">2</a></li>
                    <li className="waves-effect"><a href="#!">3</a></li>
                    <li className="waves-effect"><a href="#!">4</a></li>
                    <li className="waves-effect"><a href="#!">5</a></li>
                    <li className="waves-effect"><a href="#!"><i className="material-icons">chevron_right</i></a></li>
                    <li className="waves-effect"><a href="#!"><i className="material-icons">last_page</i></a></li>
                </ul>

                <div className="row">
                    {this.initialize()}
                </div> 
                  
                <ul className="pagination">
                    <li className="disabled"><a href="#!"><i className="material-icons">first_page</i></a></li>
                    <li className="disabled"><a href="#!"><i className="material-icons">chevron_left</i></a></li>
                    <li className="active blue"><a href="#!">1</a></li>
                    <li className="waves-effect"><a href="#!">2</a></li>
                    <li className="waves-effect"><a href="#!">3</a></li>
                    <li className="waves-effect"><a href="#!">4</a></li>
                    <li className="waves-effect"><a href="#!">5</a></li>
                    <li className="waves-effect"><a href="#!"><i className="material-icons">chevron_right</i></a></li>
                    <li className="waves-effect"><a href="#!"><i className="material-icons">last_page</i></a></li>
                 </ul>

            </div>    
        );
    }
}

function mapStateToProps(state){
    return{getGitData:state.getData}
}

export default connect(mapStateToProps,actions)(Pagination);