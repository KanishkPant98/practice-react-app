import React from "react";
import ReactDOM from "react-dom/client";
const parent = React.createElement("div",{id: 'parent'},[
    React.createElement("div",{id: 'child-1'},[
        React.createElement("h1",{},"This is heading-123"), 
        React.createElement("h2",{},"This is heading-2")
    ]),
    React.createElement("div",{id: 'child-2'},[
        React.createElement("h1",{},"This is heading-1"), 
        React.createElement("h2",{},"This is heading-2")
    ]),
])
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(parent);