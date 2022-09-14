import * as dotenv from 'dotenv';

dotenv.config();

enum ENVType { OWNER_PRIVATE_KEY, MUMBAI_API_URL }

export const ENV = (variable: keyof typeof ENVType) => {
    return process.env[variable] as string;
}