import { useMetaMask } from "metamask-react";
import { useEffect, useState } from "react";
import { Button } from "../../../beacon/button";
import { capitalCase } from "change-case";
import { Text } from "../../../beacon/text";

import styles from './index.module.scss';

export const MetaMask: React.FC = () => {
    const { status, connect, account, ethereum } = useMetaMask();
    const [buttonText, setButtonText] = useState('Connect');

    const handleConnect = async () => {
        if (!ethereum) {
            setButtonText("No MetaMask 😔")
        } else {
            switch (status) {
                case "connected":
                    setButtonText(account);
                    return;
                case "notConnected":
                    await connect();
                    return;
                default:
                    setButtonText(capitalCase(status));
                    return
            };
        }   
    }
    
    useEffect(() => {
        if (status != "notConnected") {
            handleConnect();
        } else {
            setButtonText("Connect")
        }
    }, [status, account])

  return (
    <Button
        className={styles.container}
        onClick={handleConnect}
    ><Text className={styles.text}>{buttonText}</Text></Button>
  );
}