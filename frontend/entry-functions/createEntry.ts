import { InputTransactionData } from "@aptos-labs/wallet-adapter-react";

// Function to create an entry in the vortex engine
export type CreateEntryArguments = {
    account: string; // Wallet address of the account
    ipfscontent: string;
    timestamp: string;
  };
  
  export const createEntry = (args: CreateEntryArguments): InputTransactionData => {
    const { account, ipfscontent, timestamp } = args;
    return {
      data: {
        function: "de5d94dac0db9e017d907b6e02a6d4274e0e2fbbe018e3a698d81e8da2028477::vortexengine::create_entry",
        functionArguments: [account, ipfscontent, timestamp],
      },
    };
  };
  