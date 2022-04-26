'use strict';

class TeamSports {
    constructor(activity, arena, rules, playTime) {
        this.activity = activity;
        this.arena = arena;
        this.rules = rules;
        this.playTime = playTime;
    }
    gamePlay() {
        console.log('This is so fun!');
    }
    
    delete() {
        console.log('delete');
    }
}

class Hockey extends TeamSports {
    constructor(activity, arena, rules, playTime, team, playingItem, skills = []) {
        super(activity, arena, rules, playTime);
        this.team = team;
        this.playingItem = playingItem;
        this._skills = skills;
    }

    get skills() {
        return this._skills;
    }

    set skills(str) {
        this.skills.push(str);
    }
}

class Football extends TeamSports {
    constructor(activity, arena, rules, playTime, team, playingItem, skills = []) {
        super(activity, arena, rules, playTime);
        this.team = team;
        this.playingItem = playingItem;
        this._skills = skills;
    }

    get skills() {
        return this._skills;
    }

    set skills(str) {
        this._skills.push(str);
    }
}

const chooseSportType = function () {
    let football = document.getElementById("Football");
    let hockey = document.getElementById("Hockey");
    let sportType;

    if (football.checked == false && hockey.checked == false) {
        document.getElementById("sport_alert").innerHTML = "Please Select Sport Type";
        document.getElementById("sport_alert").style.color = "red"; 
    }

    if (football.checked) {
        sportType = football.value;
        return sportType;
    } else {
        sportType = hockey.value;
        return sportType;
    }
}


function makeNewSport() {
    let sportType = chooseSportType();
    let sportName = document.getElementById("sport-name").value;
    let activity = document.getElementById("activity").value;
    let arena = document.getElementById("arena").value;
    let rules = document.getElementById("rules").value;
    let playingTime = document.getElementById("playing-time").value;
    let skills = document.getElementById("skills").value;
    let team = document.getElementById("team").value;
    let playingItem = document.getElementById("playing-item").value;
    
    let sportNamePatt = /^[A-Za-z]+$/g;
    let activityPatt = /^[A-Za-z]+$/g;
    let arenaPatt = /^[A-Za-z]+$/g;


    let table = document.getElementsByTagName('table')[0];

    let newRow = table.insertRow(table.rows.length);

    //sportName Validation

    if (sportNamePatt.test(sportName) == false) {
        document.getElementById("sport-name_alert").innerHTML = "Numbers Here";
        document.getElementById("sport-name_alert").style.color = "red";
    }

    if (sportName.length == 0) {
        document.getElementById("sport-name_alert").innerHTML = "Sports Name Should Not be Blank";
        document.getElementById("sport-namee_alert").style.color = "red";
    }

    //activity Validation

    if (activityPatt.test(activity) == false) {
        document.getElementById("activity_alert").innerHTML = "Numbers Here";
        document.getElementById("activity_alert").style.color = "red";
    }

    if (activity.length == 0) {
        document.getElementById("lname_alert").innerHTML = "Activity Should Not be Blank";
        document.getElementById("lname_alert").style.color = "red";
    }

    // arena Validation

    if (arenaPatt.test(arena) == false) {
        document.getElementById("arena_alert").innerHTML = "Numbers Here";
        document.getElementById("arena_alert").style.color = "red";
    }

    if (arena.length == 0) {
        document.getElementById("arena_alert").innerHTML = "Arena Should Not be Blank";
        document.getElementById("arena_alert").style.color = "red";
    }

    //rules Validation

    if (rules.length == 0) {
        document.getElementById("rules_alert").innerHTML = "Rules Should Not be Blank";
        document.getElementById("rules_alert").style.color = "red";
    }

    // playingTime Validation

    if (playingTime.length == 0) {
        document.getElementById("playing-time_alert").innerHTML = "Rules Should Not be Blank";;
        document.getElementById("playing-time_alert").style.color = "red";
    }
    
    

    

    //let sport = sportName.value;
    //sportName = new SportType (activity, arena, rules, playingTime, team, playingItem, skills);
    


    let cel1 = newRow.insertCell(0);
    let cel2 = newRow.insertCell(1);
    let cel3 = newRow.insertCell(2);
    let cel4 = newRow.insertCell(3);
    let cel5 = newRow.insertCell(4);
    let cel6 = newRow.insertCell(5);
    let cel7 = newRow.insertCell(6);
    let cel8 = newRow.insertCell(7);
    let cel9 = newRow.insertCell(8);
   

    cel1.innerHTML = sportType;
    cel2.innerHTML = sportName;
    cel3.innerHTML = activity;
    cel4.innerHTML = arena;
    cel5.innerHTML = rules;
    cel6.innerHTML = playingTime;
    cel7.innerHTML = team;
    cel8.innerHTML = playingItem;
    cel9.innerHTML = skills;
}


/* function selectSportType() {
    let football = document.getElementById("Football").checked;
    let hockey = document.getElementById("Hockey").checked;

    if (football == false && hockey == false) {
        document.getElementById("sport_alert").innerHTML = "Please Select Sport Type";
        document.getElementById("sport_alert").style.color = "red";

    } else if (football == true) {
        sport = sport.innerHTML = "Football";
    } else {
        sport = sport.innerHTML = "Hockey";
    }
    return sport;
} */