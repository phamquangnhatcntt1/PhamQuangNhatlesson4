import React, { Component } from 'react'

export default class TvcProductAdd extends Component {
    constructor(props){
        super(props);
        this.state ={
            id:0,
            title:'',
            status:0
        }
    }
    Nhathandlechange = (event)=>{
        let name = event.targer.name;
        let value = event.targer.value;
        this.setState({
            [name]:value
        })
    }
  render() {
    return (
      <div>
        <h2>Thêm mới sản phẩm</h2>
        <form className='col-md-6'>
        <div className="input-group mb-3">
  <span className="input-group-text" id="basic-addon1">
    id
  </span>
  <input
    type="text"
    className="form-control"

     name='id'
     value={this.state.id}
     onChange={this.Nhathandlechange}
  />
</div>

        <div className="input-group mb-3">
  <span className="input-group-text" id="basic-addon2">
    title
  </span>
  <input
    type="text"
    className="form-control"

     name='title'
     value={this.state.id}
     onChange={this.Nhathandlechange}
  />
</div>
<div className="input-group mb-3">
  <span className="input-group-text" id="basic-addon3">
    status
  </span>
  <input
    type="text"
    className="form-control"
     name='status'
     value={this.state.id}
     onChange={this.Nhathandlechange}
  />
</div>
<button className='btn btn-success'>Ghi Lại</button>

        </form>
      </div>
    )
  }
}

