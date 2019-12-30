import React from 'react';
import {Field,reduxForm} from 'redux-form';

class StreamForm extends React.Component
{
    formLoader = ({input,label,meta}) =>
    {
        return (
            <div className="ui field">
                <label>{label}</label>
                <input {...input} autoComplete="off"/>
                {this.errorLoader(meta)}
            </div>
            );
    }

    errorLoader = ({touched,error}) =>
    {
        if(touched && error)
        {
            return (
                <div>    
                    <font color="red"><i>{error}</i></font>
                </div>
                );
        }
    }

    render()
    {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.props.parentFormSubmit)}className="ui form">
                    <Field name="title" label="Enter stream title" component={this.formLoader} />
                    <Field name="description" label="Enter stream description" component={this.formLoader} />
                    <div align="right">
                        <input type="submit" className="ui button primary" value="Submit"/>
                    </div>
                </form>
            </div>
            );
    }
}

const validate = (formValues) =>
{
    let errors = {};
    if(!formValues.title)
    {
        errors.title = "Enter stream title";
    }
    if(!formValues.description)
    {
        errors.description = "Enter stream description";
    }

    return errors;
}

export default reduxForm({
    form:"StreamForm",
    validate
})(StreamForm);