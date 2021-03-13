import {Component} from 'react';

class Second extends Component{

    constructor(){
        super();
        this.ind = 0;
        this.srcs = ['./1.jpg', './2.jpg','./3.jpg'];
        this.btnEnabled = true;
        this.state={
            source :this.srcs[0],
         
        };
        console.log(this.source);
    }

    render(){
        return(
            <div>
             
            <img src= {this.state.source}></img> <br/>
            <button onClick= {()=>{
                this.ind--;
                if(this.ind<0) this.ind = this.srcs.length-1;
                this.setState({source: this.srcs[this.ind]});
            }}>Prev</button>
            <button onClick= {()=>{
                if(this.btnEnabled ){
                 this.btnEnabled = false;
                
                
                this.timer = setInterval(()=>{
                this.ind++;
                this.ind%=this.srcs.length;
                this.setState({source: this.srcs[this.ind]});

                },2000);
                }
            }}>Slide</button>
            <button onClick= {()=>{
                if(!this.btnEnabled){
                clearInterval(this.timer);
                this.btnEnabled = false;
                }
            }
            }>Stop</button>
            <button onClick= {()=>{
                this.ind++;
                this.ind%=this.srcs.length;
                this.setState({source: this.srcs[this.ind]});
            }}>Next</button>
            </div>
            
        );
    }
}

export default Second;