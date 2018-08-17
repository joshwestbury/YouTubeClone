// import the React library
import React from 'react';
import ReactDOM from 'react-dom';

// Create a new component that produces some HTML.
const App = () => {
    return <div>Hi</div>; //this HTML is acutally JSX. JSX is a subset of JS that allows us to write what looks
                           // like HTML but is actually JS.
}

// Take this components generated HTML and put it on the page (i.e. in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));