import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../actions";
import { Link } from "react-router-dom";

class StreamList extends Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderAdmin = (item) => {
    if (item.userId === this.props.userId) {
      return (
        <div className="right floated content">
          <Link to={`streams/edit/${item.id}`} className="ui small blue button">
            Edit
          </Link>
          <Link
            to={`streams/delete/${item.id}`}
            className="ui small red button"
          >
            Delete
          </Link>
        </div>
      );
    }
  };

  renderCreateStreamButton = () => {
    if (this.props.isSignedIn) {
      return (
        <Link className="ui button violet medium " to="/streams/new">
          Create Stream
        </Link>
      );
    }
  };

  renderStreamList = (stream) => {
    const streamList = Object.keys(stream).map((key) => {
      const item = stream[key];
      return (
        <div className="item" key={key}>
          {this.renderAdmin(item)}
          <i className="large middle aligned icon camera" />

          <div className="content">
            <Link className="ui header" to={`/streams/${item.id}`}>
              {item.title}
            </Link>
            <div className="description">{item.description}</div>
          </div>
        </div>
      );
    });

    return streamList;
  };
  render() {
    return (
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <h2 style={{ margin: "0 1em 0 0" }}>Streams</h2>
          {this.renderCreateStreamButton()}
        </div>

        <div className="ui celled list">
          {this.renderStreamList(this.props.stream)}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
    userId: state.auth.id,
    stream: state.stream,
  };
};
export default connect(mapStateToProps, { fetchStreams })(StreamList);
