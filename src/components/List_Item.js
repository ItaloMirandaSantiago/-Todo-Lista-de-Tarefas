import React from "react";
import Card from "./Card"


function Img_feito(props) {
    if (props.done){
        return (<img src="./assets/marque-feito.png" width={"18px"} height={"18px"}></img>)
    } else {
        return(<img src="./assets/feito.png" width={"18px"} height={"18px"}></img>)
    }
}

function List_Item(props) {
    return(<li>
        <Card className={props.item.done ? "done item":"item"}>    
            {props.item.text}
            <div>
                <button onClick={()=>{props.onDone(props.item)}}><Img_feito done={props.item.done}></Img_feito></button>
                <button onClick={()=>{props.deleteItem(props.item)}}><img alt="delete" src="./assets/cesto-de-lixo.png" width={'18px'} height={'18px'}></img></button>
            </div> 
        </Card>
            </li>)
}

export default List_Item