import React, {useState} from 'react'

function ClickButton() {
    let [content, setContent] = useState("I am a button")

    let handleClick = () => {
        setContent("You clicked me");
    }
    return (
        <>
            <h1 className="text-blue-300 text-3xl mb-3">{content}</h1>
            <button onClick={handleClick} className="text-white bg-gray-300 rounded px-2">Click Me</button>
        </>
    )
}

export default ClickButton