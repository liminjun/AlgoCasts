// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // 使用数组的reverse()方法
    // const arr = str.split('');
    // arr.reverse();
    // return arr.join('');
    // return str.split('').reverse().join('');

    // 方案2

    // let reversed = [];
    // const arr = str.split('');
    // arr.forEach(function(item, index) {
    //     reversed.unshift(item);
    // })
    // return reversed.join('');

    let reversed = '';
    for (let char of str) {
        reversed = char + reversed;
    }
    return reversed;

}

module.exports = reverse;
