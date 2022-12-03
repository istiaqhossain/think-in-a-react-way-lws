const domContainer = document.querySelector("#root");

const Counter = () => {
    const [counter, setCounter] = React.useState(0);
    return (
        <div className="counter">
            <p>{ counter }</p>       
            <button onClick={ () => setCounter(counter + 1) }>Increment +</button>
        </div>
    );
};

ReactDOM.render(
<div className="container">
<Counter />
<Counter />
<Counter />
<Counter />
<Counter />
</div>, domContainer);