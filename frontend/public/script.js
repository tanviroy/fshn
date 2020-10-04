function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}class MenuExample extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    { focused: 0 });}
  clicked(index) {
    this.setState({ focused: index });
  }
  render() {
    var self = this;
    return (
      React.createElement("div", null,
      React.createElement("ul", null, " ", this.props.items.map(function (m, index) {
        var style = '';
        if (self.state.focused == index) {
          style = 'active';
        }
        return React.createElement("li", { className: style, onClick: self.clicked.bind(self, index) }, m);
      }))));



  }}
;

React.render(
React.createElement(MenuExample, { items: ['Home', 'Services', 'About', 'Contact us'] }),
document.getElementById('nav'));