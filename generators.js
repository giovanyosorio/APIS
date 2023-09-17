function* idMaker() {
  var index = 0;
  while (true) yield index++;
}

var gen = idMaker(); // "Generator { }"

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
// ...



function* iterative(array)
{
  for(let i=0;i<array.length;i++)
  {
    yield array[i]
  }
}
var iteration=iterative([1,2,3,4,9,"gio"])

console.log(iteration.next())
console.log(iteration.next())
console.log(iteration.next())
console.log(iteration.next())
console.log(iteration.next())
console.log(iteration.next())
