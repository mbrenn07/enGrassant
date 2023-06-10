import { Box, Unstable_Grid2 as Grid, SpeedDial, SpeedDialAction } from "@mui/material";
import grassyBackground from "./ffflux.svg";
import lightBackground from "./lightBackground.svg";
import BoardNode from "./BoardNode";
import { useMemo, useState } from "react";
import ControlledSpeedDial from "./ControlledSpeedDial";
import EnumActionNames from "./EnumActionNames";
import { LocalFireDepartment, Water, AddRoad, Grass, Terrain, Delete } from '@mui/icons-material/';
import Cursor from "./Cursor";


const Board = () => {
    const aspectRatio = 16 / 9;
    const rows = 30;
    const columns = Math.round(rows * aspectRatio);

    const [selector, setSelector] = useState("");

    const actions = [
        {name: EnumActionNames.WATER, icon: <Water/>, actionFunction: () => setSelector((prev) => {
            if (prev === EnumActionNames.WATER) {
                return "";
            }
            return EnumActionNames.WATER;
        })},
        {name: EnumActionNames.FIRE, icon: <LocalFireDepartment/>, actionFunction: () => setSelector((prev) => {
            if (prev === EnumActionNames.FIRE) {
                return "";
            }
            return EnumActionNames.FIRE;
        })},
        {name: EnumActionNames.SEEDS, icon: <Grass/>, actionFunction: () => setSelector((prev) => {
            if (prev === EnumActionNames.SEEDS) {
                return "";
            }
            return EnumActionNames.SEEDS;
        })},
        {name: EnumActionNames.ROADS, icon: <AddRoad/>, actionFunction: () => setSelector((prev) => {
            if (prev === EnumActionNames.ROADS) {
                return "";
            }
            return EnumActionNames.ROADS;
        })},
        {name: EnumActionNames.HILLS, icon: <Terrain/>, actionFunction: () => setSelector((prev) => {
            if (prev === EnumActionNames.HILLS) {
                return "";
            }
            return EnumActionNames.HILLS;
        })},
        {name: EnumActionNames.ERASE, icon: <Delete/>, actionFunction: () => setSelector((prev) => {
            if (prev === EnumActionNames.ERASE) {
                return "";
            }
            return EnumActionNames.ERASE;
        })},
    ]

    const gameBoard = useMemo(() => {
        const tempBoard = [];
        for (let i = 0; i < columns; i++) {
            let tempRow = [];
            for (let j = 0; j < rows; j++) {
                tempRow.push(<BoardNode x={i} y={j} selector={selector}> </BoardNode>);
            }
            tempBoard.push(tempRow);
        }
        return tempBoard;
    }, [selector]);

    return (
        <Box sx={{ backgroundImage: "url(" + grassyBackground + ")", height: "100vh", width: "100vw", userSelect:"none" }}>
            <Cursor/>
            <Box sx={{ aspectRatio: "" + aspectRatio, maxHeight: "calc(100vh - 10px)", maxWidth: "calc(100vw - 10px)", border: "5px solid black" }}>
                <Grid sx={{ height: "100%", width: "100%" }} container columns={30} direction="row" wrap="nowrap">
                    {gameBoard.map((row, i) => {
                        return <Grid sx={{ height: "100%", width: "100%" }} key={i} xs={1} container item columns={30} direction="column" wrap="nowrap">
                            {row.map((column, j) => (
                                <Grid sx={{ height: "100%", width: "100%", minHeight: 0 }} key={j} item xs={1}>
                                    <Box sx={(i + j) % 2 ? { height: "100%", width: "100%", overflow: "clip" } :
                                        { height: "100%", width: "100%", overflow: "clip", backgroundImage: "url(" + lightBackground + ")" }}>
                                        {column}
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    })}
                </Grid>
            </Box>
            <ControlledSpeedDial actions={actions}/>
        </Box>
    );
}

export default Board;