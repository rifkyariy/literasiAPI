// get all param
const getParams = (query) => {
    return new URLSearchParams(query);
}

const urlParams = getParams(window.location.search);

// token params
const token = urlParams.get('token');
const fun = urlParams.get('fun');

// 
const baseAPIURL = new URL("https://literasi.divistant.com/webservice/rest/server.php");
const params = {
                "wstoken" : token, 
                "moodlewsrestformat" : "json",
                "wsfunction" : fun,
                "criteria[0][key]" : "username",
                "criteria[0][value]" : "testuser"
            }
baseAPIURL.search = new URLSearchParams(params).toString();

// fetch(
//         baseAPIURL, 
//         { 
//             // mode: 'cors', // no-cors, *cors, same-origin
//             // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//             // credentials: 'same-origin', // include, *same-origin, omit
//             headers: {
//                 'Content-Type': 'application/json'
//                 // 'Content-Type': 'application/x-www-form-urlencoded',
//             },
//             // redirect: 'follow', // manual, *follow, error
//             // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//         }
//     )
//     .then(res => res.json())
//     .then(response => {
//         console.log(response);
        
//     })
//     .catch(err => {
//         console.error("sorry, there are no results for your search")
//     });


$(document).ready(() => {
    $.get( 
        baseAPIURL, 
        function( data ) {
            $('#otong').text(JSON.stringify(data))
      });
})