setInterval(
()=>{
if(!window.navigator.onLine){
document.querySelector("h1").innerHTML="No internet\nReload"
}
else{
document.querySelector("h1").innerHTML=""
}
}
)
var scroll=10000
function scr(){
scroll+=10000
document.querySelector("#chatscrn").scrollTo(0,scroll)
var al=document.querySelectorAll("pre")
for(i=0;i<al.length;i++){
al[al.length-1].style.transform="scale(1.2,1.2)"
setTimeout(
()=>{
al[al.length-1].style.transform="scale(1,1)"



},300

)
}
}


  var firebaseConfig = {
    apiKey: "AIzaSyBSd7lnf0QwXMW7812GqI0meyoMkDavR_E",
    authDomain: "chatbot-76792.firebaseapp.com",
    projectId: "chatbot-76792",
    storageBucket: "chatbot-76792.appspot.com",
    messagingSenderId: "191813395637",
    appId: "1:191813395637:web:0d169726cbd421c64d4afc",
    measurementId: "G-3SDQ7GLDC7"
  };
  firebase.initializeApp(firebaseConfig);

   let sscr=0 
  var bglist=["#FF4E50","#0269A4","#00B4AB","#FFD832","#12A4D9","#F34F1C","#7FBC00","#747474"]
  var r=bglist[Math.ceil(Math.random()*bglist.length-1)] 
  var nme; 
var key,content
function ready(){
nme=document.querySelector("#name").value
 content= document.getElementById("contentfield").value
 } 
function sm(){
ready()
firebase.database().ref('User/Test').on('value',function(snapshot){

var dt=document.createElement("div")
var d=dt.style
d.width="200px"
d.height="200px"
d.backgroundSize="cover"
 d.background=r
 d.padding="5px"
}
)

}
get()
function get(){
ready()

firebase.database().ref('User/Test').on('value',function(snapshot){
 var c=document.createElement("pre")
 var dp=document.createElement("div")
 document.getElementById("chatscrn").appendChild(c)
 document.getElementById("chatscrn").appendChild(dp)
 var st=c.style
 var dps=dp.style
 dp.setAttribute("id","imgme")
 dps.width="50px"
 dps.height="50px"
 dps.backgroundSize="cover"
 dps.background=r
  dps.backgroundSize="cover"
 dps.marginTop="-60px"

 st.padding="5px"
 st.width=window.innerWidth-100+"px"
 st.borderLeft="10px solid gold"
 st.marginLeft="60px"
sscr+=100000
 st.background="#f5f5dc"
 st.borderColor=r
document.querySelector("p").innerHTML="CONNECTED"
document.querySelector("audio").play()
 c.textContent=snapshot.val().name+"\n\n"+snapshot.val().content
  document.querySelector("#chatscrn").scrollTo(0,sscr)

}


 )
 }
 function pr(event){
 event.preventDefault()
 event.stopPropagation()
  
 
 }

 
  function update(){
    ready()
 firebase.database().ref('User/Test').update({
content:document.getElementById("contentfield").value,
name:document.querySelector("#name").value
  }  
  )
sscr+=100000
if(nme=="ProGamer"){
  document.querySelector("#imgme").style.boxShadow="0px 0px 20px "+r
}

  document.querySelector("#name").style.opacity=0
  document.querySelector("#name").disabled="disabled"
  document.querySelector("#chatscrn").scrollTo(0,sscr)
  document.querySelector("textarea").value=""

   }
