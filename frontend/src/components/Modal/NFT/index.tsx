import Image from "next/image";

import { Card } from "../../../beacon/card"
import { Modal } from "../../../beacon/modal"
import { BasicModalProps } from "../../../beacon/modal/types"
import { Text } from "../../../beacon/text"
import { useButovskyNFT } from "../../../contexts/butovskyNFT"

import styles from './index.module.scss';

import { Button } from "../../../beacon/button";
import { BurnButovskyNFT } from "../../ContractWrite/BurnButovskyNFT";

// todo: exceptions for broken NFTs

export const NFTModal: React.FC<BasicModalProps> = (props) => {
    const { hasNFT, NFT } = useButovskyNFT(); 

    !hasNFT && props.close();

    return (
        <Modal className={props.className} isOpen={props.isOpen} close={() => props.close()}>
            <Card className={styles.container}>
                <div className={styles.content}>
                    <img className={styles.media} style={{ height: 300 }} src={NFT?.rawMetadata?.image}/>
                    <div className={styles.info}>
                        <Text className={styles.title}>
                            {NFT?.rawMetadata?.name}
                        </Text>
                        <div className={styles.desc}>
                            <Text className={styles.text}>
                                {NFT?.rawMetadata?.description}
                            </Text>
                        </div>
                    </div>
                </div>
                <div className={styles.options}>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={`https://testnets.opensea.io/assets/mumbai/${NFT?.contract?.address}/${NFT?.tokenId}`}
                    >
                        <Button>View on OpenSea</Button> 
                    </a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={`https://mumbai.polygonscan.com/address/${NFT?.contract?.address}`}
                    >
                        <Button>View on Etherscan</Button>
                    </a>
                    <BurnButovskyNFT/>
                </div>
            </Card>
        </Modal>
    )
}