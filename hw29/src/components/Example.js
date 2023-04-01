import React from 'react';

class Example extends React.Component {
  render() {
    return (
      <>
        <div className='example'>
          <h3 className='example-text'>{this.props.country}</h3>
        </div>
      </>
    );
  }
}

export default Example;
