/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var dividendo;
	var divisor;
	var resto;

	divisor=document.getElementById('numeroDivisor').value;
	dividendo=document.getElementById('numeroDividendo').value;
	 resto=parseInt(dividendo)/parseInt(divisor);

	 alert("el resto es " +resto);





}
