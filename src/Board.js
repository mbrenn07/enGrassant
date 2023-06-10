import { Box, Unstable_Grid2 as Grid } from "@mui/material";
import grassyBackground from "./ffflux.svg";
import lightBackground from "./lightBackground.svg";
import BoardNode from "./BoardNode";
import { useMemo, useState } from "react";
import ControlledSpeedDial from "./ControlledSpeedDial";
import EnumActionNames from "./EnumActionNames";
import { LocalFireDepartment, Water, AddRoad, Grass, Terrain, Delete } from '@mui/icons-material/';
import blueCursor from "./cursors/blueCursor.svg";
import brownCursor from "./cursors/brownCursor.svg";
import darkGreenCursor from "./cursors/darkGreenCursor.svg";
import lightGreenCursor from "./cursors/lightGreenCursor.svg";
import redCursor from "./cursors/redCursor.svg";
import eraserCursor from "./cursors/eraserCursor.svg";
import EnumPieces from "./EnumPieces";


const Board = () => {
    const aspectRatio = 16 / 9;
    const rows = 30;
    const columns = Math.round(rows * aspectRatio);

    const [selector, setSelector] = useState("");

    const actions = [
        {
            name: EnumActionNames.WATER, icon: <Water htmlColor="blue" />, actionFunction: () => setSelector((prev) => {
                if (prev === EnumActionNames.WATER) {
                    return "";
                }
                return EnumActionNames.WATER;
            })
        },
        {
            name: EnumActionNames.FIRE, icon: <LocalFireDepartment htmlColor="red" />, actionFunction: () => setSelector((prev) => {
                if (prev === EnumActionNames.FIRE) {
                    return "";
                }
                return EnumActionNames.FIRE;
            })
        },
        {
            name: EnumActionNames.SEEDS, icon: <Grass htmlColor="lightgreen" />, actionFunction: () => setSelector((prev) => {
                if (prev === EnumActionNames.SEEDS) {
                    return "";
                }
                return EnumActionNames.SEEDS;
            })
        },
        {
            name: EnumActionNames.ROADS, icon: <AddRoad htmlColor="brown" />, actionFunction: () => setSelector((prev) => {
                if (prev === EnumActionNames.ROADS) {
                    return "";
                }
                return EnumActionNames.ROADS;
            })
        },
        {
            name: EnumActionNames.HILLS, icon: <Terrain htmlColor="darkgreen" />, actionFunction: () => setSelector((prev) => {
                if (prev === EnumActionNames.HILLS) {
                    return "";
                }
                return EnumActionNames.HILLS;
            })
        },
        {
            name: EnumActionNames.ERASE, icon: <Delete htmlColor="black" />, actionFunction: () => setSelector((prev) => {
                if (prev === EnumActionNames.ERASE) {
                    return "";
                }
                return EnumActionNames.ERASE;
            })
        },
    ]

    const gameBoard = useMemo(() => {
        const tempBoard = [];
        for (let i = 0; i < columns; i++) {
            let tempRow = [];
            for (let j = 0; j < rows; j++) {
                let initialEnvironment = null;
                if (j === (rows / 2) - 2 || j === (rows / 2) - 1) {
                    initialEnvironment = EnumActionNames.WATER;
                    if (i === Math.round(columns / 2) || i === Math.round(columns / 2) - 1) {
                        initialEnvironment = EnumActionNames.ROADS;
                    }
                }
                tempRow.push({ x: i, y: j, initialEnvironment: initialEnvironment });
            }
            tempBoard.push(tempRow);
        }
        return tempBoard;
    }, []);

    //piece: {x: number, y:number, type:string, team:number}
    const pieces = [
        { x: 1, y: 1, type: EnumPieces.PAWN, team: 1 },
        { x: 2, y: 20, type: EnumPieces.ROOK, team: 0 },
        { x: 15, y: 3, type: EnumPieces.BISHOP, team: 1 },
        { x: 20, y: 23, type: EnumPieces.QUEEN, team: 0 },
        { x: 6, y: 6, type: EnumPieces.KNIGHT, team: 1 }
    ];

    let cursor = "auto";
    switch (selector) {
        case EnumActionNames.WATER:
            cursor = "url(" + blueCursor + "), auto";
            break;
        case EnumActionNames.FIRE:
            cursor = "url(" + redCursor + "), auto";
            break;
        case EnumActionNames.SEEDS:
            cursor = "url(" + lightGreenCursor + "), auto";
            break;
        case EnumActionNames.HILLS:
            cursor = "url(" + darkGreenCursor + "), auto";
            break;
        case EnumActionNames.ROADS:
            cursor = "url(" + brownCursor + "), auto";
            break;
        case EnumActionNames.ERASE:
            cursor = "url(" + eraserCursor + "), auto";
            break;
    }


    return (
        <Box sx={{ backgroundImage: "url(" + grassyBackground + ")", height: "100vh", width: "100vw", userSelect: "none", cursor: cursor }}>
            <Box sx={{ aspectRatio: "" + aspectRatio, maxHeight: "calc(100vh - 10px)", maxWidth: "calc(100vw - 10px)", border: "5px solid black" }}>
                <Grid sx={{ height: "100%", width: "100%" }} container columns={columns} direction="row" wrap="nowrap">
                    {gameBoard.map((row, i) => {
                        return <Grid sx={{ height: "100%", width: "100%" }} key={i} xs={1} container item columns={rows} direction="column" wrap="nowrap">
                            {row.map((column, j) => (
                                <Grid sx={{ height: "100%", width: "100%", minHeight: 0 }} key={j} item xs={1}>
                                    <Box sx={(i + j) % 2 ? { height: "100%", width: "100%", overflow: "clip" } :
                                        { height: "100%", width: "100%", overflow: "clip", backgroundImage: "url(" + lightBackground + ")" }}>
                                        <BoardNode {...column} selector={selector} piece={pieces.find((piece) => piece.x === i && piece.y === j)} />
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    })}
                </Grid>
            </Box>
            <ControlledSpeedDial actions={actions} />
        </Box>
    );
}

export default Board;