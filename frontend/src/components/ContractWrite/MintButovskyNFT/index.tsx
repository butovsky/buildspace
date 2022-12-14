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
    const [ loadingText, setLoadingText ] = useState<string | null>(null)

    const mint = async() => {
        if (ethereum) {
            const BNFTContract = getContract<ButovskyNFT>({ ethereum, abi, address: process.env.NEXT_PUBLIC_BUTOVSKY_NFT_CONTRACT as string })

            setLoadingText('Setting MM...')
            setMinting(true);

            try {
                const mintTx = await BNFTContract.safeMint();
                setLoadingText("Minting...")
                await mintTx.wait();
                await checkForNFT();
            } catch (e) {
                alert(e);
            }
            setMinting(false);
            setLoadingText('')
        }
    }

    return (
        <>
            <Button onClick={hasNFT ? () => setOpen(true) : mint } disabled={isMinting} isLoading={isMinting} loadingText={loadingText}>{hasNFT ? 'Your NFT' : 'Mint an NFT'}</Button>
            <NFTModal isOpen={isOpen} close={() => setOpen(false)}/>
        </>
    )
}