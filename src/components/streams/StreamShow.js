import React from 'react';
import {fetchStream} from '../../actions';
import {connect } from 'react-redux';

class StreamShow extends React.Component
{
    componentDidMount()
    {
        this.props.fetchStream(this.props.match.params.id);
    }
    render()
    {
       console.log(this.props.stream);
       if(!this.props.stream)
       {
           return <div>Loading...</div>;
       }
        return (
                <div>
                    <h2>{this.props.stream.title}</h2>
                    <br/>
                    <h5>{this.props.stream.description}</h5>
                </div>
            );
    }
    
}

const mapstateToProps = (state,ownProps) =>
{
    //console.log(ownProps.match.params.id);
    return {stream: state.streams[ownProps.match.params.id]}
}

export default connect(mapstateToProps,{fetchStream})(StreamShow);