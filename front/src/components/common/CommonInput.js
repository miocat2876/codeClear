import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import React from 'react';
import CommonCheckbox from './CommonCheckbox';

const CommonInput = (props) => {

    const {type,children,data=[{label :'테스트',defaultChecked : true}]} = props;

    console.log(type,children,data);

    const [checked, setChecked] = React.useState([true, false]);

    let render = '';
    switch (type) {
        case 'checkbox':
            render = 
            <CommonCheckbox value2={'1'}/>
            break;
        default:
            break;
    }

    console.log(render);


    return (
        <>
            {render}
        </>
    );
};

export default CommonInput;