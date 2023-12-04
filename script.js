fetch('data.json')
    .then(response => response.json())
    .then(data => {
        /* Work */
        const workHours = document.getElementById('currentTimeWork');
        const lastDWMWork = document.getElementById('lastDWMWork');

        /* Day Work */
        workHours.innerHTML = data[0].timeframes.daily.current + "hrs";
        lastDWMWork.innerHTML = "Last Day" + " - " +data[0].timeframes.daily.previous + "hrs";

        /* Week Work */
        workHours.innerHTML = data[0].timeframes.weekly.current + "hrs";
        lastDWMWork.innerHTML = "Last Week" + " - " +data[0].timeframes.weekly.previous + "hrs";

        /* Month Work */
        workHours.innerHTML = data[0].timeframes.monthly.current + "hrs";
        lastDWMWork.innerHTML = "Last Month" + " - " +data[0].timeframes.monthly.previous + "hrs";

        /* Play */
        const playHours = document.getElementById('currentTimePlay');
        const lastDWMPlay = document.getElementById('lastDWMPlay');

        /* Day Play */
        playHours.innerHTML = data[1].timeframes.daily.current + "hrs";
        lastDWMPlay.innerHTML = "Last Day" + " - " +data[1].timeframes.daily.previous + "hrs";

        /* Week Play */
        playHours.innerHTML = data[1].timeframes.weekly.current + "hrs";
        lastDWMPlay.innerHTML = "Last Week" + " - " +data[1].timeframes.weekly.previous + "hrs";

        /* Month Play */
        playHours.innerHTML = data[1].timeframes.monthly.current + "hrs";
        lastDWMPlay.innerHTML = "Last Month" + " - " +data[1].timeframes.monthly.previous + "hrs";

        /* Study */
        const studyHours = document.getElementById('currentTimeStudy');
        const lastDWMStudy = document.getElementById('lastDWMStudy');

        /* Day Study */
        studyHours.innerHTML = data[2].timeframes.daily.current + "hrs";
        lastDWMStudy.innerHTML = "Last Day" + " - " +data[2].timeframes.daily.previous + "hrs";

        /* Week Study */
        studyHours.innerHTML = data[2].timeframes.weekly.current + "hrs";
        lastDWMStudy.innerHTML = "Last Week" + " - " +data[2].timeframes.weekly.previous + "hrs";

        /* Month Study */
        studyHours.innerHTML = data[2].timeframes.monthly.current + "hrs";
        lastDWMStudy.innerHTML = "Last Month" + " - " +data[2].timeframes.monthly.previous + "hrs";

        /* Exercise */
        const exerciseHours = document.getElementById('currentTimeExercise');
        const lastDWMExercise = document.getElementById('lastDWMExercise');

        /* Day Exercise */
        exerciseHours.innerHTML = data[3].timeframes.daily.current + "hrs";
        lastDWMExercise.innerHTML = "Last Day" + " - " +data[3].timeframes.daily.previous + "hrs";

        /* Week Exercise */
        exerciseHours.innerHTML = data[3].timeframes.weekly.current + "hrs";
        lastDWMExercise.innerHTML = "Last Week" + " - " +data[3].timeframes.weekly.previous + "hrs";

        /* Month Exercise */
        exerciseHours.innerHTML = data[3].timeframes.monthly.current + "hrs";
        lastDWMExercise.innerHTML = "Last Month" + " - " +data[3].timeframes.monthly.previous + "hrs";

        /* Social */
        const socialHours = document.getElementById('currentTimeSocial');
        const lastDWMSocial = document.getElementById('lastDWMSocial');

        /* Day Social */
        socialHours.innerHTML = data[4].timeframes.daily.current + "hrs";
        lastDWMSocial.innerHTML = "Last Day" + " - " +data[4].timeframes.daily.previous + "hrs";

        /* Week Social */
        socialHours.innerHTML = data[4].timeframes.weekly.current + "hrs";
        lastDWMSocial.innerHTML = "Last Week" + " - " +data[4].timeframes.weekly.previous + "hrs";

        /* Month Social */
        socialHours.innerHTML = data[4].timeframes.monthly.current + "hrs";
        lastDWMSocial.innerHTML = "Last Month" + " - " +data[4].timeframes.monthly.previous + "hrs";

        /* Self Care */
        const selfCareHours = document.getElementById('currentTimeSelfCare');
        const lastDWMSelfCare = document.getElementById('lastDWMSelfCare');

        /* Day Self Care */
        selfCareHours.innerHTML = data[5].timeframes.daily.current + "hrs";
        lastDWMSelfCare.innerHTML = "Last Day" + " - " +data[5].timeframes.daily.previous + "hrs";

        /* Week Self Care */
        selfCareHours.innerHTML = data[5].timeframes.weekly.current + "hrs";
        lastDWMSelfCare.innerHTML = "Last Week" + " - " +data[5].timeframes.weekly.previous + "hrs";

        /* Month Self Care */
        selfCareHours.innerHTML = data[5].timeframes.monthly.current + "hrs";
        lastDWMSelfCare.innerHTML = "Last Month" + " - " +data[5].timeframes.monthly.previous + "hrs";
    })