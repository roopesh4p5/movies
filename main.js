
    const Api =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=";
    let n=[]
    for(i=1;i<100;i++){
        n.push(i)
    }
    let p=n[(Math.floor(Math.random() * n.length))];
    let APIURL =Api+p;
    

const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const G= "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&with_genres=";
var F="&api_key=04c35731a5ee918f014970082a0088b1&page=";

var pages=()=>{
    let m=[]
    for(i=1;i<100;i++){
        m.push(i)
    }
    let q=n[(Math.floor(Math.random() * n.length))];
    var H =F+q;
    console.log(q)
    return H;
};  

const moiveBox = document.querySelector("#movie-box")
const getMovies = async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    showMovies(data)
}
getMovies(APIURL);


const showMovies = (data) => {
    moiveBox.innerHTML = "";
    popup.innerHTML = "";
    data.results.forEach(
        (result) => {
            const imagePath = result.poster_path === null ? "/logo.png" : IMGPATH + result.poster_path;
          
            const popup = document.querySelector("#popup")
            popup.classList.add("popup")
            popup.innerHTML = `
            <div >
                <div style="display:flex;flex-direction:row">
                    <img style="width:300px" src="${imagePath}" alt="" />
                <div>  
                    <a class="close" href="#">&times;</a>
                <div class="mx-5 my-1">
                    <div class="h2">
                        <div class="title " > 
                            <h4 >Movie Name: </h4>
                            </div>
                            <p style="font-size:40px"> ${result.original_title}</p>
                            <h3>Ratings:<span> ${result.vote_average} <span></h3>
                            <p style="font-size:30px;color:red;">Description:</p>
                            <p style="font-size:20px"> ${result.overview}</p>

                        </div>
                </div>
            </div>
            `
            // moiveBox.appendChild(popup)

            const box = document.createElement("div")
            box.classList.add("box")
            box.innerHTML = `
            <a href="#popup1"><img src="${imagePath}" alt="" /></a>
                
                <div class="overlay">
                    <div class="title " > 
                        <h2 > ${result.original_title}  </h2><hr>
                        </div>
                        <h3>Ratings:<span> ${result.vote_average} <span></h3>
                 </div>
            `
            moiveBox.appendChild(box)        
        }
    )

}



document.querySelector("#search").addEventListener(
    "keyup",
    function (event) {
        if (event.target.value != "") {
            getMovies(SEARCHAPI + event.target.value)
        } else {
            getMovies(APIURL);
        }
    }
    )
    
   
    let horror= document.querySelector("#horror");
    horror.addEventListener("click",function(){
       var H=pages();
        getMovies(G+27+H);
    });
    let comedy= document.querySelector("#comedy");
    comedy.addEventListener("click",function(){
      var H=pages();
        getMovies(G+35+H);
    });
    let action= document.querySelector("#action");
    action.addEventListener("click",function(){
      var H=pages();
        getMovies(G+12+","+28+H);
    });
    let romance= document.querySelector("#romance");
    romance.addEventListener("click",function(){
        var H=pages();
        getMovies(G+35+","+10749+H);
    });
   
    let anime= document.querySelector("#anime");
    anime.addEventListener("click",function(){
        var H=pages();
        getMovies(G+16+","+12+H);
    });
   
 

    
