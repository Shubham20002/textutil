import React from 'react'
import { useState } from "react";



const Text = (props) => {
  function uppercase(){
    let upper=content.toUpperCase();
    setcontent(upper);
  };

  function lowercase(){
    let upper=content.toLowerCase();
    setcontent(upper);
  };
  
  
  function contentchange(e){
    setcontent(e.target.value);
  }
  const [content, setcontent] = useState("");
  return (
   <>
   <div class="mb-3 container">
    <h2>{props.title}</h2>
   <textarea class="form-control" id="exampleFormControlTextarea1" rows="8" value={content} onChange={contentchange}></textarea>
   <button type="button" class="btn btn-primary mt-2 mx-2" onClick={uppercase}>Convert to uppercase</button>
   <button type="button" class="btn btn-success mt-2" onClick={lowercase}>Convert to lowercase</button>

   <div>
    <h2>Your text summary</h2>
    <p>total word is {content.split(" ").length} and character is {content.length}</p>
    <p>{.008*content.split(" ").length} Minutes read</p>
    <h1>preview</h1>
    <p>{content}</p>
   </div>
 </div>
 </>

  )
}

export default Text