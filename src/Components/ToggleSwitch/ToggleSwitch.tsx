import { Switch } from '@mui/material';

type Props = {
    switchLabel1: string;
    switchLabel2: string;
    checked: boolean;
    onChange: ()=> void;
    ariaLabel?: string;
}


function ToggleSwitch(props: Props) {

  const {switchLabel1, switchLabel2, checked, onChange, ariaLabel } = props;
  const label = { inputProps: { 'aria-label': ariaLabel ? ariaLabel : 'toggle switch' } };

  return (
    <div>
        <span>{switchLabel1}</span>
        <Switch {...label}
        checked={checked} 
        onChange={onChange} />
        <span>{switchLabel2}</span>
    </div>
  );
}

export default ToggleSwitch;
