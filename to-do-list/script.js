function newElement(){
    let DOM_TASK = document.getElementById("task");
    if (DOM_TASK.value.trim() === "") {
      console.log("task boş");
      showErrorToast();          
    }
    else{
      const list = document.createElement("li");
      const text = document.createTextNode(DOM_TASK.value);
      list.appendChild(text);
      
      var DOM_LI = document.getElementById("list").appendChild(list);
      DOM_TASK.value = "";

      var span = document.createElement("span");
      var txt = document.createTextNode("\u00D7");
      
      span.className = "close";
      span.appendChild(txt);
      list.appendChild(span);

      span.onclick = function() { 
        var div = this.parentElement;
        div.style.display = "none";
      };

      list.onclick = function() {
        this.classList.toggle("checked");
      };

      console.log("dolu");
      showSuccedToast();
    }
  }

  function showSuccedToast(){
    var DOM_TOAST = document.getElementById("liveToast");
    DOM_TOAST.classList.remove("hide");
    DOM_TOAST.classList.add("show");
    setTimeout(function(){
      DOM_TOAST.classList.remove("show")
      DOM_TOAST.classList.add("hide")
    },3000);
  }

  function showErrorToast(){
    var DOM_TOAST_ERROR = document.getElementById("liveToastError");
    DOM_TOAST_ERROR.classList.remove("hide");
    DOM_TOAST_ERROR.classList.add("show");
    setTimeout(function(){
      DOM_TOAST_ERROR.classList.remove("show")
      DOM_TOAST_ERROR.classList.add("hide")
    },3000);
  }

var myNodeList = document.getElementsByTagName("LI");
for (let i = 0; i < myNodeList.length; i++) {
    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    
    span.className = "close";
      span.appendChild(txt);
      list.appendChild(span);

      myNodeList[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
    close[i].onclick=function(){
        var div = this.parentElement;
        div.style.display="none";
    }
}

var ul = document.querySelector("ul");
ul.addEventListener("click", function(ev){
    if(ev.target.tagName ==="LI"){
        ev.target.classList.toggle("checked");
    }
}, false);