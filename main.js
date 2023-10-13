const firebaseConfig = {
    apiKey: "AIzaSyDIjIo7v4dYYGCietg7cX8C714is7H80Bw",
    authDomain: "first-fd160.firebaseapp.com",
    projectId: "first-fd160",
    storageBucket: "first-fd160.appspot.com",
    messagingSenderId: "239985244435",
    appId: "1:239985244435:web:e3c5cbe00c8901060cc2e6"
};
firebase.initializeApp(firebaseConfig)
var db = firebase.database()
var users = [{ad: "nazrin", sifre: "nazrin555"}, {ad: "gulnaz", sifre: "gulu777"}]
var ad;
$("#login").on("click", function(){
    if(localStorage.getItem('acarSoz')){
        var x = localStorage.getItem('acarSoz')
        db.ref('/' + "/mesajiniz").set('aaaa')
    }
    else{
        var x = db.ref().push({
            ad:"Gulu",
            mesajiniz: "abcdefg"
        })
        localStorage.setItem("acarSoz", x.key)
    }
    ad = $("#ad").val()
    var sifre = $("#sifre").val()
    for (const user of users) {
        if(ad==user.ad && user.sifre == sifre){
            $('.message-box').css({display: 'flex'})
            $('.sign').css({display: 'none'})
            return alert("Welcome")
        }
    }
    alert(" password or user name is wrong")
})
$("#send").on("click", function() {
    var mesajiniz = $("#mesaj").val()
    db.ref().set({
        ad,
        mesajiniz
    })
})
db.ref().on("value", function(snapshot){ 
    var x= snapshot.val()
    var circle = $('<div>').css({marginRight: "8px", borderRadius:'50%', minWidth: '50px', width: "50px", height:'50px', backgroundImage: "url(https://www.selectenglish.co.uk/wp-content/uploads/2022/11/no-user-image.gif)", backgroundSize: "100% 100%"})
    var p = $(`<p> ${x.ad}:  ${x.mesajiniz} </p>`)
    p.css({display: 'flex', alignItems: "center", whiteSpace: "break-spaces", height: 'auto', margin: "1.1em", backgroundColor: '#FFEEF0', borderRadius: '10px', padding: '10px'})
    p.prepend(circle)
$(".messages").append(p)
})