document.getElementById("loader").addEventListener("change", function(ev){
    window.alert("Holi");
    var file = ev.target.files[0];
    var fileReader = new FileReader();
    fileReader.onload = function(e){
        console.log(e.target.result);
    }
    fileReader.readAsText(file);
})