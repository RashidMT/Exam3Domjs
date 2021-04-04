let database = [
{ title: "Knives out", genre: "detective", src: '<iframe width="280" height="185" src="https://www.youtube.com/embed/xi-1NchUqMA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' },
{ title: "Umar ibn AlKhattab ra", genre: "religous", src: '<iframe width="280" height="185" src="https://www.youtube.com/embed/b3hrt6lzK7M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'},
{ title: "Free guy", genre: "comedy", src: '<iframe width="280" height="185" src="https://www.youtube.com/embed/BxOS_ekb2mw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'},
{ title: "Life is beautiful", genre: "drama", src: '<iframe width="280" height="185" src="https://www.youtube.com/embed/8CTjcVr9Iao" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'},
{ title: "Quite Place", genre: "horror", src: '<iframe width="280" height="185" src="https://www.youtube.com/embed/WR7cc5t7tv8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'},
{ title: "I, robot", genre: "sci-fi", src: '<iframe width="280" height="185" src="https://www.youtube.com/embed/7Dlo-VB0-HI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'},
{ title: "The Croods 2", genre: "cartoon", src: '<iframe width="280" height="185" src="https://www.youtube.com/embed/wBcBzJ_oofs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'},
]

window.localStorage.setItem('database', JSON.stringify(database))
/*let database = window.localStorage.getItem('database')
if(!database) database = []
else database = JSON.parse(database)*/
