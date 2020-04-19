import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStream } from "../actions";

class StreamShow extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  render() {
    if (!this.props.stream) {
      return <div>loading...</div>;
    }
    console.log(this.props.stream);
    const { stream } = this.props;

    return (
      <div>
        <h1>{stream.title}</h1>
        <h3>{stream.description}</h3>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    stream: state.stream[props.match.params.id],
  };
};
export default connect(mapStateToProps, { fetchStream })(StreamShow);
