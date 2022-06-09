import React, {useState} from 'react';
import { TextField } from '@mui/material';

interface Props {
  label: string;
  readOnly: boolean;
  placeholder?: string;
  // output?: string;
}

const  TextInput = (props: Props) => {
    const [input, setInput] = useState<string>('');
    const {label, readOnly} = props;

    const output = 'test output'

    const handleTextInput = (e:any) => {
      setInput(e.target.value)
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
        margin="normal"
        placeholder="type something here (. as dot, - as dash. empty space for space)"
        value={!readOnly ? input: output}
        onChange={handleTextInput}
      />
    )
}

export default TextInput;