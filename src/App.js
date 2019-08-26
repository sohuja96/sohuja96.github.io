import React, { Component } from 'react';
import data from './info.json';
import './App.css';
function handleRedir(url) {
  window.open(url, '_blank');
}
function email() {
  window.location.href = `mailto:joshsantillo@gmail.com`;
}
function facebook() {
  handleRedir('https://facebook.com/jdsantillo/')
}
function linkedin() {
  handleRedir('https://linkedin.com/in/santilloj/')
}
function github() {
  handleRedir('https://github.com/sohuja96/')
}

class App extends Component {
  redirect(url) {
    window.open(url, '_blank');
  }

constructor(props) {
  super(props)
  this.state = {
    work: data.work.map((w, i) => {
      return (<div key={i} className="industry" onClick={() => this.redirect(w.website)}>
        <h2>{w.role}</h2>
        <h4>{w.company}</h4>
        <h6>{w.timeframe}</h6>
      </div>
    )}),
    projects: data.projects.map((p, i) => {
      return (
        <div key={i} className="project">
          <h3>{p.title}</h3>
          <h4>{p.year}</h4>
          <p>{p.description}</p>
          <h6><a href="{p.link}">{p.linktext}</a></h6>
        </div>
      );
    }),
  };
}

  render() {
  console.log(this);
  return (
    <div className="App">
      <div className="underwear">
        <header className="App-header">
          <h1>{data.title}</h1>
          <div className="social">
            <button onClick={email}>
              <svg className="button" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .02c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.99 6.98l-6.99 5.666-6.991-5.666h13.981zm.01 10h-14v-8.505l7 5.673 7-5.672v8.504z"/></svg>
            </button>
            <button onClick={facebook}>
              <svg className="button" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/></svg>
            </button>
            <button onClick={github}>
              <svg className="button" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </button>
            <button onClick={linkedin}>
              <svg className="button" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/></svg>
            </button>
          </div>
        </header>
      </div>
      <br/>
      <div className="industrydiv"> 
        { this.state.work }
      </div>
      <div className="projectdiv">
        <div className="unused">
          <h1>Projects</h1>
          <br></br>
          <h2>Fun & Notable</h2>
        </div>
        {this.state.projects}
      <div className="mia">
        <a
          href="https://atlanta.net/"
          target="_blank"
          rel="noopener noreferrer">
          Made in Atlanta
        </a>
      </div>
      </div>
    </div>
    );
  }
}

export default App;
