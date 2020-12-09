import React from 'react'

export const StoreContext = React.createContext(null);

export const StoreVariale= ( {children} ) => {
  // các em đã vào nhà kho
  const teamMembersNames = ["John", "Mary", "Jason", "David"];

  const [sharing, setSharing] = React.useState(["a"]);
  const [help, setHelp] = React.useState([2]);
  const [pairing, setPairing] = React.useState(teamMembersNames);

  const store = {
    sharing: [sharing, setSharing],
    help: [help, setHelp],
    pairing: [pairing, setPairing]
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};