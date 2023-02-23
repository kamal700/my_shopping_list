import React, { Component } from 'react'

export default class form extends Component {
  state={
    noOfFields:1,
  }

  render() {
    return (
      <div className='text-center m-3'>
        <form id='Additems' >
            <div className='d-flex flex-row justify-content-center align-items-end'>
                        <div className='col-3 mx-1 d-flex flex-column justify-content-start align-items-start'>
                            <label htmlFor='itemNameInp'>Name</label>
                            <input type={'text'} className='col-9 form-control' name='itemName' id='itemNameInp' />
                          </div>
                          <div className='col-2 mx-3'>
                            <label htmlFor='itemQuantInp'>Quantity</label>
                            <input type={'number'}  className='form-control col-9' min={0} name='itemQuantInp' id='itemQuant' />
                          </div>
                          <button className='btn btn-primary' onClick={()=>this.props.additems()}>Add</button>
            </div>  
        </form>
        <p id='errormsg' className='text-danger'></p>
     </div>
    )
  }
}


