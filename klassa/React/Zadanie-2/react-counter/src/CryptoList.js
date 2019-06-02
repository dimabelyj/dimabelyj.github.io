import React, {Component} from 'react';


class CryptoList extends Component {   
    
      render() {
       
        return (
          <div>
           {this.props.rates.map(curentWaluta =>
               <p key={curentWaluta.waluta}>
                   <strong>Last rate: </strong>
                   <span className={curentWaluta.class}>{curentWaluta.lastRate} &nbsp;</span>
                   <span>&nbsp; {curentWaluta.waluta} &nbsp;</span>
                   <span>[{curentWaluta.symbol}]</span>
               </p>
           )}
          </div>
        )
      }
    }
  


export default CryptoList
