import React, {Component}from 'react'

export default class List  extends Component{
  componentDidUpdate(){
    console.log(this.props.listitems)
  }
  render(){
    
    if(this.props.listitems.length === 0)return <h3 className='text-center text-primary'>Your Shopping list will appear here.</h3>
    return (
      <ul className='shadow list'>
        <li className='listItem border-bottom pb-2'>
          <div className='itemName  '><b>Items</b></div>
          <div className='itemQuantity '><b>Quantity</b></div>
         
        </li>
        
          {this.props.listitems.map((item,i) => {
            return < div key={i}>
           
              <li className='listItem ' key={i}>
              <div className='itemName '  >{item.name}</div>
              <div className='itemQuantity ' >{item.quantity}</div>
              <div className='d-flex flex-row justify-content-end'>
                  <button className='btn  del ' onClick={()=>{this.props.deleteItem(i)}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                  </svg>
                  </button>
              </div>
              
            </li> 
            
            </div>
          })}
          
      </ul>
    )
  }
}
