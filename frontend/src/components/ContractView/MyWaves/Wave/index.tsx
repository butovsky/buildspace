import Link from "next/link";
import React from "react";
import { Card } from "../../../../beacon/card";
import { Text } from "../../../../beacon/text";
import { BasicProps } from "../../../../beacon/types";

type WaveProps = BasicProps & {
    from: string;
    message: string;
};

export const Wave: React.FC<WaveProps> = ({ from, message, className }) => {
    return (
        <div className={className}>
            <Card className="max-w-xs h-32 overflow-y-scroll">
                <div className="mb-2 flex flex-row">
                    <a href={`https://mumbai.polygonscan.com/address/${from}`}>
                        <Text className="mr-2 mt-1">📄</Text>
                    </a>
                    <Text className="font-bold tracking-tight overflow-x-hidden text-ellipsis text-2xl">{from}</Text>
                </div>
                <div className="mb-2 flex flex-row">
                    <Link href={{ pathname: '/send', query: { to: from }}}>
                        <a><Text className="mr-2">👋</Text></a>
                    </Link>
                    <Text className="font-normal break-all">{message}</Text>
                </div>
            </Card>
        </div>
    )
}