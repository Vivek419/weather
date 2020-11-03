import React, { Component } from 'react';

const axios = require('axios');


class fetch extends Component {
   


    async handle(){
        try {
          var san="san"
          var response = await axios.get(`https://www.metaweather.com/api/location/search/?query=${san}`);
          var result = await response;
          
          console.log("vivek",result)
          return result;
          
          
          
        } catch (e) {
            alert(e)
          return false;
          
        }
      };
    
    
    render() {
        
        return (
            <div>
                <button onClick={()=>this.handle()}>click me</button>
                
            </div>
        );
    }
}

export default fetch;
