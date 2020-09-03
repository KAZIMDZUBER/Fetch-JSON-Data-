//Target Element
let fetch = document.getElementById('btn');
fetch.addEventListener('click', btnclick);

//GET Request
function btnclick() {
    //Create Object
    let xhr = new XMLHttpRequest();
    //GET Request
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

    //On Progress
    xhr.onprogress = function () {
        console.log('on progress');
    }

    xhr.onload = function () {
        if (this.status === 200) {
            let obj = JSON.parse(this.responseText);
            //Target Table raw element
            let list = document.getElementById('list');
            let str = "";
            //loop
            for(let key in obj) {
                str += `<tr>
                    <th scope="row">${obj[key].id}</th>
                    <td>${obj[key].title}</td>
                    <td>${obj[key].body}</td>
                     </tr>`;
    
           list.innerHTML = str;
            }
        }
        else {
            console.log("Eroor");
        }
    }
     //Send Object
    xhr.send();
}