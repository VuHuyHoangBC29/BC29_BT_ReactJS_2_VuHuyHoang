import React, { Component } from "react";
import GlassesList from "../../Data/dataGlasses.json";
import Glasses from "./Glasses";

export default class BaiTapGlasses extends Component {
  state = {
    glassesData: GlassesList,
    img: "./glassesImage/v1.png",
    name: "",
    price: "",
    desc: "",
  };

  renderGlassesList = () => {
    return this.state.glassesData.map((ele) => {
      // return <Glasses ele={ele} handleChangeGlass={this.handleChangeGlass} />;
      return (
        <div key={ele.id} className="col-4 pt-5">
          <button style={{ border: "none" }}>
            <img
              onClick={() => this.handleChangeGlass(ele.id)}
              src={ele.url}
              width={150}
              height={100}
            />
          </button>
        </div>
      );
    });
  };

  renderGlassesInfo = () => {
    return (
      <div>
        <h5>{this.state.name}</h5>
        <p className="my-3">
          <span className="mr-4">${this.state.price}</span>
        </p>
        <p>{this.state.desc}</p>
      </div>
    );
  };

  handleChangeGlass = (id) => {
    this.state.glassesData.forEach((ele) => {
      if (id === ele.id) {
        this.setState({
          img: ele.url,
          name: ele.name,
          price: ele.price,
          desc: ele.desc,
        });
      }
    });
    document.getElementById("glassesInfo").style.display = "block";
  };

  // state = {
  //   img: "./glassesImage/v1.png",
  //   name: "",
  //   price: "",
  //   desc: "",
  // };

  // renderGlassesList = () => {
  //   return GlassesList.forEach.map((ele) => {
  //     return (
  //       <div key={ele.id} className="col-4 pt-5">
  //         <button style={{ border: "none" }}>
  //           <img
  //             // onClick={() => handleChangeGlass(ele.id)}
  //             src={ele.url}
  //             width={150}
  //             height={100}
  //           />
  //         </button>
  //       </div>
  //     );
  //   });
  // };

  // renderGlassesInfo = () => {
  //   return (
  //     <div>
  //       <h5>{this.state.name}</h5>
  //       <p className="my-3">
  //         <span className="mr-4">${this.state.price}</span>
  //       </p>
  //       <p>{this.state.desc}</p>
  //     </div>
  //   );
  // };

  // handleChangeGlass = (id) => {
  //   console.log(id);
  // }

  render() {
    return (
      <div
        className="container py-3"
        style={{ cursor: "pointer", height: "100vh" }}
      >
        <h1 className="text-center">BÀI TẬP KÍNH</h1>
        <div className="row">
          <div className="col-6 vglasses__left">
            <div className="row">
              <div className="col-12">
                <h3 className="mb-2">TRY GLASSES APP ONLINE</h3>
              </div>
            </div>
            <div className="row" id="vglassesList">
              {this.renderGlassesList()}
            </div>
          </div>

          <div className="col-5 vglasses__right p-0">
            <div className="vglasses__card">
              <div className="vglasses__model" id="avatar">
                <img src={this.state.img} alt="" />
              </div>

              <div className="vglasses__info" id="glassesInfo">
                {this.renderGlassesInfo()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
