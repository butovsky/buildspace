import { NftMetadata } from "alchemy-sdk"
import { Button } from "../../../beacon/button"
import { Modal } from "../../../beacon/modal"
import { BasicModalProps } from "../../../beacon/modal/types"
import { Text } from "../../../beacon/text"
import { TextBlock } from "../../../beacon/text/block"

// todo: exceptions for broken NFTs

export const NFTModal: React.FC<BasicModalProps & {
    nft?: NftMetadata
}> = (props) => {
    return (
        props.isOpen ?
            <Modal isOpen={props.isOpen} close={() => props.close()}>
                <div className="flex flex-col items-center justify-center gap-y-5">
                    <TextBlock className="font-bold text-xl">
                        {props.nft?.name} <a href="https://google.com"><Text>🌐</Text></a>
                    </TextBlock>
                    <div className="flex flex-row gap-x-5">
                        <img style={{ height: 300 }} src={props.nft?.image}/>
                        <div className="max-w-sm flex items-center">
                            <TextBlock className="max-h-52 overflow-y-scroll font-semibold">
                            {props.nft?.description}
                            </TextBlock>
                        </div>
                    </div>
                    <div className="flex flex-row gap-x-5">
                        <Button className='bg-red-900' onClick={() => props.close()}>Burn this NFT!</Button>
                    </div>
                </div>
            </Modal>
        : null
    )
}