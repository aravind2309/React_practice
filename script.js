const parent = React.createElement("div", {id:"parent"},[
  React.createElement("div", {id:"child1"},
  [React.createElement("h1", {id:"heading1"},"h1 tag list"),React.createElement("h2", {id:"heading2"},"h2 tag list")] ),
  React.createElement("div", {id:"child2"},
    [React.createElement("h1", {id:"heading1"},"h1 tag list"),React.createElement("h2", {id:"heading2"},"h2 tag list")] )]);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);