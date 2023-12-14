const table= document.getElementById("sampleTable");
let tbody= document.querySelector("tbody");
console.log(tbody);
let first_child= document.querySelectorAll("tr")[0];
console.log(first_child);

// let cell_NO=0;
function insert_Row() {
    //Write your code here
	const tr= document.createElement("tr");
	const td1= document.createElement("td");
	const td2= document.createElement("td");
	// cell_NO =++cell_NO;
	td1.innerText= "New Cell1";
	td2.innerText= "New Cell2";

	tr.append(td1,td2);
	tbody.insertBefore(tr, first_child);
	first_child= tr;
	
	
  
  
}
