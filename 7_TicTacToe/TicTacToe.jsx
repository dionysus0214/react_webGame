import React, {useState, useReducer} from 'react';
import Table from './Table';

const initialState = {
  winner: '',
  turn: 'O',
  tableData: [['', '', ''], ['', '', ''], ['', '', '']],
};

const reducer = (state, action) => {

};

const TicTacToe = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { tableData, turn, winner, recentCell } = state;

  return (
    <>
      <Table />
      {winner && <div>{winner}님이 이겼습니다!</div>}
    </>
  );
};

export default TicTacToe;