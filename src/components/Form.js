import React from "react";
import { Form as RFForm } from "react-final-form";
import createDecorator from "final-form-focus";

const focusOnError = createDecorator();

const Form = ({
  initialEntity = {},
  onSubmit = () => {},
  validate,
  children,
  decorators = [focusOnError],
  render
}) => {
  return (
    <RFForm
      onSubmit={onSubmit}
      initialValues={initialEntity}
      validate={validate}
      decorators={decorators}
      render={({ handleSubmit, form, ...rest }) => {
        let items = null;
        if (render) {
          if (typeof render === "function") items = render(rest);
          else items = render;
        } else if (typeof children === "function") {
          items = children(rest);
        } else {
          items = children;
        }
        return <form onSubmit={handleSubmit}>{items}</form>;
      }}
    />
  );
};

export default Form;
