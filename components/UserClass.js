import React from "react";

class UserClass extends React.Component{
 constructor(props){
   super(props);
   this.state={
    count:0,
    count2:5
   }
 }
 componentDidMount(){
  console.log(this.props.name,"didrendered");
}

  render(){
    console.log(this.props.name,"render");
    const{name,role,app,ver}=this.props
    const{count,count2}=this.state;
    
    return(
    <div className= "user-class">
    <h1>{name}</h1>
    <h2> {role}</h2>
    <h3>{app}</h3>
    <p>{ver}</p>
    <h4>{count}</h4>
    <h4>{count2}</h4>
    <button onClick={()=>{
      this.setState({
      count:this.state.count + 1,
      count2:this.state.count2 +1,
    })
    }}>Increment</button>
     </div>
    )
}
}
export default UserClass;