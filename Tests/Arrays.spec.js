import { expect } from "chai";

describe('Array test suit', ()=>{

    describe('Test the JS works good', ()=>{
        it('should sort array by name', ()=>{
            const names =['adiel','tom','john']
            expect(names.sort()).to.be.eql(['adiel','john','tom']);
        });

        it('should sort array by name',()=>{
            const names =['bob','alice','chris']
            expect(names.sort()).to.be.eql(['alice','bob','chris4444']);
        })

  })
})