import {greeting, square, sumOfSquares} from "../app/scripts/app.js";

/*
describe(' ',function(){

    it(" ",function(){

        expect(greeting).toBe("Hello, World!");

    });
    it("", function(){

        expect(square(3)).toBe(9);

    });

});*/

describe("My app module",function(){
    it("has a greeting name", function(){
        expect(greeting).toBe("Hello, World!");
    });

    it("square function doubles its input", function(){
        expect(square(5)).toBe(25);
    });

    it("sumOfSquares sums the double of its inputs",function(){
        expect(sumOfSquares(10,8)).toBe(164);
    });
});