// const ile yaptığımda çalışmadı  . çünkü değer ataması yapmadım  hemen sonrasında yaptım.

function Clock()
{
   let date= new Date();
   let hour= date.getHours();
   let minute= date.getMinutes();
   let second= date.getSeconds();
   let session="AM"

   if(hour>12)
   {
    hour= hour-12
    session="PM"
   }
   if(hour==0)
   {
    hour= 12
   }
   hour=(hour<10)?"0"+hour:hour;
   minute=(minute<10)?"0"+minute:minute;
second=(second<10)?"0"+second:second;
 
const time=hour +":"+minute +":"+second +":" +session;

document.getElementById("Clockk").innerText=time;
document.getElementById("Clockk").textContent=time;
// setTimeout(Clock,1000) // belirli bir süre için işlemi bir kere uygular
  setInterval(Clock,1000); // belirli zaman aralıklarında işlemi tekrarlar.
}
Clock()