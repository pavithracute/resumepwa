function getfile(file,callback){
  var xhr = new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange =function()
  {
    if(xhr.readyState===4 && xhr.status=="200")
    {
      callback(xhr.responseText);
    }
  };
  xhr.send();
}
getfile("data.json",function(text){
  let data = JSON.parse(text);
  console.log(data);
  details(data.basics);
  career(data.career);
});
var parent =document.querySelector(".flex-parent");

var child1=document.createElement("div");
child1.classList.add("profile");
parent.appendChild(child1);

var child2=document.createElement("div");
child2.classList.add("content");
parent.appendChild(child2);

function details(basics){
  var img=document.createElement("img");
  img.src=basics.photo;
  child1.appendChild(img);

var name=document.createElement("h3");
name.textContent=basics.name;
child1.appendChild(name);

var email=document.createElement("a");
email.href="nagaraninagisetty@gmail.com";
email.textContent=basics.email;
child1.appendChild(email);

var phone=document.createElement("h3");
phone.textContent=basics.mobile;
child1.appendChild(phone);

var Addr=document.createElement("h3");
Addr.textContent="Address:";
child1.appendChild(Addr);


var hr=document.createElement("hr");
child1.appendChild(hr);

var Addr=document.createElement("p");
Addr.textContent=basics.Address;
child1.appendChild(Addr);
}
function career(obj){
  var heading = document.createElement("h2");
  child2.appendChild(heading);
  heading.textContent="career objective";
  var hline=document.createElement("hr");
  child2.appendChild(hline);
  var p=document.createElement("p");
  p.textContent=obj.info;
child2.appendChild(p);

}
