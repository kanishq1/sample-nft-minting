"use client";
import { AuthProvider } from "@arcana/auth";

const auth = new AuthProvider("xar_test_3c2a6ae9389d984a1fb8cb26fa603d33cd371f6f", {
    theme: "light",
    network: "testnet",
    connectOptions: {
        compact: true,
    },
});

const getAuth = () => {
    return auth;
};

export { getAuth };
