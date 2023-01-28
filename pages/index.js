import Head from "next/head"
import styles from "../styles/Home.module.css"
import Image from "next/image"
import Header from "../components/Header"
import LotteryEntrance from "../components/LotteryEntrance"
//import { useMoralis } from "react-moralis"

export default function Home() {
    //  const { isWeb3Enabled, chainId } = useMoralis()
    return (
        <div className={styles.container}>
            <Head>
                <title>Decentralized Lottery</title>
                <meta name="description" content="Our Smart Contract Lottery" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header></Header>
            <LotteryEntrance></LotteryEntrance>
        </div>
    )
}
