const TextArea=({disabled,onTextChange})=>
  <textarea onChange={onTextChange} placeholder='Start typing...'autoFocus disabled={disabled}></textarea>
  

export default TextArea