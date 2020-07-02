import React from "react";

import Button from "./components/Button";
import Screen from "./components/Screen";

import "./App.css";

class App extends React.Component {
  state = {
    expression: "0",
    isOperator: false,
    isDecimal: false,
    isNeg: false,
  };

  handleClick = (e) => {
    const { value } = e.target;
    const { expression, isOperator, isDecimal, isNeg } = this.state;
    switch (value) {
      case "AC":
        this.setState({
          expression: "0",
          isOperator: false,
          isDecimal: false,
        });
        break;
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        if (expression === "0") {
          this.setState({ expression: value, isOperator: false });
        } else {
          this.setState({ expression: expression + value, isOperator: false });
        }
        break;
      case ".":
        if (!isDecimal) {
          this.setState({ expression: expression + value, isDecimal: true });
        }
        break;
      case "+":
      case "*":
      case "/":
      case "-":
        if (isOperator && value === "-") {
          this.setState({
            expression: expression + value,
            isNeg: true,
            isOperator: true,
            isDecimal: false,
          });
        } else if (!isOperator) {
          this.setState({
            expression: expression + value,
            isOperator: true,
            isDecimal: false,
            isNeg: false,
          });
        } else if (isNeg) {
          let newExpression = expression.slice(0, -2);
          this.setState({
            expression: newExpression + value,
            isNeg: false,
            isDecimal: false,
            isOperator: true,
          });
        } else {
          let newExpression = expression.slice(0, -1);
          this.setState({
            expression: newExpression + value,
            isOperator: true,
            isDecimal: false,
            isNeg: false,
          });
        }
        break;
      case "=":
        this.setState({ expression: eval(expression), isOperator: false });
        break;
    }
  };

  render() {
    const { expression } = this.state;
    return (
      
        <div id="application">
          <Screen expression={expression} />
          <div className="row">
            <Button name="AC" id="clear" onClick={this.handleClick} />
            <Button name="+" id="add" onClick={this.handleClick} />
          </div>
          <div className="row">
            <Button name="1" id="one" onClick={this.handleClick} />
            <Button name="2" id="two" onClick={this.handleClick} />
            <Button name="3" id="three" onClick={this.handleClick} />
            <Button name="-" id="subtract" onClick={this.handleClick} />
          </div>
          <div className="row">
            <Button name="4" id="four" onClick={this.handleClick} />
            <Button name="5" id="five" onClick={this.handleClick} />
            <Button name="6" id="six" onClick={this.handleClick} />
            <Button name="*" id="multiply" onClick={this.handleClick} />
          </div>
          <div className="row">
            <Button name="7" id="seven" onClick={this.handleClick} />
            <Button name="8" id="eight" onClick={this.handleClick} />
            <Button name="9" id="nine" onClick={this.handleClick} />
            <Button name="/" id="divide" onClick={this.handleClick} />
          </div>
          <div className="row">
            <Button name="0" id="zero" onClick={this.handleClick} />
            <Button name="." id="decimal" onClick={this.handleClick} />
            <Button name="=" id="equals" onClick={this.handleClick} />
          </div>
        </div>
  
    );
  }
}

export default App;
