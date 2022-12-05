const parentID= document.getElementById('parentId');
const childID=document.getElementById('childID');

const parentCall = ()=>{
    alert("parent Div call");
}

const childCall = ()=>{
    alert("child Div Call");
    
}

parentID.addEventListener('click',parentCall);
childID.addEventListener('click',childCall); 