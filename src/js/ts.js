function imprimete(){ 
    document.write("<br>Nombre: " + this.cont_temp) 
} 
function TablaS() {
    this.Funciones = {}
    this.Variables={}
    this.Elements={}
    this.ambito_actual= ''
    this.cont_temp=0
}