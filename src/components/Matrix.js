import React from 'react';
import SingleBlock from './SingleBlock';

class Matrix extends React.Component {

    // Three Blocks in a single Row
    // i is starting index of the row
    getRowBlock = (i) => {
       return(
        <div style={{display:"flex",flexDirection:"row"}}>
        <SingleBlock winTrace={this.props.winTrace.includes(i)} giveInput={()=>this.props.giveInput(i)} blockState={this.props.gameStatus[i]} />
        <SingleBlock winTrace={this.props.winTrace.includes(i+1)} giveInput={()=>this.props.giveInput(i+1)} blockState={this.props.gameStatus[i+1]} />
        <SingleBlock winTrace={this.props.winTrace.includes(i+2)} giveInput={()=>this.props.giveInput(i+2)} blockState={this.props.gameStatus[i+2]} />
     </div>
       ); 
    }
   
    render() {
        return (
            <div style={{display:"flex",height:450,flexDirection:"column" ,justifyContent:"center",alignItems:"center"}}>
               {this.getRowBlock(0)}
               {this.getRowBlock(3)}
               {this.getRowBlock(6)} 
            </div>
        );
    }
}


export default Matrix;