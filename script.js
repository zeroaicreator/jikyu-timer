const today = new Date().toISOString().split("T")[0];
document.getElementById("workDate").value = today;

function saveShift() {
  const shift = {
    date: document.getElementById("workDate").value,
    wage: Number(hourlyWage.value),
    start: startTime.value,
    end: endTime.value
  };

  if (!shift.date || !shift.wage || !shift.start || !shift.end) {
    alert("全部入力してな");
    return;
  }

  localStorage.setItem("shift-" + shift.date, JSON.stringify(shift));
  alert("保存したで！");
}

function loadTodayShift() {
  const data = localStorage.getItem("shift-" + today);
  if (!data) return null;
  return JSON.parse(data);
}

function updateEarnings() {
  const shift = loadTodayShift();
