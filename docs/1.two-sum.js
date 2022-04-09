// Brute force 
//time : n*2

var twoSum = function (nums, target) {

    var op = []
    for (i = 0; i < nums.length; i++) {
        var a = nums[i];
        for (j = i + 1; j < nums.length; j++) {
            a + nums[j] === target && op.push(i, j)
        }
    }
    return op
};

//Using Object (fancy word of Hashmap)
//time: n*2

var twoSum = function (nums, target) {
    let map = {};

    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];

        //note the 'in' keyword  i never thought it could be used with if
        if (diff in map) {
            return [map[diff], i]
        }

        map[nums[i]] = i
    }
    return null;

}