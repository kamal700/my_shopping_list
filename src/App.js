import React, { Component } from 'react'
import Navbar from './components/navbar'
import Form from './components/form'
import Footer from './components/Footer';
import List from './components/list'
import './App.css';

export default class App extends Component {
  state= {
    list:[]
  }

  componentDidMount(){
    if(sessionStorage.getItem('items')){
      this.setState({
        list:JSON.parse(sessionStorage.getItem('items'))
      })
    }
  }

  // Add new items
   additems = ()=>{

    const form = document.getElementById('form');
    
    const formData = new FormData(form);
    var newItems = this.state.list
    var errormsg = document.getElementById('errormsg')
    var obj = {}
    form.addEventListener('submit',(e)=>{
       e.preventDefault()
     })
    for (const [key, value] of formData) {
      if(value === ''){
        errormsg.innerHTML = '** Please fill all fields'
        return
      }
      if(key === 'itemName'){
        obj['name'] = value
      }

      else{
        obj['quantity'] = value
        newItems.push(obj)

        obj = {}
      }
    }
    errormsg.innerHTML = ''
    this.setState(()=>{
      return {list:newItems}
    })
    console.log(this.state)
     form.reset()

    sessionStorage.setItem('items',JSON.stringify(newItems)) 
    
  }

  
  // Delete an Item
  deleteItem = (i)=>{
    var items = this.state.list
    items.splice(i,1)
    console.log(i);
    this.setState(items)
    sessionStorage.setItem('items',JSON.stringify(items))
  }

  render() {
    return (
      <>
        <div id='page'>
          <Navbar />
          <Form additems = {this.additems}/>
          <List listitems={this.state.list} deleteItem = {this.deleteItem} />
        </div>
        <div className='gap'></div>
        <Footer />
      </>
    )
  }
}

