'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

console.log("Input.js is running");

var ControlledInput = function (_React$Component) {
  _inherits(ControlledInput, _React$Component);

  function ControlledInput(props) {
    _classCallCheck(this, ControlledInput);

    var _this = _possibleConstructorReturn(this, (ControlledInput.__proto__ || Object.getPrototypeOf(ControlledInput)).call(this, props));

    _this.state = {
      input: ''
    };
    // change code below this line
    _this.handleChange = _this.handleChange.bind(_this);
    // change code above this line
    return _this;
  }
  // change code below this line


  _createClass(ControlledInput, [{
    key: 'handleChange',
    value: function handleChange(event) {
      this.setState({
        input: event.target.value
      });
    }
    // change code above this line

  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement('input', { value: this.state.input, onChange: this.handleChange }),
        React.createElement(
          'h4',
          null,
          'Controlled Input:'
        ),
        React.createElement(
          'p',
          null,
          this.state.input
        )
      );
    }
  }]);

  return ControlledInput;
}(React.Component);

;

ReactDOM.render(React.createElement(ControlledInput, null), document.getElementById('app'));
