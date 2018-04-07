import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import {addNewItem} from '../actions'

class AddForm extends Component {
    handleAddItem(values){
        console.log("new Item is: ", values)

        this.props.addNewItem(values).then( () => {
            this.props.history.push('/');
        })
    }

    renderInput({input, label, meta:{touched,error}}){
        
        return (
            <div>
                <label >{label}</label>
                <input type="text" {...input} />
                <p className="text-danger">{touched && error}</p>
            </div>
        )
    }

  

    render(){


        const { handleSubmit } = this.props;

        return(
            <div>
                <div className="row">
                    <Link to="/" > <button className="btn mb-5 btn-secondary float-right">Go Back</button> </Link>
                </div>
                <h3 className="text-center row " >Add items</h3>
                <form  onSubmit={handleSubmit(this.handleAddItem.bind(this))} >
                    <Field name="title" label="Item Title" component={this.renderInput} />
                    <Field name="details" label="Item Details" component={this.renderInput} />
                    <button className="btn">Add To Do Item</button>
                </form>
            </div>

        )
    }
}
function validate(values){
    const {title, details} = values;
    const errors = {};

    if(!title){
        errors.title = 'Please Enter a title';
    }
    if(!details){
        errors.details = 'Please enter a description';
    }

    return errors
}
AddForm = reduxForm({
    form: 'add_item',
    validate: validate,
    // validate
})(AddForm)

export default connect(null, { addNewItem : addNewItem })(AddForm);