// let a = new ArrayBuffer(4);
// const view = new DataView(a);

// view.setInt8(3, 66);

// console.log(a);
// console.log(view);

const buffer = new ArrayBuffer(1.99 * 1024 * 1024 * 1024);
const view = new DataView(buffer);

const buffer2 = new ArrayBuffer(1.99 * 1024 * 1024 * 1024);
const view2 = new DataView(buffer);

const buffer3 = new ArrayBuffer(1.99 * 1024 * 1024 * 1024);
const view3 = new DataView(buffer);

const buffer4 = new ArrayBuffer(1.99 * 1024 * 1024 * 1024);
const view4 = new DataView(buffer);

const buffer5 = new ArrayBuffer(1.99 * 1024 * 1024 * 1024);
const view5 = new DataView(buffer);

for (let i = 0; i < buffer.byteLength; i++) {
    view.setInt8(i, i + 1);
    view2.setInt8(i, i + 1);
    view3.setInt8(i, i + 1);
    view4.setInt8(i, i + 1);
    view5.setInt8(i, i + 1);
}


console.log('End');