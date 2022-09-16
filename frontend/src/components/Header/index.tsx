import { useMetaMask } from 'metamask-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button } from '../../beacon/button';
import { Text } from '../../beacon/text';
import { NFTModal } from '../Modal/NFT';
import { getAlchemySDK } from '../../utils/getAlchemySDK';
import { TotalCount } from '../ContractView/TotalCount';
import { MetaMask } from "./MetaMask"
import { NftMetadata } from 'alchemy-sdk';

export const Header: React.FC = () => {
    const { account } = useMetaMask();
    const [ isOpen, setOpen ] = useState(false);
    const [hasNFT, setHasNFT] = useState(false);
    const [metadata, setMetadata] = useState<NftMetadata>()

    const alchemy = getAlchemySDK();

    const checkForNft = async() => {
        if (account) {
            const ownersResponse = await alchemy.nft.getNftsForOwner(account, {
                contractAddresses: ["0x4412D5db5703e84693A3004115C0C41eAE8c92fb"]
            });
            setHasNFT(Boolean(ownersResponse.totalCount))
            const uniqueNFT = ownersResponse.ownedNfts[0]
            if (uniqueNFT.rawMetadata) {
                setMetadata(uniqueNFT.rawMetadata);
            }
        }
    }

    useEffect(() => {
        checkForNft()
    }, [account])

    return (
        <div className='fixed w-full shadow-md bg-gradient-to-r from-blue-900 to-cyan-800'>
            <div className={`flex justify-between items-center`}>
                <Link href='/'>
                    <a><Text className="font-bold ml-3 text-2xl">Wave</Text></a>
                </Link>
                <div className='flex flex-row items-center'>
                    {account && <Button onClick={hasNFT ? () => setOpen(true) : () => null}>{hasNFT ? 'Your NFT' : 'Mint an NFT'}</Button>}
                    {account && hasNFT && <TotalCount/>}
                    <MetaMask/>
                    <NFTModal isOpen={isOpen} close={() => setOpen(false)} nft={metadata}/>
                </div>
            </div>
        </div>
    )
}