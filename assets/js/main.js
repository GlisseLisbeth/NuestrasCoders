array = [
          {name:"Nombre",lastname:"Apellido", img:"Coder1.png"},
          {name:"Nombre",lastname:"Apellido", img:"Coder2.png"},
          {name:"Nombre",lastname:"Apellido", img:"Coder1.png"},
          {name:"Nombre",lastname:"Apellido", img:"Coder2.png"},
          {name:"Nombre",lastname:"Apellido", img:"Coder1.png"},
          {name:"Nombre",lastname:"Apellido", img:"Coder2.png"}
        ]


window.addEventListener('load', function(){
  var body = document.getElementsByTagName('body')[0];

  var content = document.createElement('div');
  content.className = "content";
  body.appendChild(content);
  var elementoH2 = document.createElement('h2');
  elementoH2.appendChild(document.createTextNode("Nuestras Coders"));
  content.appendChild(elementoH2);

  var border = document.createElement('div');
  border.className = "border-title";
  content.appendChild(border);

  var fragment = document.createDocumentFragment();

  var elementoUl = document.createElement('ul');
  elementoUl.setAttribute('class','list-unstyled');

  array.forEach(function(e){
    elementoLi = document.createElement("li");
    elementoLi.setAttribute("class","col-4");
    elementoH4 = document.createElement("h4");
    elementoH4.innerHTML = e.name+" "+e.lastname;
    elementoDIV = document.createElement("div");
    elementoDIV.setAttribute("class","overlay");
    elementoIMG = document.createElement("img");
    elementoIMG.setAttribute("class","img-content");
    elementoIMG.setAttribute("src","assets/img/" + e.img);
    elementoLi.appendChild(elementoH4);
    elementoLi.appendChild(elementoDIV);
    elementoLi.appendChild(elementoIMG);
    fragment.appendChild(elementoLi);
  });

  elementoUl.appendChild(fragment);
  content.appendChild(elementoUl);
});
