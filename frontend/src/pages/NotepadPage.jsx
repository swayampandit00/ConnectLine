
   import React, { useState, useEffect, useRef } from 'react';

   const NotepadPage = () => {
       const [text, setText] = useState("");
       const textareaRef = useRef(null);

       const handleChange = (e) => {
           setText(e.target.value);
       };

       // Set focus on the textarea when the component mounts
       useEffect(() => {
           if (textareaRef.current) {
               textareaRef.current.focus();
           }
       }, []);

       return (
           <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
               <textarea
                   ref={textareaRef} // Attach the ref to the textarea
                   value={text}
                   onChange={handleChange}
                   style={{
                       width: '100%',
                       height: '80%',
                       border: 'none',
                       resize: 'none',
                       padding: '10px',
                       fontSize: '16px',
                       boxSizing: 'border-box',
                       outline: 'none',
                       background: '#f4f4f4',
                       color: '#333'
                   }}
                   placeholder="Start typing your notes..."
               />
           </div>
       );
   };

   export default NotepadPage;
