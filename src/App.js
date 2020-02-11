import React, { Component, lazy, Suspense } from 'react';
import './App.css';
import { Router } from "@reach/router";
import axios from 'axios';


const Header = lazy(() => import('./components/Header'));
const Podcast = lazy(() => import('./components/Podcast'));
const SearchBox = lazy(() => import('./components/SearchBox'));
const DetailPodcasts = lazy(() => import('./components/DetailPodcasts'));

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      podcasts: [],
      searchInput: '',
      loading: false
    }

  }

  handleButtonSearch = (event) => {
    event.preventDefault()
  }

  handleSearchInput = (event) => {
    this.setState({
      searchInput: event.target.value
    })
    console.log(event.target.value)
  }

  async componentDidMount() {
    const result = await axios.get("https://json-server-heroku-zjqcjtotyv.now.sh/podcasts")
    this.setState({
      podcasts: result.data,
      loading: true,

    })

  }


  render() {
    return (
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Header />

          <SearchBox handleButtonSearch={this.handleButtonSearch} handleSearchInput={this.handleSearchInput} />



          <Router>
            <Podcast path="/" podcast={this.state.podcasts} searchInput={this.state.searchInput} loading={this.state.loading} />
            <DetailPodcasts path="podcast/:id" podcast={this.state.podcasts} />
          </Router>
        </Suspense>

      </div>
    );
  }
}


export default App;
