import './App.css';

const App = () => {
    return (<div>
        <Header/>
        <div>
            <input type="text"/>
        </div>
        <div className="btn">
            <button>
                click me
            </button>
            <button>
                dont click me
            </button>
        </div>
    </div>)
}
const Header = () => {
    return (
        <div>
            <div>hello</div>
            <div>world!</div>
        </div>
    )
}

export default App;

