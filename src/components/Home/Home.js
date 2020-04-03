import React, { Component } from 'react';
import './home.css'
import StateInformation from '../indiaDetails/stateDetails/StateInformation'
class Home extends Component {
    state = {
        covid: [],
        indiaLoaded: false,
        showIndia: true,
      };
    componentDidMount() {
        fetch("https://api.covid19india.org/data.json")
          .then(res => res.json())
          .then(data =>
            this.setState({
                covid: data,
                indiaLoaded: true
            })

          );
      }
    render()  {
        return(
            <div>
              <div className="row">
            {this.state.covid &&
              this.state.indiaLoaded &&
              this.state.showIndia
                ? this.state.covid.statewise.map((data, index) => { 
                    return(
                      <div className="col-md-3" key={index}>

                        <StateInformation  stateName={data} index = {index} />
                        </div>
                        
                    )
                }) :null}
             </div>
             </div>
        )
}
}
export default Home;