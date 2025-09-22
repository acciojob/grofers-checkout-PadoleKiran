const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  let sum = 0;
  let s = document.querySelectorAll('.price');

  s.forEach(cell => {
	  sum += parseInt(cell.textContent, 10);
  });

  // alert("sum is " + sum);
	document.getElementById("ans").textContent = sum;
};

getSumBtn.addEventListener("click", getSum);

