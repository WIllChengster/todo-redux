import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getList } from '../actions';
import { Link } from 'react-router-dom';

class List extends Component{
    componentDidMount(){
        this.props.getList();
    }
    render(){
        console.log('props: ', this.props)
        

        const listItems = this.props.list.map( (item, index) => {
            return(<li key={index} className="list-group-item">{item.title}</li>)
        })

        return(
           <div>

                <Link to="add-item"  ><button className="btn mb-5 "> addItem</button>  </Link>

                <ul className="list-group">
                    {listItems}
                </ul>
           </div> 
           
        )
    }
}

function mapStateToProps(state){
    return{
        list: state.list.items
    }
}

export default connect( mapStateToProps, {getList:getList} )(List);
