import React, {Component}from 'react'

export default class List  extends Component{
  
  render(){
    
    if(this.props.listitems.length === 0)return <h3 className='text-center text-primary'>Your Shopping list will appear here.</h3>
    return (
      <ul className='shadow list'>
        <li className='listItem'>
          <div className='itemName col-5 ms-2 me-5'><b>Items</b></div>
          <div className='itemQuantity col-4 mx-4'><b>Quantity</b></div>
        </li>
        
          {this.props.listitems.map((item,i) => {
            return <>
              <hr/>
              <li className='col-12  listItem ' id={'listItem'+i  } key={i}>
              <div className='itemName col-6 ms-2'  id={'itemName'+i  }>{item.name}</div>
              <div className='itemQuantity col-2 mx-3' id={'itemQuantity' + i}>{item.quantity}</div>
              <div className='col-3 d-flex flex-row justify-content-end'>
                  <button className='btn  del me-2' onClick={()=>{this.props.deleteItem(i)}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                  </svg>
                  </button>
              </div>
              
            </li> 
            
            </>
          })}
          
      </ul>
    )
  }
}
