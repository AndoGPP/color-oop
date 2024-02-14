function Color(red, green, blue, alpha) {
  this.red = r;
  this.green = green;
  this.blue = blue;
  this.alpha = 1;
}
//I only need one function for RGB and RGBa because if not provided, I set it to 1 (full opacity)
Color.prototype.rgba = function () {
  return `rgba(${this.red},${this.green}, ${this.blue}, ${this.alpha}`;
};

Color.prototype.hex = function () {
  const rHex = this.red.toString(16).padStart(2, 0);
  const gHex = this.green.toString(16).padStart(2, 0);
  const bHex = this.blue.toString(16).padStart(2, 0);
  const aHex = this.alpha.Math.round(this.alpha * 255)
    .toString(16)
    .padStart(2, 0);
  return `#(${this.red},${this.green}, ${this.blue}, ${this.alpha}`;
};

const ColorOne = new Color(123, 145, 130);

console.log(ColorOne);
