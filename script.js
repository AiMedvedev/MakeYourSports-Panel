'use strict';

document.addEventListener("DOMContentLoaded", () => {
    const submitBtn = document.querySelector('.form-container .btn-default')
    let sportsArray = JSON.parse(localStorage.getItem("sports")) || [];

    class TeamSports {
        constructor(sportName, activity, arena, rules, playTime, id) {
            this.sportName = sportName;
            this.activity = activity;
            this.arena = arena;
            this.rules = rules;
            this.playTime = playTime;
            this.id = id;
        }
        gamePlay() {
            console.log('This is so fun!');
        }

        delete() {
            const tbody = document.getElementById('table-body');
    
            tbody.addEventListener('click', (e) => {
                
                if (e.target.closest('.delete')) {
                    const tr = e.target.closest('tr');
                    const id = tr.dataset.key;
                    
                    e.target.closest('tr').remove();
                    sportsArray.splice((id), 1)
                    localStorage.setItem('sports', JSON.stringify(sportsArray));
                }
            });

            render();
        }
    }

    class Hockey extends TeamSports {
        constructor(sportName, activity, arena, rules, playTime, id, team, playingItem, skills = [], sportClass) {
            super(sportName, activity, arena, rules, playTime, id);
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
        constructor(sportName, activity, arena, rules, playTime, id, team, playingItem, skills = [], sportClass) {
            super(sportName, activity, arena, rules, playTime, id);
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

    const makeNewSport = () => {
        
        let sportClass;
        let sportName = document.getElementById("sport-name").value;
        let activity = document.getElementById("activity").value;
        let arena = document.getElementById("arena").value;
        let rules = document.getElementById("rules").value;
        let playTime = document.getElementById("playing-time").value;
        let skills; //= document.getElementById("skills").value;
        let team = document.getElementById("team").value;
        let playingItem = document.getElementById("playing-item").value;
        let id = sportsArray.length;
        let sport;


        if (select.value === 'Football') {
            sportClass = 'Football';
            sport = new Football(sportName, activity, arena, rules, playTime, id, team, playingItem, skills, sportClass);
        } else if (select.value === 'Hockey'){
            sportClass = 'Hockey';
            sport = new Hockey(sportName, activity, arena, rules, playTime, id, team, playingItem, skills, sportClass);
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

        if (playTime.length == 0) {
            document.getElementById("playing-time_alert").innerHTML = "Rules Should Not be Blank";
            document.getElementById("playing-time_alert").style.color = "red";
        }

        sportsArray.push(sport);
        localStorage.setItem('sports', JSON.stringify(sportsArray));
        render();
    }

    const clearInputs = () => {
        const inputs = document.querySelectorAll('input');
        const area = document.querySelector('textarea');
        inputs.forEach(input => {
            input.value = '';
        })
        area.value = '';
    }

    const render = () => { 
        const tbody = document.getElementById('table-body');
        const arr = JSON.parse(localStorage.getItem("sports"));
        
        tbody.innerHTML = '';
        sportsArray = [];
        
        if (arr !== null) {
            arr.forEach((sport) => {
                if (sport.sportClass === 'Football') {
                    sport = new Football(sport.sportName, sport.activity, sport.arena, sport.rules, sport.playTime, sport.id, sport.team, sport.playingItem, sport.skills, sport.sportClass);
                } else if (sport.sportClass === 'Hockey'){
                    sport = new Hockey(sport.sportName, sport.activity, sport.arena, sport.rules, sport.playTime, sport.id, sport.team, sport.playingItem, sport.skills, sport.sportClass);
                }
                sportsArray.push(sport);
                return sportsArray;
            });
            
            sportsArray.forEach(item => {
                tbody.insertAdjacentHTML('beforeend', `
                    <tr data-key="${item.id}">
                        <th scope="row">${item.id}</th>
                        <td>${item.sportClass}</td>
                        <td>${item.sportName}</td>
                        <td>${item.activity}</td>
                        <td>${item.arena}</td>
                        <td>${item.rules}</td>
                        <td>${item.playTime}</td>
                        <td>${item.team}</td>
                        <td>${item.playingItem}</td>
                        <td>${`<img src="delete.svg" class="delete" alt="basket">`}</td>
                    </tr>
                `);
            });
        } 
       
        localStorage.setItem('sports', JSON.stringify(sportsArray));
        
    };

    submitBtn.addEventListener('click', () => {
        makeNewSport();
        clearInputs();
    });
    
    render();

    if (sportsArray.length !== 0) {
        sportsArray[0].delete();
    }
})