import React from 'react';
import shouldComponentUpdate from 'utils/PureRender';

export default class Header extends React.Component {
  static propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    location: React.PropTypes.object.isRequired
  };

  shouldComponentUpdate = shouldComponentUpdate;

  render() {
    return (
      <header className="app__header">
        <div className="app__container">
          <h1>React Bot</h1>
        </div>
        <a href="https://github.com/gilbarbara/react-bot" className="github-ribbon">
          <img src={require('../../media/github-fork.png')} alt="Github Fork" />
        </a>
      </header>
    );
  }
}
