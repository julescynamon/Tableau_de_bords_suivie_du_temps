// buttons
const daily = document.getElementById('daily');
const weekly = document.getElementById('weekly');
const monthly = document.getElementById('monthly');

// hours et prev hours
const workHours = document.getElementById('workHours');
const workPrevHours = document.getElementById('workPrevHours');
const playHours = document.getElementById('playHours');
const playPrevHours = document.getElementById('playPrevHours');
const studyHours = document.getElementById('studyHours');
const studyPrevHours = document.getElementById('studyPrevHours');
const exerciceHours = document.getElementById('exerciceHours');
const exercicePrevHours = document.getElementById('exercicePrevHours');
const socialHours = document.getElementById('socialsHours');
const socialPrevHours = document.getElementById('socialsPrevHours');
const selfCareHours = document.getElementById('selfCareHours');
const selfCarePrevHours = document.getElementById('selfCarePrevHours');

async function getData() {
    const response = await fetch('../data.json');
    const data = await response.json();

    
    daily.addEventListener('click', () => {
        daily.classList.add('active');
        weekly.classList.remove('active');
        monthly.classList.remove('active');

        workHours.innerHTML = `${data[0].timeframes.daily.current}hrs` ;
        workPrevHours.innerHTML = `Last Week - ${data[0].timeframes.daily.previous}hrs` ;
        playHours.innerHTML = `${data[1].timeframes.daily.current}hrs` ;
        playPrevHours.innerHTML = `Last Week - ${data[1].timeframes.daily.previous}hrs` ;
        studyHours.innerHTML = `${data[2].timeframes.daily.current}hrs` ;
        studyPrevHours.innerHTML = `Last Week - ${data[2].timeframes.daily.previous}hrs` ;
        exerciceHours.innerHTML = `${data[3].timeframes.daily.current}hrs` ;
        exercicePrevHours.innerHTML = `Last Week - ${data[3].timeframes.daily.previous}hrs` ;
        socialHours.innerHTML = `${data[4].timeframes.daily.current}hrs` ;
        socialPrevHours.innerHTML = `Last Week - ${data[4].timeframes.daily.previous}hrs` ;
        selfCareHours.innerHTML = `${data[5].timeframes.daily.current}hrs` ;
        selfCarePrevHours.innerHTML = `Last Week - ${data[5].timeframes.daily.previous}hrs` ;
    
    });

    weekly.addEventListener('click', () => {
        daily.classList.remove('active');
        weekly.classList.add('active');
        monthly.classList.remove('active');

        workHours.innerHTML = `${data[0].timeframes.weekly.current}hrs` ;
        workPrevHours.innerHTML = `Last Week - ${data[0].timeframes.weekly.previous}hrs` ;
        playHours.innerHTML = `${data[1].timeframes.weekly.current}hrs` ;
        playPrevHours.innerHTML = `Last Week - ${data[1].timeframes.weekly.previous}hrs` ;
        studyHours.innerHTML = `${data[2].timeframes.weekly.current}hrs` ;
        studyPrevHours.innerHTML = `Last Week - ${data[2].timeframes.weekly.previous}hrs` ;
        exerciceHours.innerHTML = `${data[3].timeframes.weekly.current}hrs` ;
        exercicePrevHours.innerHTML = `Last Week - ${data[3].timeframes.weekly.previous}hrs` ;
        socialHours.innerHTML = `${data[4].timeframes.weekly.current}hrs` ;
        socialPrevHours.innerHTML = `Last Week - ${data[4].timeframes.weekly.previous}hrs` ;
        selfCareHours.innerHTML = `${data[5].timeframes.weekly.current}hrs` ;
        selfCarePrevHours.innerHTML = `Last Week - ${data[5].timeframes.weekly.previous}hrs` ;
    });

    monthly.addEventListener('click', () => {
        daily.classList.remove('active');
        weekly.classList.remove('active');
        monthly.classList.add('active');

        workHours.innerHTML = `${data[0].timeframes.monthly.current}hrs` ;
        workPrevHours.innerHTML = `Last Week - ${data[0].timeframes.monthly.previous}hrs` ;
        playHours.innerHTML = `${data[1].timeframes.monthly.current}hrs` ;
        playPrevHours.innerHTML = `Last Week - ${data[1].timeframes.monthly.previous}hrs` ;
        studyHours.innerHTML = `${data[2].timeframes.monthly.current}hrs` ;
        studyPrevHours.innerHTML = `Last Week - ${data[2].timeframes.monthly.previous}hrs` ;
        exerciceHours.innerHTML = `${data[3].timeframes.monthly.current}hrs` ;
        exercicePrevHours.innerHTML = `Last Week - ${data[3].timeframes.monthly.previous}hrs` ;
        socialHours.innerHTML = `${data[4].timeframes.monthly.current}hrs` ;
        socialPrevHours.innerHTML = `Last Week - ${data[4].timeframes.monthly.previous}hrs` ;
        selfCareHours.innerHTML = `${data[5].timeframes.monthly.current}hrs` ;
        selfCarePrevHours.innerHTML = `Last Week - ${data[5].timeframes.monthly.previous}hrs` ;
    });
}

getData();












