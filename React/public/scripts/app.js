'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

console.log("magic-8-ball.js is running");

var inputStyle = {
  width: 235,
  margin: 5
};

var MagicEightBall = function (_React$Component) {
  _inherits(MagicEightBall, _React$Component);

  function MagicEightBall(props) {
    _classCallCheck(this, MagicEightBall);

    var _this = _possibleConstructorReturn(this, (MagicEightBall.__proto__ || Object.getPrototypeOf(MagicEightBall)).call(this, props));

    _this.state = {
      userInput: '',
      randomIndex: ''
    };
    _this.ask = _this.ask.bind(_this);
    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  _createClass(MagicEightBall, [{
    key: 'ask',
    value: function ask() {
      if (this.state.userInput) {
        this.setState({
          randomIndex: Math.floor(Math.random() * 20),
          userInput: ''
        });
      }
    }
  }, {
    key: 'handleChange',
    value: function handleChange(event) {
      this.setState({
        userInput: event.target.value
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var possibleAnswers = ['It is certain', 'It is decidedly so', 'Without a doubt', 'Yes, definitely', 'You may rely on it', 'As I see it, yes', 'Outlook good', 'Yes', 'Signs point to yes', 'Reply hazy try again', 'Ask again later', 'Better not tell you now', 'Cannot predict now', 'Concentrate and ask again', 'Don\'t count on it', 'My reply is no', 'My sources say no', 'Most likely', 'Outlook not so good', 'Very doubtful'];
      var answer = possibleAnswers[this.state.randomIndex]; // << change code here
      return React.createElement(
        'div',
        null,
        React.createElement('input', {
          type: 'text',
          value: this.state.userInput,
          onChange: this.handleChange,
          style: inputStyle }),
        React.createElement('br', null),
        React.createElement(
          'button',
          { onClick: this.ask },
          'Ask the Magic Eight Ball!'
        ),
        React.createElement('br', null),
        React.createElement(
          'h3',
          null,
          'Answer:'
        ),
        React.createElement(
          'p',
          null,
          answer
        )
      );
    }
  }]);

  return MagicEightBall;
}(React.Component);

;

ReactDOM.render(React.createElement(MagicEightBall, null), document.getElementById('app'));
