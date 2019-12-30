import React from 'react';
import StreamForm from './StreamForm';
import {connect} from 'react-redux';
import {fetchStream, updateStream} from '../../actions';

class StreamEdit extends React.Component
{
    componentDidMount = () =>
    {
        this.props.fetchStream(this.props.match.params.id);
    }


    handleEdit = (formValues) =>
    {
        let stremId = this.props.match.params.id;
        this.props.updateStream(formValues, stremId);
    }
    render()
    { 
        
        if(!this.props.streams)
        {
            return "Loading...";
        }
        return (
                <div>     
                    <StreamForm initialValues ={this.getInitals(this.props.streams)} parentFormSubmit={this.handleEdit}/>
                </div>
            );
    }
    getInitals (pro ={})
    {
        let res = {};
        res.title = pro.title;
        res.description = pro.description;
        return res;
    }
}


const mapStateToProps = (state,ownProps) =>
{
    return {streams:state.streams[ownProps.match.params.id]};
}

export default connect(mapStateToProps,{fetchStream,updateStream})(StreamEdit);