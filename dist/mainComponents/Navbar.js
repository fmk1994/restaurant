import { useState, useCallback } from 'react';
import { withStyles } from '@mui/styles';
import styles from '../styles/NavbarStyles';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Logoicon from '../pictures/ikona.png';
import Popper from '@mui/material/Popover';
import OrderDetails from './OrderDetails';
import { animateScroll as scroll } from 'react-scroll';
const pages = ['Menu', 'About Us', 'Gallery', 'Comments', 'Contact'];
function Navbar(props) {
    const { classes } = props;
    const handleAvataronClick = useCallback(() => {
        scroll.scrollToTop();
    }, []);
    const [anchorElNav, setAnchorElNav] = useState(null);
    const handleOpenNavMenu = useCallback((event) => {
        setAnchorElNav(event.currentTarget);
    }, []);
    const handleCloseNavMenu = useCallback(() => {
        setAnchorElNav(null);
    }, []);
    return className = { classes, : .AppBar };
    position = 'fixed' >
        maxWidth;
    'lg' >
        className;
    {
        classes.toolbar;
    }
     >
        className;
    {
        classes.Avatar;
    }
    onClick = { handleAvataronClick };
    src = { Logoicon };
    sx = {};
    {
        mr: 7, display;
        {
            xs: 'none', lg;
            'flex';
        }
    }
}
/>
    < Box;
sx = {};
{
    flexGrow: 1,
        display;
    {
        xs: 'flex', lg;
        'none';
    }
}
    >
        size;
'large';
aria - label;
'account of current user';
aria - controls;
'menu-appbar';
aria - haspopup;
'true';
onClick = { handleOpenNavMenu };
color = 'inherit'
    >
        className;
{
    classes.MenuIcon;
}
/>
    < /IconButton>
    < Popper;
className = 'popover';
id = 'menu-appbar';
anchorEl = { anchorElNav };
anchorOrigin = {};
{
    vertical: 'bottom',
        horizontal;
    'left',
    ;
}
keepMounted;
transformOrigin = {};
{
    vertical: 'top',
        horizontal;
    'left',
    ;
}
open = {};
onClose = { handleCloseNavMenu };
sx = {};
{
    display: {
        xs: 'block', lg;
        'none';
    }
}
    >
        { pages, : .map((page) => spy = { true:  }, smooth = { true:  }, offset = { 0:  }, duration = { 500:  }, activeClass = 'active', className = { classes, : .Link }, underline = 'none', to = {} `${page.toLowerCase().replace(' ', '-')}`) };
key = { page, : .toLowerCase().replace('ó', 'o').replace(' ', '-') }
    >
        className;
{
    classes.MenuItems;
}
key = { page };
onClick = { handleCloseNavMenu }
    >
        { page, : .toUpperCase() }
    < /MenuItem>
    < /Link>;
/Popper>
    < /Box>
    < Avatar;
className = { classes, : .Avatar };
onClick = { handleAvataronClick };
src = { Logoicon };
sx = {};
{
    flexGrow: 0, display;
    {
        xs: 'flex', lg;
        'none';
    }
}
/>
    < Box;
sx = {};
{
    flexGrow: 1,
        display;
    {
        xs: 'none', lg;
        'flex';
    }
}
    >
        { pages, : .map((page) => spy = { true:  }, smooth = { true:  }, offset = { 0:  }, duration = { 500:  }, activeClass = 'active', className = { classes, : .Link }, underline = 'none', to = {} `${page.toLowerCase().replace(' ', '-')}`) };
key = { page, : .toLowerCase().replace(' ', '-') }
    >
        className;
{
    classes.menuButtons;
}
onClick = { handleCloseNavMenu };
sx = {};
{
    my: 2, display;
    'block';
}
    >
        { page }
    < /Button>
    < /Link>;
/Box>
    < OrderDetails /  >
    /Toolbar>
    < /Container>
    < /AppBar>
    < /Fragment>;
;
export default withStyles(styles)(Navbar);
