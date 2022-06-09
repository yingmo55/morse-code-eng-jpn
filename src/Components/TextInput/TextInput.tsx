import React, { useState, useEffect } from 'react';
import { TextField } from '@mui/material';

interface Props {
  label: string;
  readOnly: boolean;
  placeholder?: string;
  output?: string;
  updateInput?: (input: string) => void;
}

const  TextInput = (props: Props) => {
    const [ input, setInput ] = useState<string>('');
    const { label, readOnly, updateInput, output } = props;

    const handleTextInput = (e:any) => {
      setInput(e.target.value)
    }

    useEffect(()=> {
      if (updateInput){
        updateInput(input)
      }
    }, [input, updateInput])

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