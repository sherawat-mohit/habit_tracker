 // IFFE Method to redirect to the home page of habits
{
    $('#startButton').click(function(event){
        event.preventDefault();
        window.location.href = "http://localhost:3000/habits/dailyView";
    }
)};