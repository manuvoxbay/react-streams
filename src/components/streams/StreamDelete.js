import React from 'react';
import Modal from '../Modal';
import history from '../../history';
import {Link} from 'react-router-dom';
import {fetchStream, deleteStream} from '../../actions';
import {connect} from 'react-redux';

class StreamDelete extends React.Component
{

    componentDidMount = () =>
    {
        this.props.fetchStream(this.props.match.params.id)
    }

    loadContent = () =>
    {
        console.log(this.props);
        if(!this.props.stream)
        {
            return (
                <div>
                    Are you sure to delete this stream?
                </div>
            );
        }
        else
        {
            return `Are you sure to delete the ${this.props.stream.title}`
        }
    }
    handleStreamDelete = () =>
    {
        const id = this.props.stream.id;
        this.props.deleteStream(id);
    }
    render()
    {
        const action = (
            <React.Fragment>
                <button onClick={this.handleStreamDelete} className="ui button negative">Delete</button>
                <Link to="/" className="ui button">Cancel</Link>
            </React.Fragment>
            );
        return (
                <div>
                    <Modal title="Delete Stream" 
                        action={action} 
                        content= {this.loadContent()}
                        handleClose={this.handleOutsideClick}
                        />
                 Stream Delete
                 </div>
            );
    }
    

    handleOutsideClick = () =>
    {
        history.push('/');
    }
}

const mapStateToProps = (state,ownProps) =>
{
    return {stream:state.streams[ownProps.match.params.id]}
}
export default connect(mapStateToProps,{fetchStream,deleteStream})(StreamDelete);