import React, { useContext } from 'react';
import GenerateSoldOut from './GenerateSoldOut';
import GenerateBlock from './GenerateBlock';
import { appStore } from '../../state/app';
// import useBuy from '../../hooks/useBuy';

const Generate = () => {
  const { state } = useContext(appStore);
  const { soldOut } = state.app;
  // const { oneNFT } = state.price;

  // const { formatPrice } = useBuy();

  return (
    <section className="generate" id="generate">
      <div className="generate__container">
        <div className="generate__information">
          <h2 className="generate__title">Testnet</h2>
          <h2 className="generate__title">First Connect Wallet</h2>
        </div>
        
        <div className="generate__block">
          
          {soldOut ? <GenerateSoldOut /> : <GenerateBlock />}
        </div>
      </div>
    </section>
  );
};

export default Generate;
