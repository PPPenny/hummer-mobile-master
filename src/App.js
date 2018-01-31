import React, { Component } from 'react';
import './App.css';
import './shared/css/caag-mobile.css';
import { useStrict } from 'mobx';
import { Provider } from 'mobx-react';
import rootStore from './stores/RootStore';
import Footer from './base-components/Footer/footer'
import Async from 'react-code-splitting';
import { BrowserRouter, Route, Switch ,Redirect} from "react-router-dom";


useStrict(true);
const Orders = ()=><Async load={import('./pages/orders/index')}/>
const Order = () => <Async load={import('./pages/order/index')} />

class App extends Component {
  render() {
    return (
      <Provider {...rootStore}> 
        <BrowserRouter>
               <div>
               <Footer/>
                  <Switch>
                      <Route path="/" exact render={()=><Redirect to='/orders'/>}/>  
                      <Route path="/orders" exact component={Orders} />  } />        
                      <Route path="/order" exact component={Order} />   
                      <Route path="/clue" exact component={() => <Async load={import('./pages/clue/index')} /> } />   
                      <Route path="/my" exact component={() => <Async load={import('./pages/my/index')} /> } />   
                  </Switch>
               </div>
            </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
