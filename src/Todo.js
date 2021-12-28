import React, { useEffect, useState } from 'react'
import Lista from './components/List'
import TodoForm from './components/TodoForm'
import Modal from "./components/Modal"
import Item from './components/Item'
import './Todo.css'

const SAVE = "save"
    function Todo () {

    const [items, setitems] = useState([])
    const [show, setShow] = useState(false)


    useEffect(()=>{
        let save = JSON.parse(localStorage.getItem(SAVE))
        if(save){
            setitems(save)}
    },[])

    useEffect(()=> {
        localStorage.setItem(SAVE, JSON.stringify(items))
    }, [items])

    function onAddItem(text) {
        let it = new Item(text)
        setitems([...items, it])
        HideModal();
    }

    function deleteItem(item) {
        let filter_item = items.filter(it => it.id !== item.id) 
        
        setitems(filter_item)
    }

    function onDone(item) {
        let novo_item = items.map(it => {
            if (it.id === item.id){
            it.done = !it.done;
        } return it
        })
        setitems(novo_item)
    }

    function HideModal(a) {
        setShow(false)
    }
    

    return (<div className='container'>
        <header className='header'><h1 className='todo'>TODO</h1> <button onClick={()=> setShow(true)} className='add'>+</button></header>
        <Lista onDone={onDone} deleteItem = {deleteItem} items={items}></Lista>

        <Modal show = {show} HideModal={HideModal} >

        <TodoForm onAddItem = {onAddItem}></TodoForm>
       
        </Modal>
            </div>
        )
    }

    export default Todo