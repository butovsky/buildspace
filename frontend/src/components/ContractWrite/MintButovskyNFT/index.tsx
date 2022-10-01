import { useMetaMask } from "metamask-react";
import { useState } from "react";
import { Button } from "../../../beacon/button";
import { useButovskyNFT } from "../../../contexts/butovskyNFT"
import { getContract } from "../../../utils/getContract";
import { NFTModal } from "../../Modal/NFT";
import { abi } from '../../../../contracts/abi/ButovskyNFT.json'
import { ButovskyNFT } from "../../../../contracts/types";

export const MintButovskyNFT: React.FC = () => {
    const { ethereum } = useMetaMask();
    const { hasNFT, checkForNFT } = useButovskyNFT();
    const [ isOpen, setOpen ] = useState(false);
    const [ isMinting, setMinting ] = useState(false);

    const mint = async() => {
        if (ethereum) {
            const BNFTContract = getContract<ButovskyNFT>({ ethereum, abi, address: "0x4412D5db5703e84693A3004115C0C41eAE8c92fb" })
            const mintTx = await BNFTContract.safeMint();
            try {
                setMinting(true);
                await mintTx.wait();
                await checkForNFT();
                setMinting(false);
            } catch (e) {
                alert(e);
            }
        }
    }

    return (
        <>
            <Button onClick={hasNFT ? () => setOpen(true) : mint } isLoading={isMinting} loadingText='Minting...'>{hasNFT ? 'Your NFT' : 'Mint an NFT'}</Button>
            <NFTModal isOpen={isOpen} close={() => setOpen(false)}/>
        </>
    )
}