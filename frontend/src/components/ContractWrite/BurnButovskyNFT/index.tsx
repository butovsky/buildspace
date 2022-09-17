import { useMetaMask } from "metamask-react";
import { Button } from "../../../beacon/button";
import { useButovskyNFT } from "../../../contexts/butovskyNFT"
import { getContract } from "../../../utils/getContract";
import { abi } from '../../../../contracts/abi/ButovskyNFT.json'
import { ButovskyNFT } from "../../../../contracts/types";
import { ethers } from 'ethers';

export const BurnButovskyNFT: React.FC = () => {
    const { ethereum } = useMetaMask();
    const { checkForNFT, NFT } = useButovskyNFT();

    const burn = async() => {
        if (ethereum) {
            const BNFTContract = getContract<ButovskyNFT>({ ethereum, abi, address: "0x4412D5db5703e84693A3004115C0C41eAE8c92fb" })
            const burnTx = await BNFTContract.burn(ethers.BigNumber.from(NFT?.tokenId));
            try {
                await burnTx.wait();
                await checkForNFT();
            } catch (e) {
                alert(e);
            }
        }
    }

    return (
        <Button className='bg-red-900' onClick={burn}>Burn this NFT!</Button>
    )
}