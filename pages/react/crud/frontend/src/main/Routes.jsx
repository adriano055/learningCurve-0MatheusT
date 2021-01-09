/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/home/Home'
import UserCrud from '../components/user/UserCrud'

export default props => 
    <Switch>
        <Route exact path='/' component={Home} /> {/* exact - faz navegar pro home se for exatamente "/" */}
        <Route path='/users' component={UserCrud} />
        <Redirect from='*' to='/' /> {/* Caso qualquer outra url seja digitada redireciona para home */}
    </Switch>