import React from 'react';
import shouldComponentUpdate from 'utils/PureRender';

class Footer extends React.Component {
  shouldComponentUpdate = shouldComponentUpdate;

  render() {
    return (
      <footer className="app__footer">
        <div className="app__container">
          Footer
        </div>
      </footer>
    );
  }
}

export default Footer;
