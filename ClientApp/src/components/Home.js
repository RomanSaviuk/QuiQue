import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <h1>Hello, world!</h1>
            <p>Welcome to your new single-page application, built with:</p>
            <form action="https://google.com/search">
                <input type="text" name="q"/>
                    <input type="submit" value="Find"/>
</form>
        </div>
    );
  }
}
