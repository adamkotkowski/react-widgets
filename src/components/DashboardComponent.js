'use strict';

import React from 'react';

require('styles/dashboard.scss');

class DashboardComponent extends React.Component {
  handleDelete(i) {
        console.log("handleDelete ", this.props.widgets[i]);
        this.props.widgets.splice(i, 1);
        this.setState({widgets: this.props.widgets}); //update state
  }
  render() {
    var width = this.props.width;
  	var widgets = this.props.widgets.map(function(widget, i) {
  	    var scale = 1/width;
  	    var row = Math.floor(i/(width));
  	    var col = i%width;
  	    console.log('row:'+row+' col:'+col);
        //var left = (col)*100*scale-(50 - 100*scale/2);

        var left = (col+0.5) * scale * 100 - 50;
  	    var top = (row +0.5) * scale * 100 - 50;
  	    var divStyle = {
            "transform": "scale("+scale+","+scale+")",
            "left": left+"%",
            "top": top+"%"
        };

        var handleSettings = function(){
        console.log("handleSettings "+i);
          };
      return (
        <div className="widget-outer" style={divStyle}>
            <div className="widget-inner">
            <a href="#" onClick={handleSettings}> <i className="fa fa-cogs"></i></a>

                        <a href="#" onClick={this.handleDelete.bind(this, i)}> <i className="fa fa-trash"></i></a>
                                        {widget}
            </div>
        </div>
      );
    }, this);

    return (
      <div className="dashboard">
       {widgets}
      </div>
    );
  }
}

DashboardComponent.displayName = 'DashboardComponent';

// Uncomment properties you need
// DashboardComponent.propTypes = {};
 DashboardComponent.defaultProps = {
    "width":3

 };

export default DashboardComponent;
