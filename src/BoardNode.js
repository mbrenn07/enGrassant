import { Box } from "@mui/material";
import { useState } from "react";
import EnumActionNames from "./EnumActionNames";

const BoardNode = (props) => {
    const { x, y, selector, startedFilled, setStartedFilled } = props;

    const [water, setWater] = useState(false);
    const [fire, setFire] = useState(false);
    const [seed, setSeed] = useState(false);
    const [road, setRoad] = useState(false);
    const [hill, setHill] = useState(false);
    const [pieces, setPieces] = useState([]);

    const enviornmentChange = (newState) => {
        if (selector === EnumActionNames.WATER) {
            setWater((prev) => newState ?? !prev);
        }
        if (selector === EnumActionNames.FIRE) {
            setFire((prev) => newState ?? !prev);
        }
        if (selector === EnumActionNames.SEEDS) {
            setSeed((prev) => newState ?? !prev);
        }
        if (selector === EnumActionNames.ROADS) {
            setRoad((prev) => newState ?? !prev);
        }
        if (selector === EnumActionNames.HILLS) {
            setHill((prev) => newState ?? !prev);
        }
    }

    return (
        <Box sx={{ height: "100%", width: "100%", backgroundColor: water ? "blue" : null }} onClick={enviornmentChange} onMouseEnter={(e) => {
            if (e?.buttons === 0) {
                return;
            }
            enviornmentChange(startedFilled);
        }} onMouseDown={() => {
            if ((selector === EnumActionNames.WATER && water) ||
                (selector === EnumActionNames.FIRE && fire) ||
                (selector === EnumActionNames.SEEDS && seed) ||
                (selector === EnumActionNames.ROADS && road) ||
                (selector === EnumActionNames.HILLS && hill)) {
                setStartedFilled(false);
            } else {
                setStartedFilled(true);
            }
        }}>
            {console.log("rerendered")}
        </Box>
    );
};

export default BoardNode;