import React, { useState } from "react";
import "./SideMenu.css";

const SideMenu = () => {
  const [menuDropDown, setMenuDropDown] = useState(false);
  const openDropDown = () => {
    if (menuDropDown !== true) {
      setMenuDropDown(true);
    } else {
      setMenuDropDown(false);
    }
  };
  return (
    <div className="sideMenuWrap">
      <div className="d-flex justify-content-between">
        <div>Brand</div>
        <div>
          <i className="fa-solid fa-align-left"></i>
        </div>
      </div>
      <div className="menu">
        <div className="mentTitle mt-4 mb-2">menu</div>
        <div
          style={{ cursor: "pointer" }}
          onClick={() => openDropDown()}
          className="d-flex justify-content-between"
        >
          <div className="d-flex">
            <div className="me-2">
              <i className="fa-solid fa-border-all"></i>{" "}
            </div>
            <div>Dashboards</div>
          </div>
          {menuDropDown ? (
            <div>
              <i className="fa-solid fa-angle-up"></i>
            </div>
          ) : (
            <div>
              <i className="fa-solid fa-angle-down"></i>
            </div>
          )}
        </div>
        {menuDropDown ? (
          <div>
            <span className="d-block mt-3 text-start ps-4">Ecommerce</span>
            <span className="d-block mt-3 text-start ps-4">Sass</span>
            <span className="d-block mt-3 text-start ps-4">Crypto</span>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="application">
        <div className="mentTitle mt-3">applications</div>
        <div className="singleMenuWrap mt-2 d-flex">
          <div className="me-2">
            <i className="fa-regular fa-calendar-minus"></i>{" "}
          </div>
          <div>Calender</div>
        </div>
        <div className="singleMenuWrap mt-3 d-flex justify-content-between">
          <div className="d-flex">
            <div className="me-2">
              <i className="fa-regular fa-comment-dots"></i>{" "}
            </div>
            <div>Chat</div>
          </div>
          <div className="hot">Hot</div>
        </div>
        <div className="singleMenuWrap mt-3 d-flex">
          <div className="me-2">
            <i className="fa-regular fa-file"></i>{" "}
          </div>
          <div>File Manager</div>
        </div>
        <div className="singleDropDownWrap mt-3">
          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <div className="me-2">
                <i className="fa-solid fa-cart-shopping"></i>{" "}
              </div>
              <div>Ecommerce</div>
            </div>
            <div>
              <i className="fa-solid fa-angle-up"></i>
            </div>
          </div>
        </div>

        <div className="singleDropDownWrap mt-3">
          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <div className="me-2">
                <i className="fa-regular fa-envelope"></i>{" "}
              </div>
              <div>Email</div>
            </div>
            <div>
              <i className="fa-solid fa-angle-up"></i>
            </div>
          </div>
        </div>

        <div className="singleDropDownWrap mt-3">
          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <div className="me-2">
                <i className="fa-solid fa-book"></i>{" "}
              </div>
              <div>Invoices</div>
            </div>
            <div>
              <i className="fa-solid fa-angle-up"></i>
            </div>
          </div>
        </div>

        <div className="singleDropDownWrap mt-3">
          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <div className="me-2">
                <i className="fa-solid fa-briefcase"></i>
              </div>
              <div>Projects</div>
            </div>
            <div>
              <i className="fa-solid fa-angle-up"></i>
            </div>
          </div>
        </div>
        <div className="singleDropDownWrap mt-3">
          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <div className="me-2">
                <i className="fa-solid fa-wifi"></i>{" "}
              </div>
              <div>Contacts</div>
            </div>
            <div>
              <i className="fa-solid fa-angle-up"></i>
            </div>
          </div>
        </div>
      </div>
      div
    </div>
  );
};

export default SideMenu;
