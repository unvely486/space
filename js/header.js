"use srtict";

const header = document.querySelector("header");
const gnb = document.querySelector("#gnb");

gnb.addEventListener("mouseover", function () {
  header.style.height = "282px";
});

gnb.addEventListener("mouseout", function () {
  header.style.height = "80px";
});
