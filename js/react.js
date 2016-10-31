//These imports are loading in other files (react, react-dom and Posts)...
/*
import React (e.g. our variable)
*/
import React from 'react'
import ReactDOM from 'react-dom'
import Posts from '../components/Posts' //This is where load our components

window.renderView = (data) => { //This allows us to rerender the page
    ReactDOM.render( //ReactDOM.render nests all components...Will only see this (1) time
        <Posts data={data}/>, //This can only 'mount' (1) component...Posts in import is same as <Posts...'data={data}' is called a PROP...'{}' allow us to pass in data (e.g. actual values)
        document.getElementById('posts')) //
}

renderView(posts)
