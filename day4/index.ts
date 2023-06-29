let user={
    name:"bruce",  //name is string according to complier
    age:14,  //age is number according to complier
    address:"India" //address is string according to complier
}

// user.name=100;  //it will give as error by default name is string

console.log(user)



let obj:any={    //now key can take any value
    name:"hari",
    job:"banker",
    address:"Banaras"
}

obj.name=100

console.log(obj)

interface Interfaced{
    name:string
    age:any
    class:any
}

let obj1:Interfaced={
    name:"radhika",
    age:12,
    class:7
}
obj1.age="17"

console.log(obj1)