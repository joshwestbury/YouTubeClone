import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import { API_KEY } from '../config';



class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: []};

        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            this.setState( { videos } ); // this is the same as ( { videos: videos });
        });
    }

    render() {
        return (
            <div>
                <SearchBar />
                <VideoDetail video={this.state.videos[0]} />
                <VideoList videos={this.state.videos}/>
            </div>
        ); 
    }
}

// Take this components generated HTML and put it on the page (i.e. in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
