var nummames=0;
var names=new Array();
function insertar(){
    thename=document.form1.nombre.value;
    names[nummames]=thename;
    nummames++;
    names.sort();
    document.form1.sorted.values=names.join("\n");
}