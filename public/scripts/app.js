'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

console.log("Counter.js is running");

var Counter = function (_React$Component) {
  _inherits(Counter, _React$Component);

  function Counter(props) {
    _classCallCheck(this, Counter);

    var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

    _this.state = {
      count: 0
    };
    // change code below this line
    _this.increment = _this.increment.bind(_this);
    _this.decrement = _this.decrement.bind(_this);
    _this.reset = _this.reset.bind(_this);

    // change code above this line
    return _this;
  }
  // change code below this line


  _createClass(Counter, [{
    key: 'increment',
    value: function increment() {
      this.setState(function (state) {
        return {
          count: state.count + 1
        };
      });
    }
  }, {
    key: 'decrement',
    value: function decrement() {
      this.setState(function (state) {
        return {
          count: state.count - 1
        };
      });
    }
  }, {
    key: 'reset',
    value: function reset() {
      this.setState({
        count: 0
      });
    }
    // change code above this line

  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'button',
          { className: 'inc', onClick: this.increment },
          'Increment!'
        ),
        React.createElement(
          'button',
          { className: 'dec', onClick: this.decrement },
          'Decrement!'
        ),
        React.createElement(
          'button',
          { className: 'reset', onClick: this.reset },
          'Reset'
        ),
        React.createElement(
          'h1',
          null,
          'Current Count: ',
          this.state.count
        )
      );
    }
  }]);

  return Counter;
}(React.Component);

;

ReactDOM.render(React.createElement(Counter, null), document.getElementById('app'));
