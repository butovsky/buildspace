import { NftMetadata } from "alchemy-sdk"
import { Button } from "../../../beacon/button"
import { Modal } from "../../../beacon/modal"
import { BasicModalProps } from "../../../beacon/modal/types"
import { Text } from "../../../beacon/text"
import { TextBlock } from "../../../beacon/text/block"
import { useButovskyNFT } from "../../../contexts/butovskyNFT"
import { BurnButovskyNFT } from "../../ContractWrite/BurnButovskyNFT"

// todo: exceptions for broken NFTs

export const NFTModal: React.FC<BasicModalProps> = (props) => {
    const { hasNFT, NFT } = useButovskyNFT(); 
    console.log(NFT)
    !hasNFT && props.close();

    return (
        props.isOpen ?
            <Modal isOpen={props.isOpen} close={() => props.close()}>
                <div className="flex flex-col items-center justify-center gap-y-5">
                    <div className="flex flex-row gap-x-5">
                        <img style={{ height: 300 }} src={NFT?.rawMetadata?.image}/>
                        <div className="max-w-sm flex flex-col items-center justify-center gap-y-5">
                            <TextBlock className="font-bold text-xl">
                                {NFT?.rawMetadata?.name} <a href="https://google.com"><Text>🌐</Text></a>
                            </TextBlock>
                            <TextBlock className="max-h-52 overflow-y-scroll font-semibold">
                                {NFT?.rawMetadata?.description}
                            </TextBlock>
                        </div>
                    </div>
                    <div className="flex flex-row gap-x-5">
                        <BurnButovskyNFT/>
                    </div>
                </div>
            </Modal>
        : null
    )
}