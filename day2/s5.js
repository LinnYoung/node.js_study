// 0x 表示 16进制
const buf = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5, 0xff]);

const json = JSON.stringify(buf);

// 输出：{'type':'Buufer',"data":[1,2,3,4,5]}

console.log(json)

const copy = JSON.parse(json,(key, value)=>{
    return value && value.type ==='Buffer'? Buffer.from(value.data):value
});
console.log(copy) // 输出<Buffer 01 02 03 04 05>
