import React, { createContext, useState, useContext } from 'react';

const CarContext = createContext(undefined);

export const CarProvider = ({ children }) => {
  const [carData, setCarData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <CarContext.Provider value={{ carData, setCarData, currentPage, setCurrentPage }}>
      {children}
    </CarContext.Provider>
  );
};

export const useCarContext = () => {
  const context = useContext(CarContext);
  if (context === undefined) {
    throw new Error('useCarContext must be used within a CarProvider');
  }
  return context;
};
