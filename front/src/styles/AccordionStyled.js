import {styled} from "@mui/material/styles";
import {Accordion} from "@mui/material";

export const AccordionStyled = styled(Accordion)((props) => ({
    width : `${props.text}`,
	color: 'inherit',
    '&.Mui-expanded':{
        margin : '0'
    },
}));