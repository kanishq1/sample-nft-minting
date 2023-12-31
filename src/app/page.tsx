"use client";
/* eslint-disable @next/next/no-img-element */
import { ProvideAuth } from "@arcana/auth-react";
import { MintNft } from "./components/mint-nft";
import { getAuth } from "./getArcanaAuth";

const auth = getAuth();

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                    Mint your Sample MAD LAD NFT
                </p>
                <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
                    <a
                        className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                        href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Powered By{" "}
                        <img
                            src="https://solana.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogotype.e4df684f.svg&w=384&q=75"
                            alt="Solana Logo"
                            width={100}
                            height={24}
                        />
                    </a>
                </div>
            </div>
            <ProvideAuth provider={auth}>
                <MintNft />
            </ProvideAuth>

            <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left"></div>
        </main>
    );
}
