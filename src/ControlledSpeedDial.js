import * as React from 'react';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';

export default function ControlledSpeedDial(props) {
    const { actions } = props;

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = (e, eventType, actionFunction) => {
        if (actionFunction) {
            actionFunction();
        }
        setOpen(false);
    };

    return (
        <SpeedDial
            ariaLabel="SpeedDial"
            sx={{ position: 'absolute', bottom: 16, right: 16 }}
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
                    onClick={(e, eventType) => handleClose(e, eventType, action.actionFunction)}
                />
            ))}
        </SpeedDial>

    );
}