import React, { Component } from "react";
import "./App.css";
import Form from "./components/form.js";
import "bootstrap/dist/css/bootstrap.min.css";
class PageHome extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <Form />
        </div>
      </React.Fragment>
    );
  }
}
export default PageHome;
