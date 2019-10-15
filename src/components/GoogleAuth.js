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
            this.props.signIn();
        }
        else 
        {
            this.props.signOut();
        }
    }

    onSignInClick = () =>
    {       
        try
        {
            this.auth.signIn().then((response)=>{
                this.props.signIn();
            },function(error)
            {    
                if(error.error === 'popup_closed_by_user'){
                    alert('Oh Dude, Why you close authentication user window...!');
                }
                else if(error.error === 'access_denied')
                {
                    alert("Your acess denied by user");
                }
                else
                {
                    alert("failed to signin")
                }
            });  
        }
        catch(e)
        {
            console.log("catched some expressions");
        }
        

    }

    signOutClick = () =>
    {
        this.auth.signOut();
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