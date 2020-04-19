import React, { Component } from "react";
import Modal from "../components/Modal";
import history from "../history";
import { connect } from "react-redux";
import { fetchStream, deleteStream } from "../actions";
import { Link } from "react-router-dom";

class StreamDelete extends Component {
  componentDidMount() {
    const streamId = this.props.match.params.id;
    this.props.fetchStream(streamId);
  }

  onDismiss = () => {
    history.push("/");
  };

  onDelete = () => {
    this.props.deleteStream(this.props.stream.id);
  };

  actions = (
    <React.Fragment>
      <button className="ui button red" onClick={this.onDelete}>
        Delete
      </button>
      <Link className="ui button " to="/">
        Cancel
      </Link>
    </React.Fragment>
  );

  renderTitle = () => {
    if (this.props.stream) {
      return (
        <div
          style={{
            display: "flex",
            float: "flex-start",
          }}
        >
          Delete
          <div style={{ color: "red", marginLeft: ".5rem" }}>
            {this.props.stream.title}
          </div>
        </div>
      );
    } else {
      return <div>Delete</div>;
    }
  };
  render() {
    return (
      <Modal
        title={this.renderTitle()}
        content={`Are you sure you want to delete this stream?`}
        actions={this.actions}
        onDismiss={this.onDismiss}
      />
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    stream: state.stream[props.match.params.id],
  };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
