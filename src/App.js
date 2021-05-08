import React from "react";
import styled from "styled-components";
import {Route, Switch} from 'react-router-dom';
import List from "./views/pages/List";
import Write from "./views/pages/Write";
import Edit from "./views/pages/Edit";
import Detail from "./views/pages/Detail";
import Template from "./views/components/Template";
import PageNotFound from "./views/pages/PageNotFound";
import {GlobalStyle} from "./Styled/GlobalStyle";

const App = () => {

  return (
    <Container>
        <GlobalStyle/>
        <Template>
            <Switch>
                <Route exact path={'/'} component={List}/>
                <Route path={'/detail/:id'} component={Detail}/>
                <Route path={'/write'} component={Write}/>
                <Route path={'/edit'} component={Edit}/>
                <Route component={PageNotFound}/>
            </Switch>
        </Template>
    </Container>
  )
}

const Container = styled.div`
  
`;

export default App;