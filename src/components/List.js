import React from "react"
import List_Item from "./List_Item"
    
function Lista(props) {
    return(<ul >
        {props.items.map(item =><List_Item key={item.id} item={item} onDone={props.onDone} 
        deleteItem={props.deleteItem}>
        </List_Item>)}
    </ul>)
}

export default Lista