import React from 'react';
import FeatureList from './FeatureList';


class Features extends React.Component{

    render() {
  
       return ( 
           <div className="list-returned">
        <section className="main__form">
        <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
        <FeatureList features={this.props.features} selected={this.props.selected} updateFeature={((key, item) => this.props.updateFeature(key, item))}/>
         </section>
       </div>
       
     )};  
    }

export default Features;