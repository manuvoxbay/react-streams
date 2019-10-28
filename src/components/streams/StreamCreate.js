import React from 'react';
import {StreamAdd} from '../../actions';
import {connect} from 'react-redux';
import StreamForm from './StreamForm';

class StreamCreate extends React.Component
{
    handleErrors = ({error,touched}) =>
    {
        if(error &&  touched)
        {
            return (
                <div className="ui error">
                   <font color="red"><i>{error}</i></font>
                </div>
                )
        }
    }
    formLoader = ({input,label,meta}) =>
    {
        return (
            <div className="ui field">
                <label>{label}</label>
                <input {...input} type="text" autoComplete="off"/>
                {this.handleErrors(meta)}
            </div>
            );
    }
    handleFormSubmit = (formValues) =>
    {
        this.props.StreamAdd(formValues)
    }
    render()
    {
        return (
            <div>
                <StreamForm parentFormSubmit={this.handleFormSubmit}/>
            </div>
            );
    }
}

export default connect(null,{StreamAdd})(StreamCreate);