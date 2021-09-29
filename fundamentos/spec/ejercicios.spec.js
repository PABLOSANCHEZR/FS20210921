describe ('Prueba',function(){

    describe ('aleatorio', function(){
        it('Numero aleatorio', function(){

            let minimo=1; maximo=100;
            let resultado;
            
            resultado = aleatorio(minimo,maximo)

            expect(resultado).toEqual(vector)
        })
    })
})



describe('Prueba',function(){
    describe('aleatorio', function(){
        it('minimo 1 maximo 100', function(){
            let vector = [1,100];

        
            // eslint-disable-next-line no-undef
            let resultado = aleatorio(1,100);
            expect(resultado).toEqual(vector)
        })
    })
})



describe('Prueba',function(){
    describe('devolverArray', function(){
        it('Longitud 3 datos 2', function(){
            let vector = [2,2,2];

            
            // eslint-disable-next-line no-undef
            let resultado = devolverArray(3,2);
            expect(resultado).toEqual(vector)
        })
    })
})