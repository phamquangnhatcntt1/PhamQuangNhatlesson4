import React, { Component } from 'react'

export default class TvcProductlist extends Component {
  render() {
    let {renderproducts} = this.props;
    console.log("product:",renderproducts)

        let elementproduct = renderproducts.map((item,index)=>{
                return(
                    <>
                 <tr key={index}> 
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                </tr>
                    </>
                )
        })
        return (
      <div>
        <h2>Danh Sach san pham</h2>
        <table className='table table-bodered'>
            <thead>
                <tr>
                    <th>id</th>
                    <th>title</th>
                </tr>
            </thead>
            <tbody>
                {elementproduct}
            </tbody>
        </table>
      </div>
    );
  }
}

 