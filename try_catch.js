const API="https://api.escuelajs.co/api/v1"

async function fetchData(urlApi){

  const data=await fetch(urlApi)
  const response=await data.json()

  return response

}
async function anotherFn(urlApi) {
  try{
    
    const products=await fetchData(`${urlApi}/products`)
    //console.log(products)
  const product=await fetchData(`${urlApi}/products/${products[9].id}`)
 console.log("product",product)
    const category=await fetchData(`${urlApi}/categories/${product.category.id}`)
    console.log("category",category)
  }catch(error){
    console.log(error)
  }
}

anotherFn(API)
