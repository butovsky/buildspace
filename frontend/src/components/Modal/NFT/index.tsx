import { Card } from "../../../beacon/card"
import { Modal } from "../../../beacon/modal"
import { BasicModalProps } from "../../../beacon/modal/types"
import { Text } from "../../../beacon/text"
import { useButovskyNFT } from "../../../contexts/butovskyNFT"

import styles from './index.module.scss';

// todo: exceptions for broken NFTs

export const NFTModal: React.FC<BasicModalProps> = (props) => {
    const { hasNFT, NFT } = useButovskyNFT(); 

    !hasNFT && props.close();

    return (
        <Modal className={props.className} isOpen={props.isOpen} close={() => props.close()}>
            <Card className={styles.container}>
                <div className={styles.content}>
                    <img style={{ height: 300 }} src={NFT?.rawMetadata?.image}/>
                    <div className={styles.info}>
                        <div className={styles.title}>
                            <Text>
                                {NFT?.rawMetadata?.name}
                            </Text>
                            {' '}
                            <a href="https://google.com">
                                <Text>🌐</Text>
                            </a>
                        </div>
                        <div className={styles.desc}>
                            <Text className={styles.text}>
                                {NFT?.rawMetadata?.description}
                            </Text>
                        </div>
                    </div>
                </div>
            </Card>
        </Modal>
    )
}