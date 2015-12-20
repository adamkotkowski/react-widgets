'use strict';

import React from 'react';

class TextWidgetComponent extends React.Component {
  render() {
    return (
      <div>
       {this.props.text}
      </div>
    );
  }
}

TextWidgetComponent.displayName = 'TextWidgetComponent';

// Uncomment properties you need
// DashboardComponent.propTypes = {};
 TextWidgetComponent.defaultProps = {
    "text":"Hello world!"
 };

export default TextWidgetComponent;
