import * as React from 'react';

import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import './style.scss'
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import ShareIcon from '@mui/icons-material/Share';

import Derazastyle4 from './derazaStyle/Derazastyle4';
import { Link } from 'react-router-dom';

const actions = [
  { icon: <Link to={'/myderaza'}><div  className='SpeedIcon'> <Derazastyle4 shishaColor={'rgb(141, 69, 2)'} derazaColor={'rgb(160, 64, 0)'} seerazmer={'block'} /></div></Link> , name: 'Deraza' },
  { icon: <Link to={'/cart'}><ShoppingCartIcon /></Link>, name: 'Cart' },
  { icon: <Link to={'/'}><HomeIcon /></Link>, name: 'Home' },
  { icon: <ShareIcon />, name: 'Share' },
];

export default function ControlledOpenSpeedDial() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
   
      <SpeedDial
        ariaLabel="SpeedDial controlled open example"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={handleClose}
          />
        ))}
      </SpeedDial>
   
  );
}