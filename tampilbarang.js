
let object=[
    {
        id:1,
        nama:'baju lebaran',
        harga:'RP 50.000',
        ukuran:'L',
        deskripsi:'ini adalah baju lebaran untuk anak anak dengan motif batik',
        url:'https://images.unsplash.com/photo-1616470449751-a33290863c1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJhanUlMjBsZWJhcmFufGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60'
    },
    {
        id:2,
        nama:'baju tidur',
        harga:'RP 35.000',
        ukuran:'m',
        deskripsi:'ini adalah baju tidur untuk anak anak dengan motif batik',
        url:'https://media.istockphoto.com/id/1390484196/photo/adult-asian-man-yawning-and-stretching-his-muscles.webp?b=1&s=170667a&w=0&k=20&c=yeEedvC0Da801iy5seTnFiZKByrdDvcHkqVbceCtM5s='
    },
    {
        id:3,
        nama:'seragam sekolah',
        harga:'RP 100.000',
        ukuran:'xl',
        deskripsi:'ini adalah seragam sekolah untuk anak anak.',
        url:'https://media.istockphoto.com/id/1406927794/photo/asian-kid-wearing-school-uniform-and-backpack-smiling-and-give-two-thumb-up.webp?b=1&s=170667a&w=0&k=20&c=kqLQCxNXXvPU_k-e1TztW3HfgUD38sHaF-7qoFVG0Ps='
    },
    {
        id:4,
        nama:'kaos olahraga',
        harga:'RP 80.000',
        ukuran:'l',
        deskripsi:'ini adalah kaos olahraga pria ada juga bagi perempuan',
        url:'https://media.istockphoto.com/id/1418630526/photo/asian-young-women-doing-yoga-meditation-above-sport-mattress.webp?b=1&s=170667a&w=0&k=20&c=D0kZM7gB6JUuAx-ju6779Rf26nNe4MTm7VsOKc_1HQ4='
    }
]


function loopingObject(){
    for(let i=0; i<object.length; i++){
        variabelObject( object[i].nama,object[i].harga,object[i].ukuran,object[i].deskripsi,object[i].url)
    }
}
function variabelObject(name,price,size,desc,urll){
    let nama=name
    let harga=price
    let ukuran=size
    let deskripsi=desc
    let url=urll
    ouputGrid(nama,harga,ukuran,deskripsi,url)
}
function ouputGrid(nama,harga,ukuran,desc,url){
    const div=document.createElement('div')
    div.setAttribute('class','grid-content')
    let teks=`<img src='${url}' class='img-small' alt=''>
    <h3 class='judul'>${nama}</h3>
    <h5 class='prize'>${harga}</h5>
    <b class='size'>${ukuran}</b>
    <p class='desc'>${desc}</p>`
    div.innerHTML=teks
    document.querySelector('.grids-img').appendChild(div)
}
loopingObject()

let grid=document.querySelectorAll('.grid-content')
grid.forEach(el=>{
    el.addEventListener('click',function(){
        let child=el.children
        let nama,url,harga,ukuran,desc;
        for(let i=0; i<child.length; i++){
            url=child[0].src
            nama=child[1].textContent
            harga=child[2].textContent
            ukuran=child[3].textContent
            desc=child[4].textContent
        }
        getData(url,nama,harga,ukuran,desc)
    })
})
    function getData(url,nama,harga,ukuran,desc){
        let div=document.createElement('div')
        div.setAttribute('class','content')
        let teks=` <h3 class='judul'>${nama}</h3>
        <h5 class='prize'>RP :${harga}</h5>
        <b class='size'>size :${ukuran}</b>
        deskripsi
        <p class='desc'>${desc}</p>`
        div.innerHTML=teks
        let img=document.querySelector('.img-big')
        img.src=url
        document.querySelector('.tekscontent').innerHTML=teks
    }
