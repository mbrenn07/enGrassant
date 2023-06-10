import whitePawn from "./pieces/Chess_plt45.svg";
import blackPawn from "./pieces/Chess_pdt45.svg";
import whiteRook from "./pieces/Chess_rlt45.svg";
import blackRook from "./pieces/Chess_rdt45.svg";
import whiteKnight from "./pieces/Chess_nlt45.svg";
import blackKnight from "./pieces/Chess_ndt45.svg";
import whiteBishop from "./pieces/Chess_blt45.svg";
import blackBishop from "./pieces/Chess_bdt45.svg";
import whiteQueen from "./pieces/Chess_qlt45.svg";
import blackQueen from "./pieces/Chess_qdt45.svg";

const EnumPieces = {
    //PIECE_TYPE: {moves: {x: number, y: number, repeat?: boolean}, icons: {white: JSX.Element, black: JSX.Element}, atk: number, hp: number}
    PAWN: { moves: [{x: 0, y: 1}], icons: {white: whitePawn, black: blackPawn}, atk: 5, hp: 1},
    ROOK: { moves: [{x: 1, y: 0, repeat: true}, {x: 0, y: 1, repeat: true}, {x: 0, y: -1, repeat: true}, {x: -1, y: 0, repeat: true}], icons: {white: whiteRook, black: blackRook}, atk: 1, hp: 6},
    KNIGHT: { moves: [{x: 2, y: -1}, {x: 2, y: 1}, {x: -2, y: 1}, {x: -2, y: -1}, {x: 1, y: 2}, {x: 1, y: -2}, {x: -1, y: 2}, {x: -1, y: -2}], icons: {white: whiteKnight, black: blackKnight}, atk: 2, hp: 2},
    BISHOP: { moves: [{x: 1, y: 1, repeat: true}, {x: -1, y: -1, repeat: true}, {x: -1, y: 1, repeat: true}, {x: 1, y: -1, repeat: true}], icons: {white: whiteBishop, black: blackBishop}, atk: 3, hp: 3},
    QUEEN: { moves: [{x: 1, y: 1, repeat: true}, {x: -1, y: -1, repeat: true}, {x: -1, y: 1, repeat: true}, {x: 1, y: -1, repeat: true}, [{x: 1, y: 0, repeat: true}, {x: 0, y: 1, repeat: true}, {x: 0, y: -1, repeat: true}, {x: -1, y: 0, repeat: true}]], icons: {white: whiteQueen, black: blackQueen}, atk: 4, hp: 9},
}

export default EnumPieces;