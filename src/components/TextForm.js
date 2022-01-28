import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = function () {
    // console.log("Changed to Upper  case" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };
  const handleLoClick = function () {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };
  const handleClClick = function () {
    let newText = "";
    setText(newText);
    props.showAlert("Cleared!", "success");
  };
  const handleRevClick = function () {
    let strArr = text.split("");
    strArr = strArr.reverse();
    let newText = strArr.join("");
    setText(newText);
    props.showAlert("Text reversed!", "success");
  };
  const handleTcClick = () => {
    let newText = text.split(" ").map((currentValue) => {
      let newText = currentValue[0].toUpperCase() + currentValue.slice(1);
      return newText;
    });
    setText(newText.join(" "));
    props.showAlert("Converted to capital case!", "success");
  };
  const onRemoveDuplicatesClick = () => {
    let newText = text
      .split(" ")
      .filter((item, i, allItems) => {
        return i === allItems.indexOf(item);
      })
      .join(" ");

    setText(newText);
    props.showAlert("Duplicates removed!", "success");
  };

  const copyText = function () {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied!", "success");
  };

  const handleExtraSpaces = function () {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra space removed!", "success");
  };

  const handletextExtract = function () {
    const regex = /[0-9/A-Z/a-z/ ]/g;
    const letters = text.match(regex);
    console.log(letters);
    const res1 = letters.join("");
    setText(res1);
    props.showAlert("Symbols removed!", "success");
  };
  const handleOnChange = function (event) {
    // console.log("Updated");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  // text = 'New text'; Wrong way to update the text
  // setText('New text'); Correct way to update the text

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            onChange={handleOnChange}
            value={text}
            id="myBox"
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "#042743" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary " onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2 " onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2 " onClick={handleRevClick}>
          Reverse the text
        </button>
        <button className="btn btn-primary mx-2 " onClick={handletextExtract}>
          Remove Symbols
        </button>
        <button className="btn btn-primary mx-2 " onClick={handleTcClick}>
          Title Case
        </button>
        <button
          className="btn btn-primary mx-2 "
          onClick={onRemoveDuplicatesClick}
        >
          Remove Duplicate
        </button>
        <button className="btn btn-primary mx-2 " onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
        <button className="btn btn-primary mx-2 " onClick={copyText}>
          Copy Text
        </button>
        <button className="btn btn-primary my-2 " onClick={handleClClick}>
          Clear Text
        </button>
      </div>
      <div
        className="container2 my-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2>Your text summary</h2>
        <p>
          {
            text
              .trim()
              .split(" ")
              .filter((element) => {
                return element !== "";
              }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text
              .trim()
              .split(" ")
              .filter((element) => {
                return element !== "";
              }).length}{" "}
          minutes to read
        </p>
        <h2 className="preview">Preview</h2>
        <p className="previewText">
          {" "}
          {text.length > 0 ? text : "Enter text to see preview"}
        </p>
      </div>
    </>
  );
}
