import { Box } from "@mui/material";
import { useState } from "react";
import EnumActionNames from "./EnumActionNames";

const BoardNode = (props) => {
    const { x, y, selector} = props;

    const [water, setWater] = useState(false);
    const [fire, setFire] = useState(false);
    const [seed, setSeed] = useState(false);
    const [road, setRoad] = useState(false);
    const [hill, setHill] = useState(false);
    const [building, setBuilding] = useState(false);
    const [pieces, setPieces] = useState([]);

    const enviornmentChange = () => {
        if (selector === EnumActionNames.WATER && !building && !hill) {
            setWater(true);
        }
        if (selector === EnumActionNames.FIRE && !water && !road && !hill && !building) {
            setFire(true);
        }
        if (selector === EnumActionNames.SEEDS && !water && !fire && !building) {
            setSeed(true);
        }
        if (selector === EnumActionNames.ROADS && !fire && !building) {
            setRoad(true);
        }
        if (selector === EnumActionNames.HILLS && !building && !water) {
            setHill(true);
        }
        if (selector === EnumActionNames.ERASE) {
            setWater(false);
            setFire(false);
            setSeed(false);
            setRoad(false);
            setHill(false);
        }
    }

    const generateBackgroundColor = () => {
        if (water) {
            return "blue";
        }
        if (fire) {
            return "red";
        }
        if (building) {
            return "grey";
        }
        if (hill) {
            return "darkgreen";
        }
        if (road) {
            return "brown";
        }
        if (seed) {
            return "lightgreen";
        }
        return null;
    }

    return (
        <Box sx={{ height: "100%", width: "100%", backgroundColor: generateBackgroundColor() }} onClick={enviornmentChange} onMouseEnter={(e) => {
            if (e?.buttons === 0) {
                return;
            }
            enviornmentChange();
        }}>
        </Box>
    );
};

export default BoardNode;