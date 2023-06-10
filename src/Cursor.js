import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Circle } from "@mui/icons-material";

//TODO: this is stupid, just make a custom cursor
export default function Cursor() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const logMousePosition = (e) => {
        setX(e.clientX);
        setY(e.clientY);
    };

    useEffect(() => {
        return () => {
            document.addEventListener("mousemove", logMousePosition)
        };
    }, []);

    return (
        <Box sx={{position: "absolute", left: x, top: y, transform: "translate(-40%, -25%)"}}>
            <Circle fontSize="large"/>
        </Box>
    );
}