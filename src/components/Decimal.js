import React from "react";
import { TextField } from "@material-ui/core";
import NumberFormat from "react-number-format";
import { Field } from "react-final-form";

const DecimalFormatter = ({ onChange, inputRef, ...rest }) => {
  return (
    <NumberFormat
      {...rest}
      getInputRef={inputRef}
      isNumericString
      thousandSeparator=","
      decimalScale="2"
      fixedDecimalScale={true}
      allowNegative={true}
      autoComplete="off"
      onChange={(value) => onChange(value)}
      onValueChange={({ formattedValue }) => onChange(formattedValue)}
    />
  );
};

const Decimal = ({
  name,
  caption,
  placeholder,
  visible = true,
  required = false,
  disabled = false,
  readOnly = false,
  fullWidth = true,
  textAlign = "right",
}) => {
  if (!visible) return null;

  return (
    <Field name={name}>
      {({ input, meta }) => (
        <TextField
          id={name}
          {...input}
          label={caption}
          disabled={disabled}
          required={required}
          placeholder={placeholder || caption}
          error={meta.touched && meta.error != null}
          helperText={meta.touched && meta.error != null ? meta.error : null}
          fullWidth={fullWidth}
          InputProps={{
            inputComponent: DecimalFormatter,
            readOnly
          }}
          inputProps={{ style: { textAlign } }}
        />
      )}
    </Field>
  );
};

export default Decimal;
