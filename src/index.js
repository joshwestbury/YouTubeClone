// import the React library
import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import { API_KEY } from '../config';

// Create a new component that produces some HTML.
YTSearch({key: API_KEY, term: 'surfboards'}, function(data) {
    console.log(data);
});
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    ); //this HTML is acutally JSX. JSX is a subset of JS that allows us to write what looks
        // like HTML but is actually JS.
}

// Take this components generated HTML and put it on the page (i.e. in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));