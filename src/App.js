import React, { Component, lazy, Suspense } from 'react';
import './App.css';
import { Router } from "@reach/router";


const Header = lazy(() => import('./components/Header'));
const Podcast = lazy(() => import('./components/Podcast'));
const SearchBox = lazy(() => import('./components/SearchBox'));
const DetailPodcasts = lazy(() => import('./components/DetailPodcasts'));

class App extends Component {

  render() {
    return (
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
          <SearchBox />
          <Router>
            <Podcast path="/" />
            <DetailPodcasts path="podcast/:podcast_id" />
          </Router>
        </Suspense>

      </div>
    );
  }
}


export default App;
