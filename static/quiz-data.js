export default [
  {
    title: 'Truthy / falsy values',
    value: `const value = [0, '', \`\`, [], {}, null, undefined, NaN]

value[0] ? console.log('T') : console.log('F')
value[1] ? console.log('T') : console.log('F')
value[2] ? console.log('T') : console.log('F')
value[3] ? console.log('T') : console.log('F')
value[4] ? console.log('T') : console.log('F')
value[5] ? console.log('T') : console.log('F')
value[6] ? console.log('T') : console.log('F')
value[7] ? console.log('T') : console.log('F')`
  },
  {
    title: 'Array賦值 (1)',
    value: `var array1 = [{ name: 'A' }]
var array2 = []

array2 = array1
array1[0].name = 'B'

console.log(array1[0].name)
console.log(array2[0].name)`
  },
  {
    title: 'Array賦值 (2)',
    value: `var array1 = [{ name: 'C' }]
var array2 = []
  
array1.map(item => {
  array2.push(item)
})
array1[0].name = 'D'
  
console.log(array1[0].name)
console.log(array2[0].name)`
  },
  {
    title: 'Array如何做深拷貝？',
    value: ``
  },
  {
    title: 'hoist (1)',
    value: `console.log(a)
var a = 20`
  },
  {
    title: 'hoist (2)',
    value: `let a = 10
if (true) {
  console.log(a)
  let a = 20
}
`
  },
  {
    title: 'Promise (1)',
    value: `var p1 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 500, 1);
});
var p2 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 100, 2);
});
Promise.all([p1, p2]).then(response => {
  console.log(response);
});
`
  },
  {
    title: 'Promise (2)',
    value: `var p1 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 500, 1);
});
var p2 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 100, 2);
});
Promise.race([p1, p2]).then(response => {
  console.log(response);
});
`
  },
  {
    title: 'Restful api (1) - How to improve ?',
    value: `POST {host}/order/insuranceInfo/update/{insuranceInfo_id}`
  }
]
