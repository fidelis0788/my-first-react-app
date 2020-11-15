import React,{Component} from "react"

import './App.css';

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
       list: ''.split(','),
       newItems: [],
      
    }
   
  }

  updateInput(key,value){
    this.setState({
      [key] :value
    })
  }
  // create item with unique id
addItem () {
  const newItem ={
    id: 1+ Math.random,
    value: this.state.newItem.slice()
  };
// duplicate of current list of items
 const list = [...this.state.list]
//  add new item to the list

list.push(newItem)

// update state with new list and reset newItem input

this.setState({
  list,
  newItem:""
})

}
deleteItem (id){
  const list = [...this.state.list]

  const updatedList = list.filter(item => item.id !==id)

  this.setState({list:updatedList})
}

  render(){
    
    return(
      <div class = "app">
      <div>
       Fidele's Todo
        <br/>
        <input type = "text"
         value = {this.state.newItem}
         onChange = { e => this.updateInput("newItem",e.target.value)}
        
        />
        <button
          onClick = {() => this.addItem()}>
            Submit
        </button>
        <br/>
        <ul>
    
    {this.state.list.map( item =>{
      return(<li key ={item.id}>{item.value}
    
    <button onClick = {() =>this.deleteItem(item.id)

    }>
    X
    </button>
    
    </li>)})}
        </ul>
         
    </div>
    </div>
    )
    
    }
  }

export default App;


