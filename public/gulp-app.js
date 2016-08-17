"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Created by mdn on 08/08/16.
 */

(function (global) {
    var App1 = function (_React$Component) {
        _inherits(App1, _React$Component);

        function App1() {
            _classCallCheck(this, App1);

            return _possibleConstructorReturn(this, Object.getPrototypeOf(App1).apply(this, arguments));
        }

        _createClass(App1, [{
            key: "render",
            value: function render() {
                return React.createElement(
                    "h1",
                    null,
                    "Wow!"
                );
            }
        }]);

        return App1;
    }(React.Component);

    global.App1 = App1;
})(window);
'use strict';

/**
 * Created by mdn on 08/08/16.
 */

$(function () {
  console.log('ok');

  //test();


  ReactDOM.render(React.createElement(App1, null), document.getElementById('react-container'));
});
'use strict';

/**
 * Created by mdn on 08/08/16.
 */

if (false) {
  console.log('fai cose ');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuanN4IiwiaW5kZXguanMiLCJvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7O0FBSUEsQ0FBQyxVQUFTLE1BQVQsRUFBZ0I7QUFBQSxRQUVQLElBRk87QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLHFDQUdBO0FBQ0wsdUJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESjtBQUdIO0FBUFE7O0FBQUE7QUFBQSxNQUVNLE1BQU0sU0FGWjs7QUFVYixXQUFPLElBQVAsR0FBYyxJQUFkO0FBRUgsQ0FaRCxFQVlHLE1BWkg7OztBQ0pBOzs7O0FBSUEsRUFBRSxZQUFNO0FBQ1IsVUFBUSxHQUFSLENBQVksSUFBWjs7QUFFQTs7O0FBR0EsV0FBUyxNQUFULENBQWdCLG9CQUFDLElBQUQsT0FBaEIsRUFBMEIsU0FBUyxjQUFULENBQXdCLGlCQUF4QixDQUExQjtBQUNDLENBUEQ7OztBQ0pBOzs7O0FBS0EsSUFBRyxLQUFILEVBQVM7QUFDTCxVQUFRLEdBQVIsQ0FBWSxXQUFaO0FBQ0giLCJmaWxlIjoiZ3VscC1hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgbWRuIG9uIDA4LzA4LzE2LlxuICovXG5cbihmdW5jdGlvbihnbG9iYWwpe1xuXG4gICAgY2xhc3MgQXBwMSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgICAgIHJlbmRlcigpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGgxPldvdyE8L2gxPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdsb2JhbC5BcHAxID0gQXBwMTtcblxufSkod2luZG93KTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBtZG4gb24gMDgvMDgvMTYuXG4gKi9cblxuJCgoKSA9PiB7XG5jb25zb2xlLmxvZygnb2snKTtcblxuLy90ZXN0KCk7XG5cblxuUmVhY3RET00ucmVuZGVyKDxBcHAxIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVhY3QtY29udGFpbmVyJykpO1xufSk7XG5cbiIsIi8qKlxuICogQ3JlYXRlZCBieSBtZG4gb24gMDgvMDgvMTYuXG4gKi9cblxuXG5pZihmYWxzZSl7XG4gICAgY29uc29sZS5sb2coJ2ZhaSBjb3NlICcpO1xufVxuXG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
