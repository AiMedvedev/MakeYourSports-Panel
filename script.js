'use strict';
document.addEventListener("DOMContentLoaded", () => {
    const submitBtn = document.querySelector('.form-container .btn-default')
    const sportsArray = JSON.parse(localStorage.getItem("sports")) || [];
    let deleteBtns;

    class TeamSports {
        constructor(sportName, activity, arena, rules, playTime) {
            this.sportName = sportName;
            this.activity = activity;
            this.arena = arena;
            this.rules = rules;
            this.playTime = playTime;
        }
        gamePlay() {
            console.log('This is so fun!');
        }

        delete() {
            
        }
    }

    class Hockey extends TeamSports {
        constructor(sportName, activity, arena, rules, playTime, team, playingItem, skills = [], sportClass) {
            super(sportName, activity, arena, rules, playTime);
            this.team = team;
            this.playingItem = playingItem;
            this._skills = skills;
            this.sportClass = sportClass;
        }

        get skills() {
            return this._skills;
        }

        set skills(str) {
            this.skills.push(str);
        }
    }

    class Football extends TeamSports {
        constructor(sportName, activity, arena, rules, playTime, team, playingItem, skills = [], sportClass) {
            super(sportName, activity, arena, rules, playTime);
            this.team = team;
            this.playingItem = playingItem;
            this._skills = skills;
            this.sportClass = sportClass;
        }

        get skills() {
            return this._skills;
        }

        set skills(str) {
            this._skills.push(str);
        }
    }

    const addNewRow = (obj) => {
        let table = document.getElementsByTagName('table')[0];
        let newRow = table.insertRow(table.rows.length);

        let cel1 = newRow.insertCell(0);
        let cel2 = newRow.insertCell(1);
        let cel3 = newRow.insertCell(2);
        let cel4 = newRow.insertCell(3);
        let cel5 = newRow.insertCell(4);
        let cel6 = newRow.insertCell(5);
        let cel7 = newRow.insertCell(6);
        let cel8 = newRow.insertCell(7);
        let cel9 = newRow.insertCell(8);
        let cel10 = newRow.insertCell(9);

        cel1.innerHTML = obj.sportClass;
        cel2.innerHTML = obj.sportName;
        cel3.innerHTML = obj.activity;
        cel4.innerHTML = obj.arena;
        cel5.innerHTML = obj.rules;
        cel6.innerHTML = obj.playTime;
        cel7.innerHTML = obj.team;
        cel8.innerHTML = obj.playingItem;
        cel9.innerHTML = obj._skills;
        cel10.innerHTML = `<img src="delete.svg" class="delete" id="${table.rows.length - 1}" alt="basket">`;
        
        deleteRow();
        localStorage.setItem('sports', JSON.stringify(sportsArray));
    }

    const makeNewSport = () => {
        let sportClass;
        let sportName = document.getElementById("sport-name").value;
        let activity = document.getElementById("activity").value;
        let arena = document.getElementById("arena").value;
        let rules = document.getElementById("rules").value;
        let playingTime = document.getElementById("playing-time").value;
        let skills = document.getElementById("skills").value;
        let team = document.getElementById("team").value;
        let playingItem = document.getElementById("playing-item").value;
        let sport;

        sportsArray.value = JSON.parse(localStorage.getItem("sports"));

        if (select.value === 'Football') {
            sportClass = 'Football';
            sport = new Football(sportName, activity, arena, rules, playingTime, team, playingItem, skills, sportClass);
        } else if (select.value === 'Hockey'){
            sportClass = 'Hockey';
            sport = new Hockey(sportName, activity, arena, rules, playingTime, team, playingItem, skills, sportClass);
        }


        let sportNamePatt = /^[A-Za-z- ]+$/g;
        let activityPatt = /^[A-Za-z -]+$/g;
        let arenaPatt = /^[A-Za-z -\/()]+$/g;

        if (sportNamePatt.test(sportName) == false) {
            document.getElementById("sport-name_alert").innerHTML = "Numbers Here";
            document.getElementById("sport-name_alert").style.color = "red";
        }

        if (sportName.length == 0) {
            document.getElementById("sport-name_alert").innerHTML = "Sports Name Should Not be Blank";
            document.getElementById("sport-namee_alert").style.color = "red";
        }

        if (activityPatt.test(activity) == false) {
            document.getElementById("activity_alert").innerHTML = "Numbers Here";
            document.getElementById("activity_alert").style.color = "red";
        }

        if (activity.length == 0) {
            document.getElementById("lname_alert").innerHTML = "Activity Should Not be Blank";
            document.getElementById("lname_alert").style.color = "red";
        }

        if (arenaPatt.test(arena) == false) {
            document.getElementById("arena_alert").innerHTML = "Numbers Here";
            document.getElementById("arena_alert").style.color = "red";
        }

        if (arena.length == 0) {
            document.getElementById("arena_alert").innerHTML = "Arena Should Not be Blank";
            document.getElementById("arena_alert").style.color = "red";
        }

        if (rules.length == 0) {
            document.getElementById("rules_alert").innerHTML = "Rules Should Not be Blank";
            document.getElementById("rules_alert").style.color = "red";
        }

        if (playingTime.length == 0) {
            document.getElementById("playing-time_alert").innerHTML = "Rules Should Not be Blank";
            document.getElementById("playing-time_alert").style.color = "red";
        }

        sportsArray.push(sport);
        addNewRow(sport);
    }

    const deleteRow = () => {
         
        deleteBtns = document.querySelectorAll('.delete');
        deleteBtns.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.target.closest('tr').remove();
                sportsArray.splice((+e.target.id - 1), 1)
                localStorage.setItem('sports', JSON.stringify(sportsArray));
            })
        })
    }

    const clearInputs = () => {
        const inputs = document.querySelectorAll('input');
        const area = document.querySelector('textarea');
        inputs.forEach(input => {
            input.value = '';
        })
        area.value = '';
    }

    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        makeNewSport();
        clearInputs();
    });

    const render = function () { 
        const rows = document.querySelectorAll('tr');
        
        sportsArray.forEach(item => {
            addNewRow(item);
        });
    };

    render();
    deleteRow();
})