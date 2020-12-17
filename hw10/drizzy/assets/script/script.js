// helper function to hide outfits
const hideOutfits = () => {
  const outfits = document.getElementsByClassName("outfit");
  for (var i = 0; i < outfits.length; i++) {
    outfits.item(i).style.display = "none";
  }
};

// s1 outfit
let s1 = document.getElementById("s1");
s1.onclick = function () {
  document.getElementById("body").style.display = "none";
  hideOutfits();
  document.getElementById("o1").style.display = "block";
};

// s2 outfit
let s2 = document.getElementById("s2");
s2.onclick = function () {
  document.getElementById("body").style.display = "none";
  hideOutfits();
  document.getElementById("o2").style.display = "block";
};

// s3 outfit
let s3 = document.getElementById("s3");
s3.onclick = function () {
  document.getElementById("body").style.display = "none";
  hideOutfits();
  document.getElementById("o3").style.display = "block";
};

// s4 outfit
let s4 = document.getElementById("s4");
s4.onclick = function () {
  document.getElementById("body").style.display = "none";
  hideOutfits();
  document.getElementById("o4").style.display = "block";
};

// s5 outfit
let s5 = document.getElementById("s5");
s5.onclick = function () {
  document.getElementById("body").style.display = "none";
  hideOutfits();
  document.getElementById("o5").style.display = "block";
};

// strip outfit
let strip = document.getElementById("strip-button");
strip.onclick = function () {
  /* call the function you created to hide all the outfits */
  /* show #body */
  hideOutfits();
  document.getElementById("body").style.removeProperty("display");
};
