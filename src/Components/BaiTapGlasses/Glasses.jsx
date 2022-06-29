import React, { Component } from "react";

export default class Glasses extends Component {
  render() {
    let {handleChangeGlass, ele} = this.props;
    return (
      <div key={ele.id} className="col-4 pt-5">
        <button style={{border: "none"}}>
          <img
            onClick={() => handleChangeGlass(ele.id)}
            src={ele.url}
            width={150}
            height={100}
          />
        </button>
      </div>
    );
  }
}
