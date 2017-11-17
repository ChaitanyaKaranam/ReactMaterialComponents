import React, {Component} from 'react';

class AutoSuggest extends Component{
    render(){
        return(
            <div>
                <div className="row">
                    <div className="col s12">
                        <div className="row">
                            <div className="input-field col s12">
                            <i className="material-icons prefix">textsms</i>
                            <input type="text" id="autocomplete-input" className="autocomplete"/>
                            <label for="autocomplete-input">Autocomplete</label>
                            </div>
                        </div>
                    </div>
              </div>
              {$('input.autocomplete').autocomplete({
    data: {
      "Apple": null,
      "Microsoft": null,
      "Google": 'https://placehold.it/250x250'
    },
    limit: 20, // The max amount of results that can be shown at once. Default: Infinity.
    onAutocomplete: function(val) {
      // Callback function when value is autcompleted.
    },
    minLength: 1, // The minimum length of the input for the autocomplete to start. Default: 1.
  })}                    
            </div>    
        );
    }
}


       

export default AutoSuggest;