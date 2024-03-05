import React, { useState } from 'react'

function TextForm(props) {
    const [text, setText] = useState("");

    const handleUpClick = () => {
        setText(text.toUpperCase());
    }

    const handleDownClick = () => {
        setText(text.toLowerCase());
    }

    const clearClick = () => {
        setText('');
    }

    const handleChange = (event) => {
        setText(event.target.value)
    }

    return (
        <>
            <div className="container mt-5">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="exampleFormControlTextarea1" onChange={handleChange} value={text} rows="8"></textarea>
                    <button className="btn btn-primary mt-3" onClick={handleUpClick}>Convert to Uppercase</button>
                    <button className="btn btn-primary mt-3 ms-3" onClick={handleDownClick}>Convert to Lowercase</button>
                    <button className="btn btn-danger mt-3 ms-3" onClick={clearClick}>Clear</button>
                </div>
            </div>
            <div className="container">
                <h3>Your text consists of:</h3>
                <p>{text.trim().split(" ").length} words and {text.length} characters.</p>
                <p>{0.008 * text.split(" ").length} min read</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>
    )
}

TextForm.defaultProps = {
    heading: 'Set your heading here',
}

export default TextForm