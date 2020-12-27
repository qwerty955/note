function change (font){
    document.documentElement.style.setProperty("--font", font)
}
document.getElementById("save").addEventListener("click",()=>{
    console.log(document.getElementById("title").value.length);
    if (document.getElementById("title").value.length<=3){
        alert("Note title can be at least 3 characters")
    }else{
        let num = 0;
    if (localStorage.getItem("number")!=undefined||localStorage.getItem("number")!=null){
        num=localStorage.getItem("number");
    }
    let d = new Date();
    let s = d.getSeconds();
    let m = d.getMinutes();
    let h = d.getHours();
    let da = d.getDate();
    let mo = d.getMonth()+1;
    let y = d.getFullYear();
    let cr = document.createElement("div");
    let crr = document.createElement("div");
    cr.className="card";
    crr.className="card-body";
    crr.innerHTML="<h1 class='card-title'"+document.getElementById("title").value+"'>"+document.getElementById("title").value+"</h1><p class='card-text'>data: "+da+":"+mo+":"+y+"</p><p class='card-text'>time: "+s+":"+m+":"+h+"</p>";
    document.getElementById("card-group").appendChild(cr);
    cr.appendChild(crr)
    num++;
    localStorage.setItem("number",num)
    localStorage.setItem("note"+localStorage.getItem("number"),document.getElementById("floatingTextarea2").value);
    localStorage.setItem("noteTitle"+localStorage.getItem("number"),document.getElementById("title").value);
    localStorage.setItem("but"+localStorage.getItem("number"),crr.innerHTML);
    localStorage.setItem("font"+localStorage.getItem("number"),document.getElementById("sel").value);
    document.getElementById("sel").value="Arial, Helvetica, sans-serif";
    change("Arial, Helvetica, sans-serif");
    localStorage.setItem("Buts",document.querySelectorAll(".card").length);
    document.getElementById("floatingTextarea2").value="";
    document.getElementById("title").value="new note";
    for (let i = 1;i<=localStorage.getItem("Buts");i++){
        crr.addEventListener("click",()=>{
            document.getElementById("inp").value="";
            document.getElementById("floatingTextarea2").value=localStorage.getItem("note"+i);
            document.getElementById("title").value=localStorage.getItem("noteTitle"+i);
            document.getElementById("sel").value=localStorage.getItem("font"+i);
            change(localStorage.getItem("font"+i));
        })
    }
    }
})
if (localStorage.getItem("Buts")!=undefined||localStorage.getItem("Buts")!=null){
    console.log(localStorage.getItem("Buts"));
    for (let i = 1;i<=localStorage.getItem("Buts");i++){
        console.log(i);
        let cr2 = document.createElement("div");
        let crr2 = document.createElement("div");
        cr2.className="card";
        crr2.className="card-body";
        crr2.innerHTML=localStorage.getItem("but"+i);
        document.getElementById("card-group").appendChild(cr2);
        cr2.appendChild(crr2)
        crr2.addEventListener("click",()=>{
            document.getElementById("inp").value="";
            document.getElementById("floatingTextarea2").value=localStorage.getItem("note"+i);
            document.getElementById("title").value=localStorage.getItem("noteTitle"+i);
            document.getElementById("sel").value=localStorage.getItem("font"+i);
            change(localStorage.getItem("font"+i));
        })
    }
}
document.getElementById("inp").oninput=function(){
    let v =document.getElementById("inp").value.trim();
    let al = document.querySelectorAll(".card-title");
    if (v.value!=""){
        al.forEach(function (ev){
            console.log(ev.parentNode.parentNode)
            if (ev.innerText.search(v)==-1){
                ev.parentNode.parentNode.classList.add("hide")
                console.log();
            }else{
                ev.parentNode.parentNode.classList.remove("hide")
                let r = ev.innerText;
                ev.innerHTML=m(r, ev.innerText.search(v), v.length);
            }
        })
    }else{
        al.forEach(function (ev){
            for (i=0;i<document.querySelectorAll(".card").length;i++){
            ev.parentNode.parentNode.classList.remove("hide")
            }
        });
    }
}
function m (string, b,l){
    return string.slice(0,b)+"<span>"+string.slice(b,b+l)+"</span>"+string.slice(b+l);
}
document.getElementById("url").onchange=()=>{
    console.log(document.getElementById("url").value)
    document.body.style.background="url(https://"+document.getElementById("url").value+") repeat";
    document.body.style.backgroundSize="contain";
}