const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".wrapper .big-letter", {
  duration: 1000,
  delay: 1000,
});

ScrollReveal().reveal(".wrapper .main-image", {
  duration: 1000,
  delay: 1500,
});

ScrollReveal().reveal(".wrapper .left-text", {
  ...scrollRevealOption,
  origin: "right",
  delay: 2000,
});

ScrollReveal().reveal(".wrapper .right-text", {
  ...scrollRevealOption,
  origin: "left",
  delay: 2000,
});

ScrollReveal().reveal(".wrapper .explore-btn", {
  duration: 1000,
  delay: 2500,
});

ScrollReveal().reveal(".wrapper h5", {
  duration: 1000,
  interval: 500,
  delay: 3000,
});

ScrollReveal().reveal(".footer-links li", {
  duration: 1000,
  interval: 300,
  delay: 5000,
});
