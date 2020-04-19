import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

class StreamForm extends Component {
  renderError({ touched, error }) {
    if (touched && error) {
      return error;
    }
  }
  renderInput = ({ input, label, meta }) => {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} />
        <div className="ui error message">{this.renderError(meta)}</div>
      </div>
    );
  };

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };
  render() {
    return (
      <form
        className="ui form error"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field name="title" component={this.renderInput} label="Enter title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter description"
        />
        <button className="ui button">Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "you must enter a title";
  }
  if (!formValues.description) {
    errors.description = "you must enter a description";
  }
  return errors;
};

export default reduxForm({
  form: "StreamForm",
  validate,
})(StreamForm);
