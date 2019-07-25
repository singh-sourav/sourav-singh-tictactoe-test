import React from 'react';

class SingleBlock extends React.Component {

    render() {
        return (
            <div>
                <button  style={{color:"grey",height:100,width:100,borderWidth:2,borderColor:"black",backgroundColor:this.props.winTrace?"lightgreen":"white", fontSize:35,textAlign:"center"}} onClick={this.props.giveInput}>{this.props.blockState}</button>
            </div>
        );
    }
}


export default SingleBlock;