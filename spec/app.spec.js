var Add = require("../app");


describe("add functionality", () => {
    it("calculates X+Y = Z" , () => {
        expect(Add(10,1)).toEqual(11);
        expect(Add(-10,-1)).toEqual(-11);
        expect(Add(10,-1)).toEqual(9);
        expect(Add(-10,1)).toEqual(-9);
    });

    it("calculates x+y != z",() =>{
        expect(Add(5,10)).not.toEqual(10);
    });
});