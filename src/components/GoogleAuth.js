import React from 'react';

class GoogleAuth extends React.Component
{
    state = { isSignedIn:null};
    componentDidMount()
    {   
        window.gapi.load('client:auth2', () => {
            window.gapi.auth2.init({
                clientId:'1022720765662-getcr431sp4i0fl462a88fvlq7btcn42.apps.googleusercontent.com',
                scope:'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({isSignedIn:this.auth.isSignedIn.get()});
                this.auth.isSignedIn.listen(this.checkAuth);
            });
        });
    }

    checkAuth = () =>
    {
        this.setState({isSignedIn:this.auth.isSignedIn.get()});
    }

    onSignIn = () =>
    {       
        this.auth.signIn();
    }

    signOut = () =>
    {
        this.auth.signOut();
    }
    myrender()
    {
        const val = this.state.isSignedIn;
        if(val)
        {
            return (
                <button onClick={this.signOut} className="ui button">
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
                <button className="ui button" onClick={this.onSignIn}>
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

export default GoogleAuth;