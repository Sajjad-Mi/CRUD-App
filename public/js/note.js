function update(elm){
    elm.parentElement.parentElement.firstElementChild.style.display="block";
    elm.parentElement.style.display="none";   
}      
 
function saveUpdate(formElm){
    const endpoint='notes';
    const title = formElm.parentElement.firstElementChild.value;
    const name = formElm.previousElementSibling.previousElementSibling.previousElementSibling.value;
    const text = formElm.previousElementSibling.value;
    fetch(endpoint, {
        method: 'PUT',
        body: JSON.stringify({ noteId: formElm.id, title, name, text }),
        headers: {'Content-Type': 'application/json'}
    }).then(response => response.json())
    .then(data=>{

       const noteDiv = formElm.parentElement.nextElementSibling;
       noteDiv.firstElementChild.innerText=title;
       noteDiv.firstElementChild.nextElementSibling.innerText=name;
       noteDiv.firstElementChild.nextElementSibling.nextElementSibling.innerText=text;
        
        noteDiv.style.display="block";
        formElm.parentElement.style.display="none";        
    })
    
   
}

function deleteNote(id){
    const endpoint = 'deleteNote';
    fetch(endpoint, {
        method: 'DELETE',
        body: JSON.stringify({ noteId: id }),
        headers: {'Content-Type': 'application/json'}
    }).then(response => response.json())
    .then(data=>{
        if(data==="note was deleted"){
            window.location.href="/notes"
        }
    })
}