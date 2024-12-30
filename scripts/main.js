var acc = document.getElementsByClassName("accordion");
            var i;
            
            for (i = 0; i < acc.length; i++) {
              acc[i].addEventListener("click", function() {
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if (panel.style.maxHeight) {
                  panel.style.maxHeight = null;
                } else {
                  panel.style.maxHeight = panel.scrollHeight + "px";
                } 
              });
            }

// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2025 23:59:59").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("rm-timer").innerHTML = days + "д " + hours + "ч "
  + minutes + "м " + seconds + "с";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("rm-timer").innerHTML = "EXPIRED";
  }
}, 1000);


// ДАТА В ДОМАШКЕ

// Создаем новый экземпляр объекта Date
const currentDate = new Date();
        
// Получаем номер недели в месяце
const weekInMonth = Math.ceil(currentDate.getDate() / 7);

// Получаем текущий месяц
const monthIndex = currentDate.getMonth();
const monthNames = ["января", "февраля", "марта", "апреля", "мая", "июня",
                    "июля", "августа", "сентября", "октября", "ноября", "декабря"];
const month = monthNames[monthIndex];

// Выводим результат в параграф на странице
document.getElementById("week").innerText = `${weekInMonth}-я неделя ${month}`;