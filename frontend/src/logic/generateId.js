
const generateId = () => {
    const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const res = [];
    for(let i = 0; i < 6; i++){
        res.push(nums[Math.floor(Math.random() * nums.length)]);
    }
    return res.join("");
}

generateId()

export default generateId