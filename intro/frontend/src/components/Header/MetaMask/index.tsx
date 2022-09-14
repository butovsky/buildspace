import { useMetaMask } from "metamask-react";
import { useEffect, useState } from "react";
import { Button } from "../../../beacon/button";
import { capitalCase } from "change-case";
import networks from "../../../utils/networks";

export const MetaMask: React.FC = () => {
    const { status, connect, account, chainId, switchChain, ethereum } = useMetaMask();
    const [buttonText, setButtonText] = useState('Connect');

    const handleConnect = async () => {
        if (!ethereum) {
            setButtonText("No MetaMask 😔")
        } else {
            switch (status) {
                case "connected":
                    setButtonText(account);
                    await handleChain();
                    return;
                case "notConnected":
                    await connect();
                    await handleChain();
                    return;
                default:
                    setButtonText(capitalCase(status));
                    return
            };
        }   
    }

    const handleChain = async() => {
        if (chainId != networks.mumbai) {
            await switchChain(networks.mumbai);
        };
    }
    
    useEffect(() => {
        if (status != "notConnected") {
            handleConnect();
        } else {
            setButtonText("Connect")
        }
    }, [status, account, chainId])

  return (
    <Button
        className='m-2'
        onClick={handleConnect}
    >{buttonText}</Button>
  );
}