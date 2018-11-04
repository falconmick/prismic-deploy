import React, { useState } from 'react';
import { ApplicationBar } from "./ApplicationBar";
import {ApplicationDrawer} from "./ApplicationDrawer";

export const Layout: React.SFC = (props) => {
    const { children } = props;

    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <>
            <ApplicationBar handleDrawerToggle={handleDrawerToggle} />
            <ApplicationDrawer handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen} />
            { children }
        </>
    )
};
