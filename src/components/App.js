import React from 'react';
import {Router,Route, Switch} from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import Header from './Header';
import history from '../history';

const App = () =>
{
    return (
            <div className="ui container">
                <Router history={history}>
                    <Header/>    
                    <Switch> 
                        <Route path="/" exact component={StreamList}/>
                        <Route path="/stream/create" exact component={StreamCreate}/> 
                        <Route path="/stream/show/:id" exact component={StreamShow}/>
                        <Route path="/stream/edit/:id" exact component={StreamEdit}/>
                        <Route path="/stream/delete/:id" exact component={StreamDelete}/>
                    </Switch>
                </Router>
            </div>
        );
}


export default App;