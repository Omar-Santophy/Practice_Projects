import React from 'react'

class AddContact extends React.Component {
  state = {
    name : "",
    email : "",
  };
  add = (e) =>{
    e.preventDefault();
    if(this.state.name === "" || this.state.email === ""){
      alert ("all the field are mandatory");
      return
    }
    this.props.addContactHandler( this.state)
    this.setState({name:"" ,email:""})
  }
  render (){
  return (
    <div className='ui main'>
      <h1>Add Contact</h1>
      <form className='ui form' onSubmit={this.add}>
        <div className='field'>
          <label>Name</label>
          <input type = "text" name= "name" 
          placeholder='Enter your name' 
          value = {this.state.name}
          onChange={(e)=>this.setState({name: e.target.value})}></input>
        </div>
        <div className='field'>
          <label>Email</label>
          <input type = "text" name= "Email" placeholder='Enter your email'
          value = {this.state.email}
          onChange={(e)=> this.setState({email: e.target.value})}></input>
        </div>
        <button className='ui button blue'>Add</button>
      </form>
    </div>


  )
  }
}

export default AddContact