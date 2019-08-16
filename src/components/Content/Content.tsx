import React from 'react';

class Content extends React.Component<{name: string}> {
  render() {
    return (
      <div>Hello, {this.props.name}</div> 
    )
  }
}

export default Content;