import React, {useState} from 'react';
import { TextField } from '@mui/material';

const  TextInput = () => {
    const [input, setInput] = useState<string>('');

    return (
        <TextField
        id="outlined-multiline-static"
        label="Multiline"
        multiline
        fullWidth
        rows={4}
        defaultValue="type something here (. as dot, - as dash. empty space for space)"
      />
    )
}

export default TextInput;