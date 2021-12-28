import React from "react"
import { useState } from "react/cjs/react.development"
import Card from "./Card"

function Modal (props){

   function HideModal(a) {
    let target = a.target
    if (target.id == "modal"){
    props.HideModal()
    }
    console.log(target)
   }

return (<div id="modal" onClick={HideModal} className= {props.show ? "modal": "modal hide"}>
    <Card className="card_modal">
        {props.children}
    </Card>
</div>)
}

export default Modal