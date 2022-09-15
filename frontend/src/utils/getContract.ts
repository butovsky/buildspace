import { ethers } from 'ethers';

type GetContractArgs = {
    ethereum: ethers.providers.ExternalProvider;
    address: string;
    abi: ethers.ContractInterface;
}

export const getContract = <T extends ethers.Contract>({ ethereum, address, abi }: GetContractArgs) => {
    const provider = new ethers.providers.Web3Provider(ethereum)
    const signer = provider.getSigner();
    // we can cast the type with 'as' because the only thing that differs waveContract from regular Contract is its own methods
    // thus we just specify the methods that we can invoke with TypeScript flow
    return new ethers.Contract(address, abi, signer) as T;
    
}