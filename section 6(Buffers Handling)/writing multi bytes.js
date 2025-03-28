
const a = new ArrayBuffer(4);
const view = new DataView(a);

view.setInt16(0, 257);
console.log(view.getInt16(0));

