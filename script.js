function animation() {
  document.addEventListener("mousemove", function (dets) {
    gsap.to("#crsr", {
      left: dets.clientX + "px",
      top: dets.clientY + "px",
    });
  });
  Shery.makeMagnet(".magnet-target", {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

  gsap.to("#loader", {
    top: "-100%",
    ease: Power1,
    duration: 1,
    delay: 0.8,
  });

  gsap.to("#loader h1", {
    marginTop: "200%",
    opacity: 0,
    ease: Power1,
    duration: 1.5,
    delay: -0.01,
  });

  gsap.from("nav", {
    marginTop: "-200%",
    duration: 1.5,
    delay: 1,
  });

  gsap.from(".img img", {
    marginLeft: "-100%",
    duration: 1,
    delay: 2.3,
  });

  gsap.from("#hero .textContent", {
    marginLeft: "-100%",
    duration: 0.5,
    delay: 3,
  });

  gsap.from("#hero .imgContent img", {
    bottom: "-100%",
    right: "-50%",
    duration: 0.5,
    delay: 3,
  });

  gsap.from(".imgContent .circle", {
    opacity: 0,
    duration: 1,
    delay: 3.1,
  });
}

animation();
