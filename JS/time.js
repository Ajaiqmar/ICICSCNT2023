$(document).ready(function(){
  console.log("Hello");
  setInterval(function(){
    var d = Number($("#days").text());
    var h = Number($("#hours").text());
    var m = Number($("#minutes").text());
    var s = Number($("#seconds").text());

    var date = new Date();
    var endDate = new Date("March 26, 2023 00:00:00");

    var diff = endDate-date;

    if(diff < 0)
    {
      clearInterval(this);
    }

    if(Math.floor(diff/(1000*24*60*60)) !== d)
    {
      $("#days").text(Math.floor(diff/(1000*24*60*60)));
    }

    if(Math.floor(diff/(1000*60*60)) !== d)
    {
      $("#hours").text(Math.floor(diff/(1000*60*60))%24);
    }

    if(Math.ceil(diff/(1000*60)) !== d)
    {
      $("#minutes").text(Math.ceil(diff/(1000*60))%60);
    }

    if(Math.ceil(diff/1000) !== d)
    {
      $("#seconds").text(Math.ceil(diff/1000)%60);
    }

  },1000);
});
