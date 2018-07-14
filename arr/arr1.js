//  尾部增加元素 =》push() =>   尾部删除 pop()
// 头部增加元素 =》unshift() => 头部删除 shift()
//任意位置删除或添加元素 splice() // 改变了原始数组
// slice 删除从‘begin'到 ‘end’之间的元素   返回删除的元素  不改变原始数组

// 数组合并
// let d = 'hello world';
// let arr = [1,2,3];
// let arr2 = ['a','b','c'];
// let newAr = arr.concat(d,arr2);
// console.log(newAr);

// forEach数组迭代
// let arr2 = ['a', 'b', 'c'];
// arr2.forEach(function(item, index) {
//     console.log(index+'==='+item);
// })

// every some 迭代 every遇到只想结果尾false结束执行 some 相反
// 判断数组元素是否都包含某一个字符
var names = ["abc", "cb", "mba", "dna"];
var flag = names.every(function (t) {
    return t.indexOf('a') !=-1;
})
console.log(flag);

// 判断 是否有包含a的字符
var flag = names.some(function (t) {
    return t.indexOf('a') != -1;
})
console.log(flag);

// filter过滤器
let newNames = names.filter(function name(t) {
    return  t.indexOf('a') !== -1;
})
console.log(newNames);

// map 
let newNames2 = names.map(function (t) {
    return  t+'a--';
})
console.log('====================================');
console.log(newNames2);
console.log('====================================');
let num = [1,2,3,4,5,6];
// initvalue 初始值 不传默认为 0
var total = num.reduce(function (pre,cur) {
    return pre + cur;
},2);
console.log(total);

//  es6 API
// for...of
let num2 = [1, 2, 3, 4, 5, 6];
for(m of num2) {
    console.log(m%2 == 0) ?'even':'odd';
}

// 迭代器方法
let Aentries = num2.entries();   //得到键值对
console.log(Aentries.next());
console.log(Aentries.next());
console.log(Aentries.next());
console.log(Aentries.next());
console.log(Aentries.next());
console.log(Aentries.next());

// Array.from
let evens = Array.from(num2, x=>(x%2 == 0));
console.log(evens);
let str = 'I Will Be Back';
console.log(Array.from(str));
// Array.of
console.log('of==='+Array.of(...num2));
console.log('of+++'+Array.of(...str));
// Array.fill 以静态值填充数组
let num3 = [1,2,3,4,5];
console.log(num3.fill('a',2));

// 反转数组 reverse
// 数组排序
let num4 = [1, 10, 11, 12, 13, 14, 15, 2, 3, 4, 5, 6, 7, 8, 9];
let snum4 = num4.sort(function (a, b) {
    return a -b;
});
console.log(snum4);

// 数组元素查找
//  es5 indexOf lastIndexOf
// es6 find(返回第一个满足条件的值 否则返回 undefined) findIndex (返回第一个满足条件的索引 否则返回-1)
// es7 includes 
function search(ele, index, array) {
 return    ele >10 ?true:false;
};

console.log(num4.find(search));
console.log(num4.includes(90));
// 数组转换字符串
console.dir(num4.toString());
console.dir(num4.join('=='));