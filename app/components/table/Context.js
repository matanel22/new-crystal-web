import React, { createContext, useContext } from 'react';

export const CellContext = createContext<(undefined);

export const useCellContext = () => {
  const context = useContext(CellContext);
  if (context === undefined) {
    throw new Error('useCellContext must be used within a CellContextProvider');
  }
  return context;
};