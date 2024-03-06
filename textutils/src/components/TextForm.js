import React, { useState, useRef } from 'react'

function TextForm(props) {
    const [text, setText] = useState("");

    const handleUpClick = () => {
        setText(text.toUpperCase());
    }
    
    const handleDownClick = () => {
        setText(text.toLowerCase());
    }

    const handleCapClick = () => {
        setText(text.trim(). split(" ").map((word) => {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        }).join(" "))
    }

    const handleClearClick = () => {
        setText('');
    }

    const handleCopyClick = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard", "success")
        setTimeout(() => {
            props.showAlert(null)
        }, 2000);
    }

    const handleChange = (event) => {
        setText(event.target.value);
    }

    return (
        <>
            <div className="container mt-5" style={{color: props.mode == 'light' ? 'black' : 'white'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="exampleFormControlTextarea1" style={{backgroundColor: props.mode == 'light' ? 'white' : 'grey', color: props.mode == 'light' ? 'black' : 'white'}} onChange={handleChange} value={text} rows="8"></textarea>
                    <button className="btn btn-primary mt-3" onClick={handleUpClick}>Convert to Uppercase</button>
                    <button className="btn btn-primary mt-3 ms-3" onClick={handleDownClick}>Convert to Lowercase</button>
                    <button className="btn btn-primary mt-3 ms-3" onClick={handleCapClick}>Convert to Capitalize</button>
                    <button className="btn btn-success mt-3 ms-3" onClick={handleCopyClick}>Copy Text</button>
                    <button className="btn btn-danger mt-3 ms-3" onClick={handleClearClick}>Clear</button>
                </div>
            </div>
            <div className="container" style={{color: props.mode == 'light' ? 'black' : 'white'}}>
                <h3>Your text consists of:</h3>
                <p>{text == 0 ? 0 : text.trim().split(" ").length} words and {text.trim().length} characters.</p>
                <p>{0.008 * text.trim().split(" ").length} min read</p>
                <h3>Preview</h3>
                <p>{text.length == 0 ? 'Enter something to preview here' : text}</p>
            </div>
        </>
    )
}

TextForm.defaultProps = {
    heading: 'Set your heading here',
}

export default TextForm