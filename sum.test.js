const sum = require("./sum")

test('add 2 + 2 to get 4' , () => {
    expect(sum(2 , 2)).toBe(4);
})
