function showClock() {

    const now = new Date();
 // const hours = now.getHours().toString().padStart(2, 0); 
    let hours = now.getHours();
    const ampm = hours > 12 ? "PM" : "AM";
    hours = hours % 12;                         // Convert to 12-hour format
    hours = hours.toString().padStart(2, 0);
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
    const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;

    document.getElementById("clock").textContent = timeString;

}
showClock();
setInterval(showClock, 1000);