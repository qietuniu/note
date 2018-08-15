import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Main from './Main';
import About from '../router1/About';
import Topics from '../router1/Topics';
import Info from './Info';
import Home from './Home'
import NoMatch from './NoMatch'
export default class IRouter extends Component{
    
    render(){
        return (
            <Router>
                <Home>
                    <Switch>
                        <Route path='/main'  render={() => 
                            <Main>                           
                                <Route path='/main/:id' component={Info} ></Route>
                            </Main>
                        } ></Route>
                        <Route path='/about' component={About} ></Route>
                        <Route path='/topics' component={Topics} ></Route>
                        <Route component={NoMatch} ></Route>
                    </Switch>
                    
                </Home>
            </Router>
        );
    }
}
