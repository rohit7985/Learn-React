import React, {useState} from 'react'

export default function TextForm() {
    const [text, setText] = useState('Enter the text');
    const handleText = (event)=>{
        setText(event.target.value);     
    }
    const handleClickUpper = ()=>{
        setText(text.toUpperCase());   
    }

    const handleClickLower = ()=>{
        setText(text.toLowerCase());
    }
    return (
        <>
        <div className="container">
        <div class="mb-3">
                <textarea class="form-control" value={text} id="text" rows="8" onChange={handleText}></textarea>
            </div>
            <button className='btn btn-dark ' onClick={handleClickUpper}>Upper Case</button>
            <button className='btn btn-success mx-3' onClick={handleClickLower}>Lower Case</button>

        </div>
        <div className="container my-3">
            <h4>Your text summary:</h4>
            <p>{text.split(" ").length} Words and {text.length} Charecters</p>
        </div>
        </>
    )
}
