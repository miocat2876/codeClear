import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import React from 'react';

const CommonCheckbox = ({data=[{label :'테스트',checked : true}]},value2) => {

    const [state, setState] = React.useState(...data.map((item)=> {return {[item.label] : item.checked?? false}}));
    console.log(value2)
    const onChangeChecked = (event) => {
        const {name, checked} = event.target;
        setState({...state,[name]:checked});
        value2(state);
    }
   //테스트1
    return (
        <div>
            <FormGroup>
                {
                    data.map((item,index)=>{
                        return <FormControlLabel key={index} control={<Checkbox checked = {state[item.label]} onChange={onChangeChecked} name={item.label} />} label={item.label}/>
                    })
                }
            </FormGroup>
        </div>
    );
};

export default CommonCheckbox;