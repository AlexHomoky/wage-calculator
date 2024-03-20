const input = document.getElementById("input");

const pension = document.getElementById("pensionResult");

const holiday = document.getElementById("holidayResult");

const opCost = document.getElementById("opResult");

const calculate = () => {
  const num = parseFloat(input.value);
  const calc1 = num * 1.3;
  const calc2 = (calc1 / 11) * 12;
  const calc3 = calc2 * 1.28;

  pension.textContent = "£ " + calc1.toFixed(2);
  holiday.textContent = "£ " + calc2.toFixed(2);
  opCost.textContent = "£ " + calc3.toFixed(2);
};

input.addEventListener("input", calculate);
