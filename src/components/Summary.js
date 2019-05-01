import React from 'react';
import SummaryItem from './SummaryItem';


class Summary extends React.Component{


    render(){

        const summary = Object.keys(this.props.selected)
   .map(key => {
     return <SummaryItem key={key} name={this.props.selected[key].name} cost={this.props.selected[key].cost}/>
   })
        

        return summary;
    }

}

export default Summary;