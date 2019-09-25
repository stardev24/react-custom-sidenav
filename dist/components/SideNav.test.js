import React from "react";
import SideNav from "./SideNav";
import renderer from "react-test-renderer";
describe("PhoneTextInput", function () {
  it("renders properly", function () {
    var tree = renderer.create(React.createElement(SideNav, {
      title: "Custom Navbar",
      menulinks: [{
        "name": "Home",
        "icon": "fa fa-plus-circle fa-4",
        "linkurl": "/home"
      }, {
        "name": "About",
        "icon": "fa fa-info-circle fa-4",
        "linkurl": "/about"
      }, {
        "name": "Users",
        "icon": "fa fa-user-circle fa-4",
        "linkurl": "/users"
      }],
      logo: {
        width: "50px",
        height: "50px",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu7bYh95wcxKFLdLPI_wj55K1EKvLbhaz4dWxfoxw7AVjdaYKC",
        alt: "Brand"
      },
      appbar: {
        bgcolor: "primary"
      },
      history: history
    })).toJSON();
    expect(tree).toMatchSnapshot();
  });
});