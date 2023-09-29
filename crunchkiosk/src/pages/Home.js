import React from 'react';
import '../css/Home.css';



const Home = () => {
  return (
    <>

    <div className="pricing_budget">
        <div className="pricingTitle">
            Pricing Tier:
        </div>

        <div className='pricingSelect'>
            <select>
                <option value="tier1">Member</option>
                <option value="tier2">Non-Member</option>
            </select>
        </div>

        <div className="budgetTitle">
            Budget:
        </div>

        <input className='budgetVal'/>
    </div>

    </>
  );
};

export default Home;