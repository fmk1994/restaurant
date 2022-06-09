import { useState, useCallback } from 'react';
import { withStyles } from '@mui/styles';
import { Divider } from '@mui/material';
import styles from '../styles/GalleryStyles';
import galleryItemData from '../data/galleryItemData';
import useToggleState from '../hooks/useToggleState';
function Gallery(props) {
    const { classes } = props;
    const [photoIndex, setIndex] = useState();
    const [toggleActive, setToggleActive] = useToggleState();
    const handleClick = useCallback((e, index) => {
        if (e.target.className.includes('active')) {
            setToggleActive(!toggleActive);
            setIndex(index);
            console.dir(e.target);
        }
        else {
            setIndex(index);
            console.dir(e.target);
        }
    }, []);
    return className = { classes, : .gallery };
    id = 'gallery' >
        className;
    {
        classes.title;
    }
     >
        variant;
    'h1';
    align = 'center';
    sx = {};
    {
        letterSpacing: '0.5rem',
            fontSize;
        {
            xs: '3rem', md;
            '4rem';
        }
        display: {
            xl: 'none';
        }
    }
}
    >
        GALLERY
    < /Typography>
    < Divider;
sx = {};
{
    width: '50vw',
        bgcolor;
    'brown',
        marginBottom;
    {
        xs: '5px', sm;
        '20px';
    }
    display: {
        xl: 'none';
    }
}
variant = 'middle'
    /  >
    /div>;
{
    galleryItemData.map((item, index) => id = { item, : .img }, className = {} `${classes.panel}
							${(photoIndex === index && classes.active) ||
        (toggleActive && classes.active)}`);
}
style = {};
{
    backgroundImage: `url(${item.img})`;
}
alt = { item, : .title };
onClick = {}(e);
handleClick(e, index);
key = { item, : .img }
    > /div>;
/div>;
;
export default withStyles(styles)(Gallery);
