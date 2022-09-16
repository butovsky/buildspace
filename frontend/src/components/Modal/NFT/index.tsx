import { Button } from "../../../beacon/button"
import { Modal } from "../../../beacon/modal"
import { BasicModalProps } from "../../../beacon/modal/types"
import { Text, TextBlock } from "../../../beacon/text"

export const NFTModal: React.FC<BasicModalProps & {
    nft: any
}> = (props) => {
    return (
        props.isOpen ?
            <Modal isOpen={props.isOpen} close={() => props.close()}>
                <div className="flex flex-col items-center justify-center">
                    <TextBlock className="font-bold text-xl">
                        Your NFT <a href="https://google.com"><Text>🌐</Text></a>
                    </TextBlock>
                    <div className="flex flex-row">
                        <img style={{ height: 300 }} src='https://upload.wikimedia.org/wikipedia/commons/2/27/Red_square.svg'/>
                        <div className="max-w-sm flex items-center">
                            <TextBlock className="max-h-52 overflow-y-scroll font-semibold">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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