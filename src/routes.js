import { Switch, Route} from 'react-router-dom'

import App from './App'
import User from './Pages/User'


export default function Routes () {
    return(
        <Switch>
            <Route path="/" exact component={App} />
            <Route path="/user" component={User} />
        </Switch>
    )
}