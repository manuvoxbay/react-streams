import React from 'react';
import {connect} from 'react-redux'
import {signIn,signOut} from '../actions';

class GoogleAuth extends React.Component
{
    componentDidMount()
    {   
        window.gapi.load('client:auth2', () => {
            window.gapi.auth2.init({
                clientId:'1022720765662-getcr431sp4i0fl462a88fvlq7btcn42.apps.googleusercontent.com',
                scope:'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.checkAuth()
                this.auth.isSignedIn.listen(this.checkAuth);
            });
        });
    }

    checkAuth = () =>
    {
        if(this.auth.isSignedIn.get())
        {
            const user_id = this.auth.currentUser.get().getId();    
            if(this.props.sign_in === null || this.props.sign_in === false)
            this.props.signIn(user_id);
        }
        else 
        {
            if(this.props.sign_in === null || this.props.sign_in)
            this.props.signOut();
        }
    }

    onSignInClick = () =>
    {   
        try
        {
            this.auth.signIn().then((response)=>{ // google signin
                const user_id = this.auth.currentUser.get().getId();   
                this.props.signIn(user_id); //calling action
            },(error) =>
            {    
                alert("failed to signin");
            });  
        }
        catch(e)
        {
            console.log("catched some expressions");
        }
        

    }

    signOutClick = () =>
    {
        this.auth.signOut(); //google sign out not any redux action
        this.props.signOut();
    }
    myrender()
    {
        const val = this.props.sign_in;
        if(val)
        {
            return (
                <button onClick={this.signOutClick} className="ui button">
                    SignOut
                </button>
            );
        }
        else if(val === null)
        {
            return null;
        }
        else
        {
            return (
                <button className="ui button" onClick={this.onSignInClick}>
                    SignIn
                </button>
            )
        }
    }
    render()
    {
        return (
                <div>{this.myrender()}</div>
            );
    }

    
}
const mapStateToProps = (state) =>
{
    return {sign_in:state.AuthReducers.signIn};
}
export default connect(mapStateToProps,{signIn,signOut})(GoogleAuth);