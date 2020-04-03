import React from "react";
import "./districtDetails.css";
class DistrictDetails extends React.Component {
  state = {
    stateCovid: []
  };
  componentDidMount() {
    fetch("https://api.covid19india.org/v2/state_district_wise.json")
      .then(res => res.json())
      .then(data =>
        this.setState({
          stateCovid: data
        })
      );
  }

  render() {
    const { stateName } = this.props.location.state;
    let details = this.state.stateCovid;
    return (
      <div>
        {details.map((contact, index) => {
          return (
            <div key={index}>
              {contact.state === stateName ? (
                <table className="indiaDist">
                  <thead>
                    <tr>
                      <th>SL NO</th>
                      <th>DISTRICT</th>
                      <th>CONFIRMED</th>
                    </tr>
                  </thead>
                  <tbody>
                    {contact.districtData.map((data, index) => {
                      return (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{data.district}</td>
                          <td>{data.confirmed}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              ) : null}
            </div>
          );
        })}
      </div>
    );
  }
}

export default DistrictDetails;
