import { h, Component } from "preact";
import { Router } from "preact-router";
import "bulma/css/bulma.min.css";

// Code-splitting is automated for routes
import PetsGrid from "../routes/PetsGrid";

export default class App extends Component {
  /** Gets fired when the route changes.
   *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
   *	@param {string} event.url	The newly routed URL
   */
  handleRoute = e => {
    this.currentUrl = e.url;
  };

  render() {
    return (
      <div id="app">
        <Router onChange={this.handleRoute}>
          <PetsGrid path="/" />
        </Router>
      </div>
    );
  }
}
