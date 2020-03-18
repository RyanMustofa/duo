import React from "react";
import { Switch,Route } from 'react-router-dom';
import Dashboard from './container/Dashboard';
import Detail from './container/Detail';
import Setting from './container/Setting';
const App = () => {
    return(
        <div>
            <Switch>
                <Route path="/" exact component={Dashboard}/>
                <Route path="/setting" exact component={Setting}/>
                <Route path="/:nomor" exact component={Detail}/>
            </Switch>
        </div>
    )
}

export default App;
