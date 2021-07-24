'use strict' ;

function Person ( name , age , gander ) {
    if ( !new.target ) return ;

    const PERMISSION_GANDER = [ 'male' , 'female' , 'non-binary' , 'transgender' , 'intersex' , 'n/a' ]

    const METH_NAME = function ( currentValue ) {
        let value ;
        return function ( currentValue ) { 
            if ( currentValue !== undefined ) value = currentValue.trim() ;
            return value ;
        } ;
    }
    const PROP_NAME = METH_NAME () ;

    const METH_AGE = function ( currentValue ) {
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
    const PROP_AGE = METH_AGE () ;

    const METH_GANDER = function ( currentValue ) {
        let value ;
        return function ( currentValue ) { 
            if ( currentValue !== undefined ) {
                currentValue = currentValue.trim().toLowerCase() ;
                if( PERMISSION_GANDER.includes( currentValue ) ) value = currentValue ;
            } 
            return value ;
        } ;
    }
    const PROP_GANDER = METH_GANDER () ;

    Object.defineProperties ( this , {
        'name' : {
            get : function () { return PROP_NAME () } ,
            set : function ( value ) { PROP_NAME ( value ) } ,
            enumerable : false ,
            configurable : false
        } ,
        'age' : {
            get : function () { return PROP_AGE () } ,
            set :function ( value  ) { PROP_AGE ( value ) } ,
            enumerable : false ,
            configurable : false
        } ,
        'gander' : {
            get : function () { return PROP_GANDER () } ,
            set : function ( value ) { PROP_GANDER ( value ) } ,
            enumerable : false ,
            configurable : false
        }
    } ) ;

    this.name = name ;
    this.age = age ;
    this.gander = gander ;

}                            //инициализируем конструктор

const newPerson = new Person ( ' bob' , 120 , ' Male' ) ; 
console.log ( newPerson.name ) ;
console.log ( newPerson.age ) ;
newPerson.name = 'ivan' ;
newPerson.age = 121 ;
console.dir ( newPerson.name ) ;
console.log ( newPerson.male ) ;

/* Object.defineProperty ( newPerson , 'age' , { //нельзя изменить поле объекта age
    configurable : true ,
    value : '121'
} ) ;
console.log ( newPerson ) ; */