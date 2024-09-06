import React, {useContext} from 'react'
import { Box, Typography } from '@mui/material';
import BodyPart from './BodyPart'; 
import scroller from 'react-horizontal-scrolling-menu';
import RightArrowIcon from '../../assets/icons/right-arrow.png';
import LeftArrowIcon from '../../assets/icons/left-arrow.png';


/*const LeftArrow = () => {
  const { scrollPrev } = useContext(scroller.VisibilityContext);
return (

  <Typography onClick={() => scrollPrev()} className="right-arrow">
  <img src={LeftArrowIcon} alt="right-arrow" />
</Typography>
);
};

const RightArrow = () => {
const { scrollNext } = useContext(scroller.VisibilityContext);

return (
<Typography onClick={() => scrollNext()} className="left-arrow">
  <img src={RightArrowIcon} alt="right-arrow" />
</Typography>
);
};*/

const HorizontalScrollbar = ({data, bodyPart, setBodyPart}) => {

    return(
      <div/*LeftArrow={LeftArrow} RightArrow={RightArrow}*/>
      {data.map((item) => (
        <Box
        key={item.id || item}
        itemID={item.id || item} //This horizontal scroll bar to be implemented to allow users to click on a box on the horizontal bar if they don't want to search and exercises will display
        title={item.id || item}
        m= "0 40px"
        >
            <BodyPart item={item} 
            bodyPart={bodyPart} 
            setBodyPart={setBodyPart} />
        </Box>)
        )}
        </div>
    
  )
}

export default HorizontalScrollbar
