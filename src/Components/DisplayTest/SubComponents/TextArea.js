const TextArea=({disabled,handleTextChange,handleKeyDownPress,handleMouseDown})=>
  <textarea onChange={handleTextChange} placeholder='Start typing...'autoFocus disabled={disabled}  onKeyDown={handleKeyDownPress} onMouseDown={handleMouseDown}></textarea>
  

export default TextArea