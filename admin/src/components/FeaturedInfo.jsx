import React from 'react';
import "./style/FeaturedInfo.css";
import {ArrowDownward, ArrowUpward} from "@mui/icons-material";

const FeaturedInfo = () => {
  return (
    <div className='featured'>
        <div className="featurdItem">
            <span className="featuredTitle">revanue</span>
            <div className="fContainer">
                <span>$2,430</span>
                <span>-11.4<ArrowDownward className='negative'/></span>
            </div>
            <span className="fsubTitle">Compare to last months</span>
        </div>
        <div className="featurdItem">
            <span className="featuredTitle">Sales</span>
            <div className="fContainer">
                <span>$5,640</span>
                <span>-1.5<ArrowDownward className='negative'/></span>
            </div>
            <span className="fsubTitle">Compare to last months</span>
        </div>
        <div className="featurdItem">
            <span className="featuredTitle">Cost</span>
            <div className="fContainer">
                <span>$2,220</span>
                <span>+3.6<ArrowUpward /></span>
            </div>
            <span className="fsubTitle">Compare to last months</span>
        </div>
    </div>
  )
}

export default FeaturedInfo