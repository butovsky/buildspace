import { Card } from "../../../beacon/card"
import { Modal } from "../../../beacon/modal"
import { BasicModalProps } from "../../../beacon/modal/types"
import { Text } from "../../../beacon/text"
import { useButovskyNFT } from "../../../contexts/butovskyNFT"

// todo: exceptions for broken NFTs

export const NFTModal: React.FC<BasicModalProps> = (props) => {
    const { hasNFT, NFT } = useButovskyNFT(); 

    !hasNFT && props.close();

    return (
        <div className={props.className}>
            <Modal isOpen={props.isOpen} close={() => props.close()}>
                <Card className="bg-black/30">
                    <div className="nft-modal">
                        <div className="content">
                            <img style={{ height: 300 }} src={NFT?.rawMetadata?.image}/>
                            <div className="info">
                                <div className="text-xl">
                                    <Text className="font-bold">{NFT?.rawMetadata?.name}</Text> <a href="https://google.com"><Text>🌐</Text></a>
                                </div>
                                <div className="text-white max-h-52 overflow-y-scroll font-semibold">
                                    {NFT?.rawMetadata?.description}
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row gap-x-5"/>
                    </div>
                </Card>
            </Modal>
        </div>
    )
}