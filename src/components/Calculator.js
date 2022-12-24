import React from "react";
import { Helmet } from "react-helmet";
import "../style/calculator.scss";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputOne: "",
      inputTwo: "",
      operator: "+",
      result: "",
      count: 0,
      isFocused: false,
    };

    this.inputOne = this.inputOne.bind(this);
    this.inputTwo = this.inputTwo.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clear = this.clear.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.operator = this.operator.bind(this);
  }

  inputOne(event) {
    this.setState({ inputOne: event.target.value });
  }
  inputTwo(event) {
    this.setState({ inputTwo: event.target.value });
  }
  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }
  clear() {
    this.setState({ inputOne: "", inputTwo: "" });
  }
  operator(event) {
    this.setState({ operator: event.target.textContent });
  }
  handleClick(event) {
    // get the value from the target element (button)
    const value = event.target.textContent;
    // console.log(value);
    switch (value) {
      case "=": {
        // if it's an equal sign, use the eval module
        // to evaluate the question ,convert the answer
        // (in number) to String
        if (this.state.inputOne !== "" && this.state.inputTwo !== "") {
          let ans = "";
          try {
            ans = eval(
              this.state.inputOne + this.state.operator + this.state.inputTwo
            );
            console.log("ans", ans);
            this.setState({ result: ans });
          } catch (err) {
            this.setState({ result: "Math Error" });
          }
          if (ans === undefined) this.setState({ result: "Math Error" });
          // update answer in our state.
          else
            this.setState({
              result: ans,
              inputOne: "",
              inputTwo: "",
              count: this.state.count + 1,
            });
          break;
        }
      }
      case "Clear": {
        // if it's the Clears sign, just clean our
        // question and answer in the state
        this.setState({ inputOne: "", inputTwo: "" });
        break;
      }
      case "Delete": {
        let inputOneValue = this.state.inputOne;
        let inputTwoValue = this.state.inputTwo;
        console.log(inputOneValue);
        console.log(inputTwoValue);
        if (this.state.inputOne !== "") {
          inputOneValue = inputOneValue.substr(0, inputOneValue.length - 1);
          this.setState({ inputOne: inputOneValue });
        } else if (this.state.inputTwo !== "") {
          inputTwoValue = inputTwoValue.substr(0, inputTwoValue.length - 1);
          this.setState({ inputTwo: inputTwoValue });
        } else if (this.state.inputOne !== "" && this.state.inputTwo !== "") {
          const elemOne = document.querySelector(".inputOne");
          const elemTwo = document.querySelector(".inputTwo");
          if (
            elemOne === document.activeElement ||
            elemTwo === document.activeElement
          ) {
            this.setState({ isFocused: true });
          } else {
            this.setState({ isFocused: true });
          }
          if (this.state.isFocused === true) {
            this.setState({ inputOne: inputOneValue, inputTwo: inputTwoValue });
          }
        }

        break;
      }
      default: {
        // for every other command, update the answer in the state
        this.setState({ result: (this.state.question += value) });
        break;
      }
    }
  }
  render() {
    let number = (18000000).toLocaleString();
    return (
      <div>
        <Helmet>
          <title>React App | Calculator</title>
        </Helmet>
        <section className="calculator">
          <div className="container">
            <div className="row py-5">
              <div className="col-sm-12">
                <div className="text-center mb-3">
                  <h1>Calculator</h1>
                </div>
              </div>
              <div className="col-sm-12">
                <div className="frame">
                  <div className="frame_inner">
                    <div className="frame_wrapper">
                      <div className="inputbox">
                        <input
                          type="text"
                          value={this.state.inputOne}
                          onChange={this.inputOne}
                          className="inputOne"
                          placeholder="INPUT NUMBER 1"
                        />
                        <span className="operator">{this.state.operator}</span>
                        <input
                          type="text"
                          value={this.state.inputTwo}
                          onChange={this.inputTwo}
                          className="inputTwo"
                          placeholder="INPUT NUMBER 2"
                        />
                      </div>
                      <div className="button_box">
                        <button onClick={this.operator}>+</button>
                        <button onClick={this.operator}>-</button>
                        <button onClick={this.operator}>
                          <sub>*</sub>
                        </button>
                        <button onClick={this.operator}>/</button>
                      </div>
                      <div className="button_box">
                        <button className="clear" onClick={this.handleClick}>
                          =
                        </button>
                        <button className="clear" onClick={this.clear}>
                          Clear
                        </button>
                        <button className="clear" onClick={this.handleClick}>
                          Delete
                        </button>
                      </div>
                      <div className="result">
                        <p>
                          Result: <span>{this.state.result}</span>
                        </p>
                      </div>
                      <div className="counts">
                        <p>
                          Counts: <span>{this.state.count}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Calculator;
