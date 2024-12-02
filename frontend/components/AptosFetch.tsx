// components/AptosFetch.tsx
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { useState, useEffect } from "react";

export interface AptosData {
    entry_id: string;
    Walletaddress: string;
    ipfscontent: string;
    timestamp: string;
}

interface AptosFetchProps {
    onDataReceived: (data: AptosData[]) => void;
}
  
const AptosFetch: React.FC<AptosFetchProps> = ({ onDataReceived }) => {
    const [data, setData] = useState<AptosData[]>([]);
    const { account } = useWallet();

    const fetchData = async () => {
        if (!account) {
            console.error("Account address is required");
            return;
        }

        try {
            const response = await fetch(`https://vortex-server-three.vercel.app/api/get-function-value`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ accountAddress: account.address }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            setData(result);
            onDataReceived(result); // Call onDataReceived with the fetched data
            console.log(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [account]);

    return (
        <>

        </>
    );
};

export default AptosFetch;
