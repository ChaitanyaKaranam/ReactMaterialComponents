import React, {Component} from 'React';

class Avatarlist extends Component{
    render(){
        return(
            <div>
                <div className="row">
                    <div className="col s12 m9">
                        <div className="card-panel grey lighten-5 z-depth-1">
                            <div className="row valign-wrapper">
                                <div className="col s4">
                                    <img src="http://lorempixel.com/200/200/" alt="" className="circle responsive-img"/>
                                </div>
                                <div className="col s8">
                                    <h4>Heading</h4>
                                    <hr/>
                                    <br/>
                                    <span className="black-text">
                                        This is a square image. Add the "circle" class to it to make it appear circular.
                                    </span>
                                    <br/>
                                    <br/>
                                    <div className="row valign-wrapper">
                                    <div className="col s4 valign-wrapper"><i className="material-icons">album</i><b>Songs</b></div>
                                    <div className="col s4 valign-wrapper"><i className="material-icons">pause</i><b>pause</b></div>
                                    <div className="col s4 valign-wrapper"><i className="material-icons">movie</i><b>Movie</b></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>    
            </div>    
        );
    }
}

export default Avatarlist;