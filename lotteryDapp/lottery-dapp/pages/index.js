import { useState } from 'react'
import Head from 'next/head'
import Web3 from 'web3'
import styles from '../styles/Home.module.css'
import 'bulma/css/bulma.css'

export default function Home() {
  const [web3, setWeb3] = useState()
  const [address, setAddress] = useState()

  const connectWalletHandler = async () => {
    /* check if Metamask is installed */
    if (typeof window !== "undefined" && typeof window.ethereum !== "undefined ") {
      try {
        /* Request Wallet Connection */
        await window.ethereum.request({ method: "eth_requestAccounts" })
        /* Create Web3 instance & set to state */
        const web3 = new Web3(window.ethereum)
        /* Set web3 instance & set to state */
        setWeb3(web3)
        /* get list of Accounts */
        const accounts = await web3.eth.getAccounts()
        /* set account 1 to React State */
        setAddress(accounts[0])
      } catch (err) {
        console.log(err.message)
      }
    } else {
      /* Metamask is not installed  */
      console.log("Please install Metamask")
    }
  }
  return (
    <div >
      <Head>
        <title>Ether Lottery</title>
        <meta name="description" content="Ethereum Lottery Dapp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <nav className="navbar mt-4 mb-4">
          <div className="container">
            <div className="navbar-brand">
              <h1>Ether Lottery</h1>
            </div>
            <div className="navbar-end">
              <button onClick={connectWalletHandler} className="button is-link">Connect Wallet</button>
            </div>
          </div>
        </nav>
        <div className="container">
          <section className="mt-5">
            <div className="columns">
              <div className="column is two-third">
                <section className="mt-5">
                  <p> Enter the lottery by sending 0.01 Ether</p>
                  <button className="button is-link is-large is-light mt-3"> Play Now</button>
                </section>
                <section className="mt-6">
                  <p><b>Admin only :</b> Pick Winner  </p>
                  <button className="button is-primary is-large is-light mt-3"> Play Now</button>
                </section>
              </div>
              <div className={'${styles.lotteryinfo} column is one-third'}>
                <section className="mt-5">
                  <div className="card">
                    <div className="card-content">
                      <div className="content">
                        <h2>Lottery History</h2>
                        <div className="history-entry">
                          <div>Lottery #1 Winner :</div>
                          <div>
                            <a href="https://rinkeby.etherscan.io/address/0xba2f3143e039fE564332614168f24Ef0a355d3a3" target="_blank">
                              0xba2f3143e039fE564332614168f24Ef0a355d3a3
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="mt-5">
                  <div className="card">
                    <div className="card-content">
                      <div className="content">
                        <h2>Players (1)</h2>
                        <div>
                          <a href="https://rinkeby.etherscan.io/address/0xba2f3143e039fE564332614168f24Ef0a355d3a3" target="_blank">
                            0xba2f3143e039fE564332614168f24Ef0a355d3a3
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="mt-5">
                  <div className="card">
                    <div className="card-content">
                      <div className="content">
                        <h2>Pot</h2>
                        <p>10 Ether</p>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </section>
        </div>
      </main>
      <footer className={styles.footer}>
        <p> &copy; 2022 Block Explorer </p>
      </footer>
    </div>
  )
}
