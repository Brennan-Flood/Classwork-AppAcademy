import React from 'react';
import ItemDetailContainer from './item_detail_container'

class ItemDetail extends React.Component{
  constructor(props) {
    super(props)
  }

  render() {
    // debugger
    return (
      <div>
        <h3 className="itemName" >{this.props.item.name}</h3>
        <h4 className="itemDetail">Happines: {this.props.item.happiness}</h4>
        <h4 className="itemDetail">Price: ${this.props.item.price}</h4>
      </div>
    )
  }
}

export default ItemDetail;