
import React from "react";
import '../styles/App.css';

function App() {
    const [loading, setLoading] = React.useState(true);
    const [text, setText] = React.useState('');

    React.useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        },2000)
    })

    return loading ? <h1>Loading....</h1> :
    <div className="app">
        <div className="textarea-box">
            <textarea className="textarea" onInput={(e) => setText(e.target.value)}></textarea>
        </div>
        <div className="preview"><h1>{text}</h1></div>
    </div>
}


export default App;

{/* <p>Now I can render any React component on any DOM node I want using ReactDOM.render</p> */}
