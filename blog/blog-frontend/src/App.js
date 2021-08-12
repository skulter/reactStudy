import React from 'react';
import { Route } from 'react-router-dom';
import PostListPage from './page/PostListPage';
import LoginPage from './page/LoginPage';
import RegisterPage from './page/RegisterPage';
import WritePage from './page/WritePage';
import PostPage from './page/PostPage';

const App = () => {
  return (
    <>
      <Route component={PostListPage} path={['/@:username', '/']} exact />
      <Route component={LoginPage} path="/login" />
      <Route component={RegisterPage} path="/register" />
      <Route component={WritePage} path="/write" />
      <Route component={PostPage} path="/@:username/:postId" />
    </>
  );
};

export default App;
