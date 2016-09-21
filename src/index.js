
import React, {Component} from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyAPvmXJtKRHv5lVRbIpl2ckGU6q_bLykdE';



class  App extends Component{
    constructor(props){
        super(props);



        this.state = {
            term: 'queen mercury',
            videos: [],
        };

        YTSearch({
            key: API_KEY,
            term: this.state.term,
        }, (videos) => {
            this.setState({videos});

        });

    }

    render(){
        
        return (
            <div>
                <SearchBar/>
                <VideoList videos={this.state.videos}/>

            </div>
        )
    }
}


ReactDom.render(<App />, document.querySelector('.container'));