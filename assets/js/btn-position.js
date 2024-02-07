/**
 * Hàm di chuyển ngẫu nhiên vị trí button no
 * @param {number} numberClicked Số lần đã click
 * @param {number} maxClicked Số lần click max
 * @returns
 * @author: NVDung (07-02-2024)
 */
function btnPosition(numberClicked, maxClicked) {
  const btnYes = document.getElementById("btn-yes");
  const btnNo = document.getElementById("btn-no");

  console.log(numberClicked, maxClicked);

  if (numberClicked < maxClicked) {
    // Css button no
    btnNo.style.position = "absolute";
    let left = Math.random() * 100 + "%";
    let top = Math.random() * 100 + "%";
    console.log(left, top);

    btnNo.style.left = left;
    btnNo.style.top = top;

    // Css button yes
    btnYes.style.transform = `scale(${numberClicked * 1.3})`;
    btnYes.style.margin = "auto";
  } else {
    btnNo.style.display = "none";
  }
}

export default btnPosition;
