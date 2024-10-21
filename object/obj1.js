let obj = [
    {
        "id":"1",
        "name":"harsh",
        course:"java",
        "mobno.":123456789,
    },
    {
        "id":"2",
        "name":"dhruv",
        course:"python",
        "mobno.":123454539,
    },
    {
        "id":"2",
        "name":"dhruv",
        course:"python",
        "mobno.":123454539,
    }
];

//console.log(obj[0].mobno)
//console.log(obj[1].course)

let selecttable = document.querySelector('#output');

selecttable.innerHTML = obj.map((e)=>`
    <tr>
        <td><img width = "100" src=${e.img}"></td>
        <td>${e.id}</td>
        <td>${e.name}</td>
        <td>${e.course}</td>
        <td>${e.mobno}</td>
`)