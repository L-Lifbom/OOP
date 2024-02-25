function Color(r,g,b) {
    this.r = r;
    this.g = g;
    this.b = b;

    this.rgb = function() {
        return `RGB(${this.r},${this.g},${this.b})`
    }
    
    this.hex = function() {
        const toHex = c => ('0' + c.toString(16)).slice(-2);
        return `#${toHex(this.r)}${toHex(this.g)}${toHex(this.b)}`;
    }
    
    this.rgba = function(a) {
        return `RGBA(${this.r},${this.g},${this.b},${a})`
    }
}

const color = new Color(255, 255, 255);

console.log(color.rgb(this.r,this.g,this.b))
console.log(color.hex())
console.log(color.rgba(0.5))