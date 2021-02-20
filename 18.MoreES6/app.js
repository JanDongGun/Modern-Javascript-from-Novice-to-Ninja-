const symbolOne = Symbol();

const ninja = {};
ninja.age = 30;
ninja["belt"] = "orange";
ninja["belt"] = "black";
ninja[symbolOne] = "ryu";

console.log(ninja);
