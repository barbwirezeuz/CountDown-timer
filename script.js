const targetDate = new Date ('January 30, 2024 00:00:00').getTime();

const countDown = setInterval(function(){
    currentDate =  new Date().getTime();

    const  timeRemaining = targetDate - currentDate;


    const averageMillisecondsPerMonth = 30.44 * 24 * 60 * 60 * 1000;
     const months = Math.floor(timeRemaining / averageMillisecondsPerMonth);
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);



        document.getElementById('months').innerHTML = months
        document.getElementById('days').innerHTML = days
        document.getElementById('hours').innerHTML = hours
        document.getElementById('minutes').innerHTML = minutes
        document.getElementById('seconds').innerHTML = seconds


        if (timeRemaining < 0){
            clearInterval(countDown);
        }
}, 1000)