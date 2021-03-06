// @flow
import * as React from 'react';

type Props = {
  children: React.Node
};

export default class App extends React.Component<Props> {
  props: Props;

  render() {
    return (
      <div style={{ width: '100%', height: '100%' }}>
        {this.props.children}
      </div>
    );
  }
}
