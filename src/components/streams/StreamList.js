import React from 'react';
import {StreamLister} from '../../actions';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class StreamList extends React.Component
{
    componentDidMount = () =>
    {
        this.props.StreamLister();
    }
    loadTools = (stream)=>
    {
        if(this.props.currentUser === stream.userId)
        {
            return (
                <div>
                    <Link className="ui button primary" to={`stream/edit/${stream.id}`}>Edit</Link>
                    <Link className="ui button negative" to={`stream/delete/${stream.id}`}>Delete</Link>
                </div>
            );
        }
    }

    loadStreams = () =>
    {
        return this.props.streams.map((stream) => {
            return (
                <div key={stream.id}>
                    <div className="ui divided items">
                        <div className="item">
                            <div className="image">
                                <img alt="Sample pic" src="logo192.png"/>
                                <Link to={`stream/show/${stream.id}`}> 
                                    <b>{stream.title}</b>
                                </Link>
                                <br/>
                                <i>{stream.description}</i>
                                {this.loadTools(stream)}
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <br/>
                </div>
                )
        });
    }

    render()
    {
        return (
                <div> 
                    <h2>Stream List</h2><br/><br/>
                    {this.loadStreams()}
                </div>
            );
    }
}


const mapStateToProps = (state) =>
{
    return {
        streams:Object.values(state.streams),
        currentUser:state.AuthReducers.user_id
    };
}
export default connect(mapStateToProps,{StreamLister})(StreamList);