import { useState, useCallback } from 'react';
import { withStyles } from '@mui/styles';
import styles from './styles/CommentFormStyles';
import { Button } from '@mui/material';
import { Input } from '@mui/material';
function CommentForm(props) {
    const { classes, handleSubmit, submitLabel, hasCancelButton = false, initialText = '', handleCancel, } = props;
    const [text, setText] = useState(initialText);
    const [username, setUsername] = useState('');
    const isSubmitButtonDisabled = text.length === 0;
    const onSubmit = useCallback((event) => {
        event.preventDefault();
        handleSubmit(text, username);
        setText('');
        setUsername('');
    }, [text, username]);
    return className = { classes, : .form };
    onSubmit = { onSubmit } >
        {};
    hasCancelButton && className;
    {
        classes.nameInput;
    }
    margin = 'normal';
    required >
        htmlFor;
    'name' > Enter;
    your;
    name < /InputLabel>
        < Input;
    inputProps = {};
    {
        maxLength: 11;
    }
}
value = { username };
onChange = {}(e);
setUsername(e.target.value);
/>
    < /FormControl>;
label;
'Type here...';
className = { classes, : .textField };
multiline;
inputProps = {};
{
    maxLength: 200;
}
rows = { 4:  };
value = { text };
onChange = {}(e);
setText(e.target.value);
/>
    < Button;
className = { classes, : .formButton };
type = 'submit';
disabled = { isSubmitButtonDisabled }
    >
        { submitLabel }
    < /Button>;
{
    hasCancelButton && type;
    'submit';
    className = { classes, : .formButton };
    onClick = { handleCancel }
        >
            Cancel
        < /Button>;
}
/form>
    < /Box>;
;
export default withStyles(styles)(CommentForm);
