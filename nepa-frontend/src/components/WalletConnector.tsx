import React from 'react';
export const WalletConnector = ({ address, onConnect }: any) => (
  <div className="flex items-center">
    {address ? (
      <span className="text-[10px] bg-green-50 text-green-600 px-3 py-1 rounded-full font-bold">G...{address.slice(-4)}</span>
    ) : (
      <button onClick={onConnect} className="text-xs bg-blue-600 text-white px-4 py-2 rounded-lg font-bold">Connect</button>
    )}
  </div>
);
