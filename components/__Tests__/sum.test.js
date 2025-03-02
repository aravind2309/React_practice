import { sum } from "../Sum"

test("Sum fuction should calculate two numbers",()=>{
    const result=sum(3,7);
    expect(result).toBe(10);
})