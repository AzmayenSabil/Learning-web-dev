
const input = document.querySelector('.search-input');
const searchForm = document.querySelector('.search-form');

let userName;
let currentSearch;

input.addEventListener("input", (e) => {
    userName = e.target.value;
});

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    currentSearch = userName
    getUserDetails(currentSearch);
});

async function fetchApi(url){
    const data = await fetch(url, {
        method: 'GET',
        headers: {
            Accept: "application/json"
        }
    });
    const res = await data.json();
    return res;
}

function generateInfo(res){
    const div = document.querySelector('.result');
    //console.log(res);
    if(res == -1){
        div.innerHTML = `<pre>USER NOT FOUND (wrong handle)</pre>`;
    }
    div.innerHTML = `
    <pre>
    Country = ${res.result[0].country}
    Number Of friends = ${res.result[0].friendOfCount}
    Current Rating = ${res.result[0].rating}
    Organization = ${res.result[0].organization}
    </pre>
    `;
}

async function getUserDetails(userName){
    // console.log(userName);
    url= `https://codeforces.com/api/user.info?handles=${userName}`;
    //console.log(url);
    const res = await fetchApi(url);
    if(res.status != "OK"){
        console.log("error");
        generateInfo(-1);
    }else{
        generateInfo(res);
    }
}


