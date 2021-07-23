'use strict' ;

function Person () {

    if ( !new.target ) return ;

    const PERMISSION_GANDER = [ 'male' , 'female' , 'non-binary' , 'transgender' , 'intersex' , 'n/a' ] ;

    function secretFunctionName ( currentValue ) {
        let value ;
        return function ( currentValue ) { 
            if ( currentValue !== undefined ) value = currentValue.trim() ;
            return value ;
        } ;
    }
    const _name = secretFunctionName () ;

    function secretFunctionAge ( currentValue ) {
        let value ;
        return function ( currentValue ) { 
            if ( currentValue !== undefined ) {
                currentValue = parseInt ( currentValue ) ;
                if( currentValue > 0 && currentValue <= 120 ) {
                    value = currentValue ;
                }
            } 
            return value ;
        } ;
    }
    const _age = secretFunctionAge () ;

    function secretFunctionGander ( currentValue ) {
        let value ;
        return function ( currentValue ) { 
            if ( currentValue !== undefined ) {
                currentValue = currentValue.trim().toLowerCase() ;
                if( PERMISSION_GANDER.includes( currentValue ) ) value = currentValue ;
            } 
            return value ;
        } ;
    }
    const _gander = secretFunctionGander () ;

    Object.defineProperties ( this , {
        'name' : {
            get : function () { return _name () } ,
            set : function ( value ) { _name ( value ) } ,
            enumerable : false ,
            configurable : false
        } ,
        'age' : {
            get : function () { return _age () } ,
            set : function ( value ) { _age ( value ) } ,
            enumerable : false ,
            configurable : false
        } ,
        'gander' : {
            get : function () { return _gander () } ,
            set : function ( value ) { _gander ( value ) } ,
            enumerable : false ,
            configurable : false
        }
    } ) ;

}

const newPerson = new Person () ; 

newPerson.name = ' bob' ;
newPerson.gander = ' Male' ;
newPerson.age = 120 ;
console.dir ( newPerson ) ;

/* Object.defineProperty ( newPerson , 'age' , { //нельзя изменить поле объекта age
    configurable : true ,
    value : '121'
} ) ;
console.log ( newPerson ) ; */