import {Component} from 'react'
 class First extends Component{
    constructor(){
        super();
        this.state = {
            name: 'mario',
        }
    }
   
    render(){
        return (
            <div>
                <input type="text" value={this.state.name} placeholder='name'
                onChange = {(e)=>{
                    this.setState({
                        name: e.target.value
                    });
                }}
                ></input>
                <button onClick = {()=>{
                    this.setState({
                        name:''
                    });
              
                }}>Reset</button>
                <br/>
                <h1>{this.state.name}</h1>
            </div>
        );
    }


}

export default First;