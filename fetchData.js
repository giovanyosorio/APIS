const API= "https://api.escuelajs.co/api/v1"

function fetchData(url){
  return fetch(url)
}


/*
fetchData(API)
.then(response=>response.json())
.then(data=>{
  console.log(data)
})
.then(()=>console.log("hola"))
.catch(error=>console.log(error))*/
fetchData(`${API}/products`)
.then(response=>response.json())
.then(products=>{

  return fetchData(`${API}/products/${products[1].id}`)
})
.then(response=>response.json())
.then(producto=>{
  //console.log(categoria)
 return fetchData(`${API}/categories/${producto.category.id}`);

})
.then(response=>response.json())
.then(category=>console.log(category.name))

.catch(error=>console.log(error))
//.then(product=>{
  //return fetcData(`${API}/categories/{product.category.id}`)
//})

/*
const promise=new Promise((resolve,reject)=>{
  resolve("done")
})

const cows= 20

const countcows=new Promise((resolve,reject)=>{
  if(cows>10){
    resolve("done exito")
  }
  else{
    reject("no son mayores")
  }
})

countcows.then((result)=>{
  console.log(result)
}).catch((error)=>{
  console.log(error)
}).finally(()=> console.log("finally"))

setTimeout(()=>{
  resolve(message)
},2000)*/
/*
function obtenerUsuario(userId) {
    return fetch(`https://api.ejemplo.com/users/${userId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        });
}

function obtenerPublicacionesDeUsuario(userId) {
    return fetch(`https://api.ejemplo.com/users/${userId}/publicaciones`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        });
}

// Uso de las promesas anidadas
obtenerUsuario(1)
    .then(user => {
        console.log('Usuario:', user);
        return obtenerPublicacionesDeUsuario(user.id);
    })
    .then(publicaciones => {
        console.log('Publicaciones:', publicaciones);
    })
    .catch(error => {
        console.error('Hubo un error:', error.message);
    });

*/
