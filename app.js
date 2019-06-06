class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: props.count };
    this.decrementCount = this.decrementCount.bind(this);
  }

  incrementCount() {
    this.setState(state => {
      return { count: state.count + 1 };
    });
  }
  decrementCount() {
    this.setState(state => {
      return {
        count: state.count - 1
      };
    });
  }
  checkColor = () => {
    return this.state.count >= 0 ? "display-positive" : "display-negative";
  };

  render() {
    const inputClass = "display";
    return (
      <div className="counter">
        <Display />
        <div style={this.beStylish()} className="display">
          {this.state.count}
        </div>
        <button className="btn btn-decrement" onClick={this.decrementCount}>
          Decrement
        </button>
        <button className="btn btn-increment" onClick={this.incrementCount}>
          Increment
        </button>
      </div>
    );
  }
}

function Button({ className, onClick, text }) {
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
}
const Display = ({ count, className }) => {
  return <div className={className}>{count}</div>;
};
function App() {
  //each counter should have its own initial count value
  //each counter should have its own unique key
  //index can be used only if array is not push or pop

  const counters = [
    { id: "123", initialCount: 0 },
    { id: "345", initialCount: -10 },
    { id: "234", initialCount: 9 },
    { id: "562", initialCount: 2 }
  ];

  const counterItems = counters.map(counter => {
    return <Counter key={counter.id} count={counter.initialCount} />;
  });
  return (
    <React.Fragment>
      {[-1, 5, 3, 6].map(number => {
        return <Counter key={index} count={number} />;
      })}
    </React.Fragment>
  );
}
const element = <App />;
const container = document.querySelector("#app");
ReactDOM.render(element, container);
