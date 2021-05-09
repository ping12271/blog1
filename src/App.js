import React, {useEffect} from "react";
import styled from "styled-components";
import {Route, Switch} from 'react-router-dom';
import List from "./views/pages/List";
import Write from "./views/pages/Write";
import Edit from "./views/pages/Edit";
import Detail from "./views/pages/Detail";
import Template from "./views/components/Template";
import PageNotFound from "./views/pages/PageNotFound";
import {GlobalStyle} from "./Styled/GlobalStyle";
import history from './lib/history';

const App = () => {

    useEffect(() => {
        history.listen((h, action) => {
            console.log('@@', h)
            console.log('@@', action)
            if(action === 'PUSH') {
                window.scroll(0,0);
            }
        })
    })

  return (
    <Container>
        <GlobalStyle/>
        <Template>
            <Switch>
                <Route exact path={'/'} component={List}/>
                <Route path={'/detail/:id'} component={Detail}/>
                <Route path={'/write'} component={Write}/>
                <Route path={'/edit/:id'} component={Edit}/>
                <Route component={PageNotFound}/>
            </Switch>
        </Template>
    </Container>
  )
}

const Container = styled.div`
  
`;

export default App;