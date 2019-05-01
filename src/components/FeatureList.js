import React from 'react';
import FeatureItem from './FeatureItem';



class FeaturesList extends React.Component{

    render() {
     const features = Object.keys(this.props.features)
     .map(key => {
       const options = this.props.features[key].map((item, index) => {
         const selectedClass = item.name === this.props.selected[key].name ? 'feature__selected' : '';
         const featureClass = 'feature__option ' + selectedClass;
         return <FeatureItem index={index} featureClass={featureClass} onClick={()=> this.props.updateFeature(key, item)} name={item.name} cost={item.cost}/>
       });
       return  <div className="feature" key={key}>
         <div className="feature__name">{key}</div>
         <ul className="feature__list">
           { options }
         </ul>
       </div>
     
    })
    
       return ( 
           <div className="list-returned">
        <section className="main__form">
        <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
        { features }
         </section>
       
      
       </div>
       
     )};  
    }

export default FeaturesList;