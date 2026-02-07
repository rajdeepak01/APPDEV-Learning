//Get example of fetch api
/*
fetch("https://jsonplaceholder.typicode.com/posts",{
    method: "GET",
})
    .then((res) => res.json())
    .then((data) => {
        const posts_div = document.getElementById("posts");

        data.forEach((ele) => {
            const elemDiv = document.createElement("div");
            elemDiv.innerHTML = ele.title;
            posts_div.appendChild(elemDiv);
        });
    })
    .catch((err) => {
        console.error(err);
    }); 
*/
// POST example of fetch
/**
fetch("https://jsonplaceholder.typicode.com/posts",{
    method: "POST",
    body: JSON.stringify({title: "nosjeurd"})
}).then(res=>{
    console.log(res.status)
});
*/

// post using async await
/* 
async function postData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts",{
        method: "POST",
        body: JSON.stringify({ title: "Hello world!" })
    });
    console.log(res.status);
}

postData();
*/

// case where url not found
/* 
fetch("https://something.in")
    .then((res)=>{
        console.log(res);
    })
    .catch((err)=>{
        console.log("url not found ");
        
    })
*/

// case where server error

