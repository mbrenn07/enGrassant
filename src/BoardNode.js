import { Box } from "@mui/material";
import { useState } from "react";
import EnumActionNames from "./EnumActionNames";

const BoardNode = (props) => {
    const { x, y, selector, initialEnvironment, piece } = props;

    const [environment, setEnviornment] = useState(initialEnvironment);
    const [onFire, setOnFire] = useState(false);

    const enviornmentChange = () => {
        if (piece) {
            return;
        }
        if (selector === EnumActionNames.WATER && environment !== "building" && environment !== EnumActionNames.HILLS) {
            setEnviornment(EnumActionNames.WATER);
        }
        if (selector === EnumActionNames.FIRE && environment !== EnumActionNames.WATER && environment !== EnumActionNames.HILLS) {
            setOnFire(true);
        }
        if (selector === EnumActionNames.SEEDS && environment !== EnumActionNames.WATER && environment !== EnumActionNames.FIRE && environment !== "building") {
            setEnviornment(EnumActionNames.SEEDS);
        }
        if (selector === EnumActionNames.ROADS && environment !== EnumActionNames.FIRE && environment !== "building") {
            setEnviornment(EnumActionNames.ROADS);
        }
        if (selector === EnumActionNames.HILLS && environment !== "building" && environment !== EnumActionNames.WATER) {
            setEnviornment(EnumActionNames.HILLS);
        }
        if (selector === EnumActionNames.ERASE) {
            setEnviornment(null);
        }
    }

    const generateBackgroundColor = () => {
        if (environment === EnumActionNames.WATER) {
            return "blue";
        }
        if (onFire) {
            return "red";
        }
        if (environment === "building") {
            return "grey";
        }
        if (environment === EnumActionNames.HILLS) {
            return "darkgreen";
        }
        if (environment === EnumActionNames.ROADS) {
            return "brown";
        }
        if (environment === EnumActionNames.SEEDS) {
            return "lightgreen";
        }
        return null;
    }

    const pieceIcon = piece ? piece.team === 0 ? piece.type.icons.white : piece.type.icons.black : null //NOSONAR

    return (
        <Box sx={{ height: "100%", width: "100%", backgroundColor: generateBackgroundColor() }} onClick={enviornmentChange} onMouseEnter={(e) => {
            if (e?.buttons === 0) {
                return;
            }
            enviornmentChange();
        }}>
            {piece && <Box sx={{ height: "100%", width: "100%", backgroundImage: "url(" + pieceIcon + ")", backgroundSize: "cover" }} />}
        </Box>
    );
};

export default BoardNode;