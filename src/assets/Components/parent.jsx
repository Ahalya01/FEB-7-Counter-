import React from "react"
import Child from "./child"
class Parent extends React.Component{
    render(){
        const name ="Ahalya";
        console.log(this.props)
        return(
            <>
            <div>
                
                <h1>Parent : {this.props.values} -{this.props.names}</h1>
                <Child people={this.props.people}/>
            </div>
            </>
        )
    }
}
export default Parent