function Color(red, green, blue, alpha) {
  this.red = red;
  this.green = green;
  this.blue = blue;
  this.alpha = typeof alpha !== "undefined" ? alpha : 1;
}
//I only need one function for RGB and RGBa because if not provided, I set it to 1 (full opacity)
Color.prototype.rgba = function () {
  return `rgba(${this.red},${this.green}, ${this.blue}, ${this.alpha})`;
};

Color.prototype.hex = function () {
  const rHex = this.red.toString(16).padStart(2, 0);
  const gHex = this.green.toString(16).padStart(2, 0);
  const bHex = this.blue.toString(16).padStart(2, 0);
  const aHex = Math.round(this.alpha * 255)
    .toString(16)
    .padStart(2, 0);
  return `#${rHex}${gHex}${bHex}${aHex}`;
};

const colorOne = new Color(218, 96, 40);
const colorTwo = new Color(72, 151, 136, 1);
const colorThree = new Color(119, 162, 196, 1);
//console.log(colorOne);

const bodyEl = document.getElementById("body-el");
const loopedColors = [colorOne.rgba(), colorTwo.rgba(), colorThree.hex()];
const text = document.getElementById("paragraph");
let i = 0;

bodyEl.addEventListener("click", () => {
  bodyEl.style.backgroundColor = loopedColors[i];
  text.innerHTML = `This color is generated with color ${loopedColors[i]}`;
  i = (i + 1) % loopedColors.length;
});
