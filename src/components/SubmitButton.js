import React from "react";
import MuiButton from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import { useForm, useFormState } from "react-final-form";

const useStyles = makeStyles((theme) => ({
  button: {
    textTransform: "none",
    margin: theme.spacing(0.5)
  }
}));

const SubmitButton = ({
  caption = "Submit",
  variant = "contained",
  color = "primary",
  size = "small",
  children,
  visible = true,
  disabled = false,
}) => {
  const classes = useStyles();

  if (!visible) return null;

  const form = useForm();
  const formState = useFormState();

  return (
    <MuiButton
      className={classes.button}
      type="submit"
      variant={variant}
      color={color}
      size={size}
      endIcon={formState.submitting && <CircularProgress size={18} color="secondary" />}
      disabled={disabled || formState.submitting}
    >
      {caption || children}
    </MuiButton>
  );
};

export default SubmitButton;
