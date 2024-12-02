import React, { useState, useEffect } from "react";
import GraphFetch, { DataAdded } from "../components/GraphFetch";
import GradientBackground from "@/components/Background";
import Navbar2 from "@/components/Navbar2";
import AptosFetch, { AptosData } from "@/components/AptosFetch";
import AptosDataTable from "@/components/AptosDataTable";
import EthDataTable from "@/components/EthDataTable";

const Dashboard: React.FC = () => {
  const [dataAddeds, setDataAddeds] = useState<DataAdded[]>([]);
  const [dataAptos, setDataAptos] = useState<AptosData[]>([]);
  const [selectedChain, setSelectedChain] = useState("Aptos");

  // Define the columns in the correct order
  const columns = ["VortexScan ID", "Wallet Address", "IPFS", "TimeStamp"];

  useEffect(() => {
    const fetchData = async () => {
      if (selectedChain === "Ethereum") {
        // GraphFetch will handle data fetching directly
      } else if (selectedChain === "Aptos") {
        // AptosFetch will handle data fetching directly
      }
    };

    fetchData();
  }, [selectedChain]);

  const handleDataReceived = (data: DataAdded[]) => {
    // Sort the data by VortexScan_id in ascending order
    const sortedData = data.sort((a, b) => parseInt(a.VortexScan_id) - parseInt(b.VortexScan_id));
    setDataAddeds(sortedData);
  };

  const handleAptosDataReceived = (data: AptosData[]) => {
    setDataAptos(data);
  };

  return (
    <div>
      <GradientBackground>
        <Navbar2 setSelectedChain={setSelectedChain} />
        <div className="pt-24 md:pt-36 min-h-screen px-4">
          {selectedChain === "Aptos" ? (
            <>
              <AptosFetch onDataReceived={handleAptosDataReceived} />
              <AptosDataTable columns={columns} data={dataAptos} loading={false} />
            </>
          ) : selectedChain === "Ethereum" ? (
            <>
              <GraphFetch onDataReceived={handleDataReceived} />
              <EthDataTable columns={columns} data={dataAddeds} loading={false} />
            </>
          ) : (
            <p className="text-center mt-4 brandy-font text-2xl">Select a Chain</p>
          )}
        </div>
      </GradientBackground>
    </div>
  );
};

export default Dashboard;