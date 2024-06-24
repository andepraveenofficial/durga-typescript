const score: Array<number> = []
const names: Array<string> = []

// only boolean or number accept and return
function identityOne(val:boolean|number):boolean|number{
    return val
}

// accept any type and return any type like give number type and return string type
function identityTwo(val:any):any{
    return val
}

// input type and return type are same,if you give number returs number type
function identityThree<Type>(val:Type):Type{
    return val
}
identityThree('3')

// short cut for Type as T
function identityFour<T>(val:T):T{
    return val
}

interface Bootle{
    brand: string,
    type:number
}

// identityFour<Bootle>({})

function getSearchProducts<T>(products:T[]):T{ // here returning no of the value from an array
    // do some database operations 
    const myIndex = 3 
    return products[myIndex]
}

const getMoreSearchProducts = <T,>(products:T[]):T =>{  // here <T,> comma tells this is not a jsx, this is generics syntax
    // do some database operations
    const myIndex = 4
    return products[myIndex]

}

interface Database {
    connection:string,
    username:string,
    password:string
}


function anotherFunction<T,U extends Database>(valOne:T,valTwo:U):object{
    return {
        valOne,valTwo
    }

}
// anotherFunction(3,{})

interface Quiz{
    name:string,
    type:string
}

interface Course{
    name:string,
    author:string,
    subject:string
}

class Sellable<T>{
    public cart: T[]=[]

    addToCart(product:T){
        this.cart.push(product)
    }
}