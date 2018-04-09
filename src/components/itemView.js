import React, {Component} from 'react';
import { connect } from 'react-redux'
import { getSingleItem } from '../actions'
import {Link} from 'react-router-dom';
class ItemView extends Component{
    constructor(props){
        super(props)
        this.state={}
    }
    componentDidMount(){
        this.props.getSingleItem(this.props.match.params.id);
    }

    render(){
        console.log(this.props);
        return(
            <div>
                <Link className="btn" to="/" >View Full List</Link>
                <div>{this.props.item.title}</div>
                <div>{this.props.item.details}</div>
            </div>
        )
    }
};

function mapStateToProps(state){
    console.log('state: ',state);
    return{
        item: state.list.singleItem
    }
}

export default connect(mapStateToProps,{getSingleItem:getSingleItem})(ItemView);