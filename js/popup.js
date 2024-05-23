function showPopup(img) {
  console.log(img);
}
document.addEventListener("DOMContentLoaded", (event) => {
  const popup = document.getElementById("popup");
  const closeBtn = document.getElementById("closeBtn");
  const body = document.body;
  var count = 0;
  gsap.registerPlugin(ScrollTrigger);
  // gsap code here!
  console.log("lolls");
  ScrollTrigger.create({
    trigger: "#popup-title",
    start: "top center",
    onEnter: () => {
      
      if(count == 0) {
        body.classList.add("no-scroll"); // Disable scrolling
        gsap.to(popup, {
          display: "flex",
          opacity: 1,
          duration: 0.5,
        });
      }
      count++;
      
    },
  });

  closeBtn.addEventListener("click", () => {
    gsap.to(popup, {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        popup.style.display = "none";
        body.classList.remove("no-scroll");
        // Enable scrolling
        popup = null;
      },
    });
  });
});
