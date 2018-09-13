import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';

export const renderTextField = ({
  input,
  label,
  meta: { touched, error, invalid },
  formControlProps = {},
  ...custom
}) => {
  return (
    <FormControl {...formControlProps} className={formControlProps.className}>
      <TextField
        placeholder={label}
        error={touched && invalid}
        label={label}
        helperText={touched && error}
        {...input}
        {...custom}
      />
    </FormControl>
  );
};

export const renderInputFile = ({
  input,
  label,
  meta: { touched, error, invalid },
  fileRef,
  onChangeFile,
  ...custom
}) => {
  return (
    <input
      type="file"
      {...input}
      ref={fileRef}
      onChange={onChangeFile}
      {...custom}
    />
  );
};
