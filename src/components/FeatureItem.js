import React from 'react';


class FeatureItem extends React.Component{

    render(){
        
       return  (
        <li key={this.props.index} className="feature__item">
          <div className={this.props.featureClass}
          onClick={this.props.onClick}>
            { this.props.name }
            ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
              .format(this.props.cost) })
          </div>
        </li>
       )
    }

    



}




export default FeatureItem;