import React from 'react';
import { TextField } from '@mui/material';

interface Props {
  label: string;
  readOnly: boolean;
  placeholder?: string;
  input?: string;
  output?: string;
  updateInput?: (input: string) => void;
  name?: string;
}

const  TextInput = (props: Props) => {
    // const [ input, setInput ] = useState<string>('');
    const { label, name, readOnly, updateInput, input, output } = props;

    const handleInput = (e:any) => {
      e.preventDefault(); 
      if(updateInput) {
        updateInput(e.target.value)
      }
    }

    return (
        <TextField
        id="outlined-multiline-static"
        label={label}
        multiline
        fullWidth
        rows={4}
        InputProps={{
          readOnly: readOnly,
        }}
        name={name}
        margin="normal"
        placeholder="type something here (. as dot, - as dash. empty space for space)"
        value={!readOnly ? input: output}
        onChange={handleInput}
      />
    )
}

export default TextInput;