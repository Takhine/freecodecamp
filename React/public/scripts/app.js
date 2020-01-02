'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

console.log("todo-list.js is running");

var textAreaStyles = {
  width: 235,
  margin: 5
};

var MyToDoList = function (_React$Component) {
  _inherits(MyToDoList, _React$Component);

  function MyToDoList(props) {
    _classCallCheck(this, MyToDoList);

    // change code below this line
    var _this = _possibleConstructorReturn(this, (MyToDoList.__proto__ || Object.getPrototypeOf(MyToDoList)).call(this, props));

    _this.state = {
      userInput: '',
      toDoList: []
      // change code above this line
    };_this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  _createClass(MyToDoList, [{
    key: 'handleSubmit',
    value: function handleSubmit() {
      var itemsArray = this.state.userInput.split(',');
      this.setState({
        toDoList: itemsArray
      });
    }
  }, {
    key: 'handleChange',
    value: function handleChange(e) {
      this.setState({
        userInput: e.target.value
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var items = this.state.toDoList.map(function (item) {
        return React.createElement(
          'li',
          null,
          item
        );
      });
      return React.createElement(
        'div',
        null,
        React.createElement('textarea', {
          onChange: this.handleChange,
          value: this.state.userInput,
          style: textAreaStyles,
          placeholder: 'Separate Items With Commas' }),
        React.createElement('br', null),
        React.createElement(
          'button',
          { onClick: this.handleSubmit },
          'Create List'
        ),
        React.createElement(
          'h1',
          null,
          'My "To Do" List:'
        ),
        React.createElement(
          'ul',
          null,
          items
        )
      );
    }
  }]);

  return MyToDoList;
}(React.Component);

;

ReactDOM.render(React.createElement(MyToDoList, null), document.getElementById('app'));
