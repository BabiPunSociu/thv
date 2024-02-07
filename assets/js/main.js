import btnPosition from "./btn-position.js";

window.onload = () => {
  let numberButtonNoHovered = 0;
  let buttonNoHoveredMax = 5;

  const btnYes = document.getElementById("btn-yes");
  const btnNo = document.getElementById("btn-no");
  btnNo.onmouseenter = () => {
    btnPosition(++numberButtonNoHovered, buttonNoHoveredMax);
  };

  btnYes.onclick = () => {
    // Hiển thị thông tin
    let info = document.getElementById("info");
    info.style.display = "block";
  };

  // button Xinnn
  const btnXin = document.getElementById("btn-xin");

  btnXin.addEventListener("click", () => {
    // Ẩn div.info
    let info = document.getElementById("info");
    info.style.display = "none";
  });
};
