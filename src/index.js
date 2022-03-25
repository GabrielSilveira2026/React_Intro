import React from "react";
import ReactDOM from "react-dom";

const App = () => {
    return <div>Meu primeiro componente Reactjs</div>
}

ReactDOM.render(
    <App />,
    document.querySelector('#root') //# = ID, root = id (Public/Index.html linha 31)
)