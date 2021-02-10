const student = [
    {id: 21, name: 'Omar Sunny'},
    {id: 49, name:'manna'},
    {id: 27, name: ' Moyouri'},
    {id: 71, name: 'Dipjol'},
];


const names = student.map( s => s.name);
const ids = student.map(x => x.ids);
const bigger = student.filter(s => s.id>40);
console.log(bigger);