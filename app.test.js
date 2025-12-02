function sum(a,b){
    return a+b;
}

test("sum 1+2",()=>{
    expect(sum(2,2)).toBe(4);
})