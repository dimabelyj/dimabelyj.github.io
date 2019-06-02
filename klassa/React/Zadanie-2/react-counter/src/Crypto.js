import React, {Component} from 'react';
import CryptoList from './CryptoList';
import axios from 'axios';

 class Crypto extends Component {
  constructor (props){
      super(props);

      this.state = {
          cryptoList: []
      }
  }
  componentDidMount(){
   this.getData();

   setInterval(() => {
       if (this.filterValue.value === ''){
       this.getData();
    }
   }, 5000);
      
  }

  getData = () => {
    
      
    axios.get('https://blockchain.info/pl/ticker')
      .then(response => {
    let data = response.data;
    let newCryptoList = [];
    let oldCryptoList = this.state.cryptoList;

    // Object.keys(data) ['USD', 'Jen', 'PLN'...]
    Object.keys(data).map(waluta =>{
       let newObject = {
           waluta: waluta,
           lastRate: data[waluta].last,
           symbol: data[waluta].symbol
       };

    //    tworzenie kolorów dla strzałek
       let oldObject = oldCryptoList.find(oldObject => {
           if (oldObject.waluta === newObject.waluta)
           return oldObject;
       });
       if (oldObject !== undefined) {
           if (oldObject.lastRate < newObject.lastRate){
               newObject.class = 'green';
           } else if (oldObject.lastRate > newObject.lastRate){
            newObject.class = 'red';
           } else {
            newObject.class = 'blue';
           }
       }
       console.log(oldObject);
       newCryptoList.push(newObject);
      
    })

    this.setState({cryptoList: newCryptoList});
    console.log(this.state.newCryptoList);

  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  }
  
 onFilter = () => {
     let value = this.filterValue.value.toUpperCase();
     value = value.trim();
     let cryptoList = this.state.cryptoList;
     console.log(value);
     cryptoList = cryptoList.filter(curentWaluta => {
         return curentWaluta.waluta.search(value) >-1;
     });

    this.setState({cryptoList: cryptoList});
    
 }
  
    render() {
      return (
        <div>
         <input 
          placeholder=" Filter"
          ref={input => this.filterValue = input}
          onChange={this.onFilter}
          ></input>
         <CryptoList rates={this.state.cryptoList}/>
        </div>
       
      )
    }
  }

  export default Crypto