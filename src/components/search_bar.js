import React, {Component} from 'react';


export default class SearchBar extends Component{

    constructor(props){
        super(props);

        this.state = {term: ''};
    }


    onInputChange(e){

        this.setState({
            term: e.target.value,
        });
    }

    render(){
        return(
            <div>
                <input
                    value={this.state.term}
                    onChange={this.onInputChange.bind(this)} type="text"
                />
                <div>Value on the input: {this.state.term}</div>
            </div>
        );
    }
}

