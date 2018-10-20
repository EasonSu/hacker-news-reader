import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import NewestPage from 'containers/NewestPage';
import NotFoundPage from 'containers/NotFoundPage';
import Header from 'components/Header';

const AppWrapper = styled.div`
  max-width: 800px;
  min-height: 100%;
  margin: 0 auto;
  padding: 0 16px;
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
      <Switch>
        <Route exact path="/" component={NewestPage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
    </AppWrapper>
  );
}