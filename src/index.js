import React from 'react';
import ReactDOM from 'react-dom';
import store from "./store";
import { addArticle } from "./action";

window.store = store;
window.addArticle = addArticle;

store.subscribe(() => console.log('Look man, Redux is doing its Magic'))
// It is fired whenever state changes

function Check(){
    return <h2>Use console to see the working of the Redux library</h2>
}
ReactDOM.render(<Check/>,document.getElementById('root'));
