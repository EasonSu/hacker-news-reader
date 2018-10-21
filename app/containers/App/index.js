import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import NewestPage from 'containers/NewestPage';
import NotFoundPage from 'containers/NotFoundPage';
import Header from 'components/Header';
import { layout } from 'style/constants';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Main = styled.div`
  max-width: ${layout.appMaxWidth};
  width: 100%;
  margin: 0 auto;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - Hacker News Reader"
        defaultTitle="Hacker News Reader"
      >
        <meta name="description" content="A Hacker News reader with offline supporting" />
      </Helmet>
      <Header />
      <Main>
        <Switch>
          <Route exact path="/" component={NewestPage} />
          <Route path="" component={NotFoundPage} />
        </Switch>
      </Main>
    </AppWrapper>
  );
}
