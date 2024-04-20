import React from 'react'
import { AiFillPlayCircle } from 'react-icons/ai'
import {SiEthereum} from 'react-icons/si'
import {BsInfoCircle} from 'react-icons/bs'
import Loader from "./Loader"
function Welcome() {
  const companyCommonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

  const connectWallet = ()=>{
  
  }

  const handleSubmit = () =>{
    
  }

  return (
    <div className="flex w-full justify-center items-center">
     <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
       <div className="flex flex-1 justify-start flex-col md:mr-10">
        <h1 className="text-white text-3xl sm:text-5xl text-gradient py-1">
          Send Crypto <br />Across the World
        </h1>
        <p className="text-base text-white text-left font-light mt-5 md:w-9/12 w-11/12">
          Explore the crypto world.Buy and sell cryptocurrency easily on Krypto
        </p>
        <button type='button' onClick={connectWallet} className="h-9 rounded-full flex flex-row justify-center items-center my-5 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ...">
          Connect Wallet
          </button>
         <div className='grid sm:grid-cols-3 grid-col-2 w-full mt-10 '>
         <div className={`rounded-tl-2xl ${companyCommonStyles}`}>
            Relabilty
           </div>
           <div className={`rounded-tl-2xl ${companyCommonStyles}`}>
            Etherum
           </div>
           <div className={`rounded-tl-2xl ${companyCommonStyles}`}>
            Web3.0
           </div>
           <div className={`rounded-tl-2xl ${companyCommonStyles}`}>
            BlockChain
           </div>
           <div className={`rounded-tl-2xl ${companyCommonStyles}`}>
            Security
           </div>
           <div className={`rounded-tl-2xl ${companyCommonStyles}`}>
            Low Fees
           </div>
           
         </div>
       </div>
       <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
        <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-full my-5 eth-card .white-glassmorphism">
        <div className="flex justify-between flex-col w-full h-full">
        <div className="flex flex-row justify-between">
        <SiEthereum fontSize={21} color="#fff" />
        <div className="flex flex-col justify-start items-end">
        <BsInfoCircle fontSize={17} color="#fff" />
        </div>
        </div>
        <div className="text-white">
          <div className="text-0.5xl">
          Address
          </div>
          <div className="text-2xl">
            Ethereum
          </div>
        </div>
        </div>
        </div>
        <div className="w-full flex flex-col bg-slate-800">
            <input type="text" placeholder="Address To" className="ml-3 mr-3 rounded placeholder mt-3" />
            <input type="text" placeholder="Amount(ETH)" className="ml-3 mr-3 rounded placeholder mt-3" />
            <input type="text" placeholder="Keyword(GIF)" className="ml-3 mr-3 rounded placeholder mt-3"/>
            <input type="text" placeholder="Message"  className="ml-3 mr-3 mb-4 rounded placeholder mt-3"/>
            <button className="text-white bg-slate-500 rounded-2xl">Send Now</button>
        </div>
        </div>
       
     </div>
    </div>
  )
}

export default Welcome
