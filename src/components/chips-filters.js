import React, {Component} from 'React';

class ChipFilters extends Component{
    
    constructor(props){
        super(props);
        this.state={
            chips:[]
        };
    }
    
    addChip(chip){
        let arr=this.state.chips;
        arr.push(chip);
        this.setState({chips:arr});
    }

    getChips(){
        let arr=this.state.chips;
        return arr.map(chip=>{
            return(
                <div key={chip} className="white-text blue chip">
                    {chip}
                    <i onClick={()=>{this.removeChips(chip)}} className="close material-icons">close</i>
                </div>
            );
        });
    }

    removeChips(chip){
        let arr=this.state.chips;
        let index=arr.indexOf(chip);
        if (index !== -1) {
            arr.splice(index, 1);
        }
        this.setState({chips:arr});
    }
    
    render(){
        return(
            <div>
                <br/>
                <div className="row">
                    {this.getChips()}                    
                </div>
                <div className="row">
                    <div>
                        <a className='dropdown-button btn' href='#' data-activates='dropdown1'>Select</a>
                        <ul id='dropdown1' className='dropdown-content'>
                            <li onClick={()=>{this.addChip('one')}}><a>one</a></li>
                            <li onClick={()=>{this.addChip('two')}}><a>two</a></li>
                            <li onClick={()=>{this.addChip('three')}}><a>three</a></li>
                            <li onClick={()=>{this.addChip('four')}}><a><i className="blue-text material-icons">view_module</i>four</a></li>
                            <li onClick={()=>{this.addChip('five')}}><a><i className="material-icons">cloud</i>five</a></li>
                        </ul>
                    </div>    
                </div>        
            </div>    
        );
    }
}

export default ChipFilters;