const names = ["فهد", "صابر", "متعب","رفيف","طمية"];


function buton(){
    var rmainng = 5;
    var name = document.getElementById("inputtext").value;


    var ran =Math.floor(Math.random()*5);

    if ( inputtext.value == ""){
        alert("اكتب اسمك اول");

    }
    else if (name == names[ran]){
        buton();
    }
    else if (names[ran] == "gone") {
        buton()
    }
    else {
        alert(" طلع لك " + names[ran] )
        names[ran] = "gone";
        rmainng --;
        inputtext.value=""
        document.getElementById('rmainngid').value =(rmainng);
    }
}
