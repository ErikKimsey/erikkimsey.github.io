import React , {Component} from 'react';
import DataItem from '../components/data_item';
import './styles/data_modal.scss';

class DataModal extends Component {
  constructor(props){
    super(props);
  }
 
  render(){
    return (
      <div className="modal-container">
        <div className="list-container">
          {
            this.props.data.map((item)=>{
              return (
                <DataItem key={item} data={item}/>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default DataModal;