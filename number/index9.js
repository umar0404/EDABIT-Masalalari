
// function getSearch(key,text) {
    //     return arr.filter((value) => {
        //         var res = value[key] + ''
        //         return res.toLowerCase().includes(text.toLowerCase())
//     })
// }
// console.log(getSearch('id','3'));

// function getSave(text) {
//     return arr.filter((value) => value.name !== text)

// }
// console.log(getSave('Abdulloh'));





var arr = [
    {id: 1, name:'Fozil'}, 
    {id: 2, name:'Odil'}, 
    {id: 3, name:'Nodir'},
    {id: 4, name:'Alibek'},
    {id: 5, name:'Abdulloh'},
]

function CRUD(action, text1, text2) {
    if(action == 'dalete'){
        return arr.filter((value) => value.name.toLocaleLowerCase() !== text1.toLocaleLowerCase())
    }
    if(action == 'search'){
        return arr.filter((value) => value.name.toLocaleLowerCase() == text1.toLocaleLowerCase())
    }
    if (action == 'save'){
        var objUser ={id: arr.length + 1, name: text1}
        arr.push(objUser)
        return arr
    }
    if (action == 'edit') {
        return arr.map((value) => value.name == text1 ? {...value, name: text2} : value)
    }

    // if(action == 'search'){
    //     return arr.filter((value) => value.id == )
    // }

    // if (action == 'search') {
    //     return arr.filter((value) => {
    //         var res = value.id + ''
    //         return res.includes(text1)
    //     })
    // if(action == 'edit'){
    //     return arr.filter((value) => value.id.toLocaleLowerCase() !== text1.toLocaleLowerCase())
    // }
}
console.log(CRUD('search','3'));



// function getSurname (key,text) {
//     var res = arr.filter((value) => value[key].toLowerCase())
//     console.log(res);
// }
// getSurname('search','fozil')