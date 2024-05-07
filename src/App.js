import React, { Component } from 'react'
import TvcProductlist from './components/TvcProductlist';
import TvcProductAdd from './components/TvcProductAdd';

 class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      products : [
        { title: 'Phạm Quang Nhất', id: 2210900115 ,status:1},
        { title: 'Cabbage', id: 1,status:1 },
        { title: 'Garlic', id: 2 ,status:0},
        { title: 'Apple', id: 3 ,status:0},
        { title: 'Samsung', id: 3 ,status:1},
        
      ]
    }
  }
  pqnhandlesubmit =(param)=>{
    console.log("App",param);
    let {products} = this.state;
    products.pust(param);
    this.setState({
      products:products
    })
  }
  render() {
    return (
      <div className='container border mt-5'>
        <h1>
        Phạm Quang Nhất - render data va event form</h1>
        <hr/>
        <TvcProductlist renderproducts={this.state.products} />
        
          <TvcProductAdd onSubmit={this.pqnhandlesubmit}/>
        
      </div>
    );
  }
}
export default App;