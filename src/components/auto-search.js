import React, {Component} from 'react';
import * as actions from '../actions';
import {connect} from 'react-redux';
import _ from 'lodash';

class AutoSearch extends Component{
    
    getResults(val){
       this.props.search(val);
    }

    renderAutoSearch(){
        if(this.props.searchData.data){
            return this.props.searchData.data.items.map(val=>{
                return(
                    <div>
                    <div className="col s12">
                        <div className="card-panel grey lighten-5 z-depth-1">
                            <div className="row valign-wrapper">
                                <div className="col s2">
                                    <img src={val.owner.avatar_url} alt="" className="responsive-img"/>
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
        }
    }

    hideSearch(){
        this.props.search('');
    }
    
    render(){

        const search = _.debounce((term)=>{this.getResults(term)},300);

        return(
            <div>
                <div className="row">
                <div className="input-field col s12 m8">
                    <input onChange={(event)=>{search(event.target.value)}} 
                        type="text" className="autocomplete" 
                        onBlur={()=>{this.hideSearch()}}/>
                    <label htmlFor="autocomplete-input">Search Repositories</label>
                </div>
                <ul className='col s12 m8 autocomplete-content dropdown-content'>
                    {this.renderAutoSearch()}
                </ul>    
                </div>              
            </div>    
        )
    }
}

function mapStateToProps(state){
    return {searchData:state.searchData}
}

export default connect(mapStateToProps,actions)(AutoSearch);