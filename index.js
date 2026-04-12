let Name = "string";
let user = {
    Name,
    age: 30,
};

let arrKey = [];
let arrValue = [];

// appends the keys and values for the object into separate arrays

for (let key in user){
    arrKey.push(key)
    arrValue.push(user[key])
};

for (let i = 0; i < arrKey.length; i++){
    console.log(arrKey[i])
}

for (let i = 0; i < arrValue.length; i++){
    console.log(arrValue[i])
}
