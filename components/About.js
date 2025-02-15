import UserClass from "./UserClass";
import {Component} from "react";
class About extends Component{
 constructor(props){
    super(props)
  }
  componentDidMount(){
    console.log("parent component rendered");
  }
  render(){
    console.log("Parent render");
  return(
  <div>
    <UserClass name="Aravd" role="SDE" app="Food ordering app" ver="V1.45" />
    <UserClass name="Aravd1" role="SDE" app="Food ordering app" ver="V1.45" />
    <UserClass name="Aravd2" role="SDE" app="Food ordering app" ver="V1.45" />
  </div>
  )
}
}


export default About;