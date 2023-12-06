fetch('data.json')
    .then(response => response.json())
    .then(data => {
        /* buttons */
        const dayButton = document.getElementById('daily')
        const weekButton = document.getElementById('weekly')
        const monthlyButton = document.getElementById('monthly')

        /*Work*/
        const workHours = document.getElementById('currentTimeWork');
        const lastDWMWork = document.getElementById('lastDWMWork');
        /*Play*/
        const playHours = document.getElementById('currentTimePlay');
        const lastDWMPlay = document.getElementById('lastDWMPlay');
        /*Study*/
        const studyHours = document.getElementById('currentTimeStudy');
        const lastDWMStudy = document.getElementById('lastDWMStudy');
        /*Exercise*/
        const exerciseHours = document.getElementById('currentTimeExercise');
        const lastDWMExercise = document.getElementById('lastDWMExercise');
        /*Social */
        const socialHours = document.getElementById('currentTimeSocial');
        const lastDWMSocial = document.getElementById('lastDWMSocial');
        /*Self Care*/
        const selfCareHours = document.getElementById('currentTimeSelfCare');
        const lastDWMSelfCare = document.getElementById('lastDWMSelfCare');

        dayButton.addEventListener('click', function(){
        /*Daily*/
                /*Day Work*/
                workHours.innerHTML = data[0].timeframes.daily.current + "hrs";
                lastDWMWork.innerHTML = "Last Day" + " - " +data[0].timeframes.daily.previous + "hrs";
                /*Day Play*/
                playHours.innerHTML = data[1].timeframes.daily.current + "hrs";
                lastDWMPlay.innerHTML = "Last Day" + " - " +data[1].timeframes.daily.previous + "hrs";
                /*Day Study*/
                studyHours.innerHTML = data[2].timeframes.daily.current + "hrs";
                lastDWMStudy.innerHTML = "Last Day" + " - " +data[2].timeframes.daily.previous + "hrs";
                /*Day Exercise*/
                exerciseHours.innerHTML = data[3].timeframes.daily.current + "hrs";
                lastDWMExercise.innerHTML = "Last Day" + " - " +data[3].timeframes.daily.previous + "hrs";
                /*Day Social*/
                socialHours.innerHTML = data[4].timeframes.daily.current + "hrs";
                lastDWMSocial.innerHTML = "Last Day" + " - " +data[4].timeframes.daily.previous + "hrs";
                /*Day Self Care*/
                selfCareHours.innerHTML = data[5].timeframes.daily.current + "hrs";
                lastDWMSelfCare.innerHTML = "Last Day" + " - " +data[5].timeframes.daily.previous + "hrs";      
        })
        weekButton.addEventListener('click', function(){
        /*Weekly*/      
                /*Week Work*/
                workHours.innerHTML = data[0].timeframes.weekly.current + "hrs";
                lastDWMWork.innerHTML = "Last Week" + " - " +data[0].timeframes.weekly.previous + "hrs";
                /*Week Play*/
                playHours.innerHTML = data[1].timeframes.weekly.current + "hrs";
                lastDWMPlay.innerHTML = "Last Week" + " - " +data[1].timeframes.weekly.previous + "hrs";
                /*Week Study*/
                studyHours.innerHTML = data[2].timeframes.weekly.current + "hrs";
                lastDWMStudy.innerHTML = "Last Week" + " - " +data[2].timeframes.weekly.previous + "hrs";
                /*Week Exercise*/
                exerciseHours.innerHTML = data[3].timeframes.weekly.current + "hrs";
                lastDWMExercise.innerHTML = "Last Week" + " - " +data[3].timeframes.weekly.previous + "hrs";
                /*Week Social*/
                socialHours.innerHTML = data[4].timeframes.weekly.current + "hrs";
                lastDWMSocial.innerHTML = "Last Week" + " - " +data[4].timeframes.weekly.previous + "hrs";
                /*Week Self Care*/
                selfCareHours.innerHTML = data[5].timeframes.weekly.current + "hrs";
                lastDWMSelfCare.innerHTML = "Last Week" + " - " +data[5].timeframes.weekly.previous + "hrs";

        })
        monthlyButton.addEventListener('click', function(){
        /*Monthly*/        
                /*Month Work*/
                workHours.innerHTML = data[0].timeframes.monthly.current + "hrs";
                lastDWMWork.innerHTML = "Last Month" + " - " +data[0].timeframes.monthly.previous + "hrs";
                /*Month Play*/
                playHours.innerHTML = data[1].timeframes.monthly.current + "hrs";
                lastDWMPlay.innerHTML = "Last Month" + " - " +data[1].timeframes.monthly.previous + "hrs";
                /*Month Study*/
                studyHours.innerHTML = data[2].timeframes.monthly.current + "hrs";
                lastDWMStudy.innerHTML = "Last Month" + " - " +data[2].timeframes.monthly.previous + "hrs";
                /*Month Exercise*/
                exerciseHours.innerHTML = data[3].timeframes.monthly.current + "hrs";
                lastDWMExercise.innerHTML = "Last Month" + " - " + data[3].timeframes.monthly.previous + "hrs";
                /*Month Social*/
                socialHours.innerHTML = data[4].timeframes.monthly.current + "hrs";
                lastDWMSocial.innerHTML = "Last Month" + " - " +data[4].timeframes.monthly.previous + "hrs";
                /*Month Self Care*/
                selfCareHours.innerHTML = data[5].timeframes.monthly.current + "hrs";
                lastDWMSelfCare.innerHTML = "Last Month" + " - " +data[5].timeframes.monthly.previous + "hrs";
        })
    })