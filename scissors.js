const details = [...document.getElementsByTagName("details")];
console.log(details);

details.forEach((detail) => {
  detail.addEventListener("toggle", (event) => {
    if (detail.open) {
      details.forEach((otherDetail) => {
        if (otherDetail !== detail && otherDetail.open) {
          otherDetail.open = false;
        }
      });
    }
  });
});
   
