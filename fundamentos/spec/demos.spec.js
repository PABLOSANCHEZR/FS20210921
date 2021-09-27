describe('Demos de las pruebas', function(){
    
    
    describe('uno anidado', function(){
        describe('calculos',function(){


            
      
        it('suma 2+2',function(){

            let a = 2, b=2;
            let rslt;

            rslt = suma(a,b)
            expect(rslt).toBe(4)
  })
        })

    })

     it('Este funciona siempre', function(){
        expect(true).toBeTruthy()

    })

    xit('Este falla siempre', function(){
        expect(true).not.toBeTruthy()
    
    })

})

    describe('otra suite', function(){

    })
   