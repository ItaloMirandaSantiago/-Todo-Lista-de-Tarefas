import React, { useState } from 'react'

    function TodoForm(props) {
        const [text, setText] = useState("")

        function handleChange(event) {
            let t = event.target.value
            setText(t)
        }

        function addItem(event) {
            event.preventDefault()
            if (text){
                // setitems([...items, text])
                props.onAddItem(text)
                setText("");
            }
        }

        return(<form>
        <input className='input' onChange={handleChange} type="text" value={text}></input>
        <button className='button' onClick={addItem}>adicionar</button>
        </form>
        )
    }

export default TodoForm