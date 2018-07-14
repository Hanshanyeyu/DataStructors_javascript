/*
 * @Author: chenyu 
 * @Date: 2018-07-14 15:37:55 
 * @Last Modified by: chenyu
 * @Last Modified time: 2018-07-14 16:20:04
 */
var arr = [1, 2, [3, 4, [5, 6, 7]], 9, [10, 11]];
// 1⃣️ 循环+递归
function streamroller(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            newArr.push.apply(newArr, streamroller(arr[i]));
        } else {
            newArr.push(arr[i]);
        }
    }
    return newArr;
};
console.log(streamroller(arr));

//  2⃣️aplly + some
function streamroller2(arr) {
    while (arr.some(item => Array.isArray(item))) {
        arr = [].concat.apply([], arr);
    }
    return arr;
};
console.log(streamroller2(arr));
var arr2 = [1, 2, [3, 4, [5, 6, 7]], 9, [10, 11]];
// 3⃣️concat+reduce
function streamroller3(arr2) {
    return arr2.reduce((prev, next) => {
        return prev.concat(Array.isArray(next) ? streamroller3(next) : next);
    }, []);
};
console.log(streamroller3(arr2));
var arr3 = [1, 2, [3, 4, [5, 6, 7]], 9, [10, 11]];
// 4⃣️
function streamroller4(arr3) {
    while (arr3.some(item => Array.isArray(item))) {
        arr3 = [].concat(...arr3);
    }
    return arr3;
}
console.log(streamroller4(arr3));

var arr3 = [1, 2, [3, 4, [5, 6, 7]], 9, [10, 11]];
console.log(...arr3);