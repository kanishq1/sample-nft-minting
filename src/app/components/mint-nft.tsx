"use client";
import React from "react";
import axios from "axios";
import { Loader } from "./Icons";
import { useAuth } from "@arcana/auth-react";

const UNDERDOG_API_KEY = "f03fedeefeddb3.9d6dd7bce6464c81b80d73b2c72b2c1b";

const underdogApiEndpoint = "https://devnet.underdogprotocol.com";

const config = {
    headers: { Authorization: `Bearer ${UNDERDOG_API_KEY}` },
};

export const MintNft = () => {
    const { user, connect, isLoggedIn, loading: authLoading, provider } = useAuth();
    const [nftData, setNftData] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const mintNft = async () => {
        setLoading(true);
        const publicKey = user && user.address;

        const nftData = {
            name: "MAD LADS",
            symbol: "MAD",
            image: "https://www.madlads.com/_next/image?url=https%3A%2F%2Fmadlads.s3.us-west-2.amazonaws.com%2Fimages%2F457.png&w=640&q=75",
            receiverAddress: publicKey,
        };

        const createNftResponse = await axios.post(`${underdogApiEndpoint}/v2/projects/1/nfts`, nftData, config);
        console.info("createNftResponse", createNftResponse);
        setNftData(createNftResponse.data);
        setLoading(false);
    };

    const login = async () => {
        if (!isLoggedIn) await connect();
    };
    return (
        <div className="flex flex-col gap-y-8 text-center items-center">
            <div className="flex gap-x-4">
                <button
                    className="bg-white text-black px-6 py-2 rounded-lg hover:opacity-80 flex gap-x-4 items-center"
                    onClick={login}
                >
                    {!isLoggedIn && "Login"} {authLoading && <Loader />}
                    {isLoggedIn && user?.address}
                </button>
                <button
                    className="bg-white text-black cursor-pointer px-6 py-2 rounded-lg hover:opacity-80 flex gap-x-4 items-center"
                    onClick={mintNft}
                >
                    Mint NFT {loading && <Loader />}
                </button>
            </div>
            {nftData && (
                <p className="flex justify-center border-b bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                    🎉 🎉 NFT Minted 🎉 🎉
                </p>
            )}
        </div>
    );
};
