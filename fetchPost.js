// ejemplo de fetch post
const API= "https://api.escuelajs.co/api/v1/products"

function postData(url,data){
  const response=fetch(url,{
    method:"POST",
    mode:"cors",
    credentials:"same-origin",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(data)
  })
  return response
}

const data={
  "title": "New Product",
  "price": 9999,
  "description": "A description",
  "categoryId": 1,
  "images": ["https://placeimg.com/640/480/any"]
}

postData(API,data)
.then(response=>response.json())
.then(data=>console.log(data))
      
