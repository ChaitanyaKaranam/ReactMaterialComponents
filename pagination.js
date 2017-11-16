import React, {Component} from 'react';
import * as actions from '../actions';
import {connect} from 'react-redux'

class Pagination extends Component{

    constructor(props){
        super(props);
        this.state={
            activePages:[],
            currentPage:1,
            total:100,
            selectedPage:1
        }
    }
    
    componentDidMount(){  
        this.props.getData(1);

        // initialize pagination to 5
        if(this.state.total>5){
            let arr=[];
            for(let i=1;i<6;i++){
                arr.push(i);
            }
            this.setState({activePages:arr});
        }

        // initialize to last value
        else{
            let arr=[];
            for(let i=1;i<=this.state.total;i++){
                arr.push(i);
            }
            this.setState({activePages:arr});
        }       

    }

    initialize(){
        if(this.props.getGitData.data){
            return( this.props.getGitData.data.items.map(val=>{ 
                return(
                    <div>
                        <div className="col s12">
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

    // This method is to render next set of page numbers
    renderNextPageNumbers(){
        //set start of pagination
        let start = this.state.currentPage+5;
        
        // last value of pagination
        let last = start+4;

        // if last value exceeds total value, set this to total value
        if(last>=this.state.total){
            last=this.state.total
        }
        let arr=[];

        //push the values in the array
        for(let i=start;i<=last;i++){
            arr.push(i);
        }

        //if start exceeds total value, reset the new array with existing array and reset start.
        if(start>this.state.total){
            arr=this.state.activePages;
            start-=5;
        }
        this.setState({activePages:arr});
        this.setState({currentPage:start});
        this.setState({selectedPage:start});

        /* Call an Action
        .
        .
        .
        */

        this.props.getData(start);

    }


    // This method is to render previous set of page numbers
    renderPreviousPageNumbers(){
        // first value of pagination
        let start = this.state.currentPage-5;

        //reset if start becomes less than 1
        if(start<1){
            start=1;
        }

        //last value of pagination
        let last = start+4;

        // if last value exceeds total value, set this to total value
        if(last>=this.state.total){
            last=this.state.total
        }
        let arr=[];
        for(let i=start;i<=last;i++){
            arr.push(i);
        }

        this.setState({activePages:arr});
        this.setState({currentPage:start});
        this.setState({selectedPage:start});

        /* Call an Action
        .
        .
        .
        */
        this.props.getData(start);
    }


    // This method is to render page numbers
    renderPagination(currentPage){
        /* set the state of total
        .
        .
        .
        */       

        return this.state.activePages.map(page=>{

            if(page===this.state.selectedPage){
                return <li className="active blue" onClick={()=>{this.getNewPage(page)}}><a href="#!">{page}</a></li>
            }           

            return(
                <li className="waves-effect" onClick={()=>{this.getNewPage(page)}}><a href="#!">{page}</a></li>
            )
        })


    }

    // Method for onclick page number
    getNewPage(page){
        /* Call the Action
        .
        .
        .
        */

        this.props.getData(page);

        this.setState({selectedPage:page});
        this.renderPagination(page);

    }


    // Method to check active left chevron
    getChevronLeft(){        
        if(this.state.currentPage===1){            
            return <li className="disabled" onClick={()=>{this.renderPreviousPageNumbers()}}><a href="#!"><i className="material-icons">chevron_left</i></a></li>
        }
        else{
            return <li className="waves-effect" onClick={()=>{this.renderPreviousPageNumbers()}}><a href="#!"><i className="material-icons">chevron_left</i></a></li>
        }
    }

    // Method to check active right chevron
    getChevronRight(){
        if(this.state.currentPage+4>=this.state.total){
            return <li className="disabled" onClick={()=>{this.renderNextPageNumbers()}} ><a href="#!"><i className="material-icons">chevron_right</i></a></li>
        }
        else{
            return <li className="waves-effect" onClick={()=>{this.renderNextPageNumbers()}} ><a href="#!"><i className="material-icons">chevron_right</i></a></li>
        }
    }
    
    render(){       
        return(
            <div>
                <br/>
                <ul className="pagination">
                    {this.getChevronLeft()}
                    {this.renderPagination(this.state.selectedPage)}
                    {this.getChevronRight()}
                </ul>

                <div className="row">
                    {this.initialize()}
                </div> 
                  
                <ul className="pagination">
                    {this.getChevronLeft()}
                    {this.renderPagination(this.state.selectedPage)}
                    {this.getChevronRight()}
                 </ul>
                 <br/>
            </div>    
        );
    }
}

function mapStateToProps(state){
    return{getGitData:state.getData}
}

export default connect(mapStateToProps,actions)(Pagination);