document.getElementById('add-btn').addEventListener('click', function() {
   var input=document.getElementById('task-input').value;
   if(input==="") 
    {
    alert("Please enter a task");
    return;
   }
   var li=document.createElement('li');
   li.textContent=input+" ";
   li.addEventListener('click', function() {
    li.classList.toggle("completed");
});

   document.getElementById('task-list').appendChild(li);
    console.log(input );
    document.getElementById('task-input').value = "";
    var btn=document.createElement('button');
    btn.textContent="Delete";
    li.appendChild(btn);
    li.append(" ", btn);
    btn.addEventListener('click', function(){
    li.remove();});
});


