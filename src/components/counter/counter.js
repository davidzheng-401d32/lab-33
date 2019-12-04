import React from 'react';
import { CounterContext } from '../settings/site-context';

const styles = {
  container: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '40%',
  },
  counter: {
    display: 'inline-block',
    fontSize: '1em',
    border: '2px solid #444',
    borderRadius: '50%',
    lineHeight: '5em',
    textAlign: 'center',
    width: '5em',
  },
  button: {
    height: '3em',
  }
};

class Count extends React.Component{
  static contextType = CounterContext;

  render() {
    return (
      <>
        <div style={styles.container}>
          <button style={styles.button} onClick={() => this.context.decrement()}> - </button>
          <span style={styles.counter}>{this.context.count}</span>
          <button style={styles.button} onClick={() => this.context.increment()}> + </button>
        </div>
      </>
    );
  }
};

export default Count;
