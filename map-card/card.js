let arrofobj = [
   { 
    "id":1,
    "imageurl":"https://images.unsplash.com/photo-1542291026-7eec264c27ff?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D",
    "pname":"shoes",
    "bname":"nike",
    "pprice":999
    },
    { 
        "id":2,
        "imageurl":"https://images.unsplash.com/photo-1542291026-7eec264c27ff?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D",
        "pname":"shoes",
        "bname":"nike",
        "pprice":999
        },
        { 
            "id":3,
            "imageurl":"https://images.unsplash.com/photo-1542291026-7eec264c27ff?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D",
            "pname":"shoes",
            "bname":"nike",
            "pprice":999
            },
            { 
                "id":4,
                "imageurl":"https://images.unsplash.com/photo-1542291026-7eec264c27ff?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D",
                "pname":"shoes",
                "bname":"nike",
                "pprice":999
                },
                { 
                    "id":5,
                    "imageurl":"https://images.unsplash.com/photo-1542291026-7eec264c27ff?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D",
                    "pname":"shoes",
                    "bname":"nike",
                    "pprice":999
                    },
                    { 
                        "id":6,
                        "imageurl":"https://images.unsplash.com/photo-1542291026-7eec264c27ff?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D",
                        "pname":"shoes",
                        "bname":"nike",
                        "pprice":999
                        },
                        { 
                            "id":7,
                            "imageurl":"https://images.unsplash.com/photo-1542291026-7eec264c27ff?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D",
                            "pname":"shoes",
                            "bname":"nike",
                            "pprice":999
                            },
                            { 
                                "id":8,
                                "imageurl":"https://images.unsplash.com/photo-1542291026-7eec264c27ff?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D",
                                "pname":"shoes",
                                "bname":"nike",
                                "pprice":999
                                },
                                { 
                                    "id":9,
                                    "imageurl":"https://images.unsplash.com/photo-1542291026-7eec264c27ff?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D",
                                    "pname":"shoes",
                                    "bname":"nike",
                                    "pprice":999
                                    },
];

let selectdiv = document.querySelector('#output');

selectdiv.innerHTML = arrofobj.map((card)=>`

<div style = "margin:20px;box-shadow: 0px 0px 10px 2px black; text-align: center;">
    <img width = "200px" height = "200px" src="${card.imageurl}" alt = "">
    <div>${card.pname}</div>
    <div>${card.bname}</div>
    <div>${card.pprice}</div>
    <div> buynow </div>
</div>
`).join(" ")