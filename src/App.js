const Pet = (props) => {
    return React.createElement("div", null, [
        React.createElement("h1", null, props.name),
        React.createElement("h2", null, props.animal),
        React.createElement("h2", null, props.breed)
    ]);
};

const App = () => {
    return React.createElement(
        "div",
        null,
        [
            React.createElement("h1", {}, "Adopt Me!"),
            React.createElement(Pet, {
                name: "Luna",
                animal: "cat",
                breed: "Magic Black"
            }),
            React.createElement(Pet, {
                name: "Isabelle",
                animal: "dog",
                breed: "Golden Doodle"
            }),
            React.createElement(Pet, {
                name: "Bowser",
                animal: "turtle",
                breed: "Evil"
            }),
        ]
    )
};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
