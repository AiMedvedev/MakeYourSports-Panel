'use strict';

document.addEventListener("DOMContentLoaded", () => {
    const submitBtn = document.querySelector('.form-container .btn-default')
    
    const skillsDiv = document.querySelector('.skills');
    const skillsInput = skillsDiv.querySelector('input');
    const selectSportArray = document.getElementById('sport');
    const skillsBtn = document.getElementById('skills');

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

        configurable = true;


        get skills() {
            return this._skills;
        }

        set skills(str) {
            this.skills.push(str);
            return this.skills;
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
                    sportsArray.splice((id - 1), 1)
                    localStorage.setItem('sports', JSON.stringify(sportsArray));
                    render();
                }
            });
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
    }

    class Football extends TeamSports {
        constructor(sportName, activity, arena, rules, playTime, id, team, playingItem, skills = [], sportClass) {
            super(sportName, activity, arena, rules, playTime, id);
            this.team = team;
            this.playingItem = playingItem;
            this._skills = skills;
            this.sportClass = sportClass;
        }
    }

    const makeNewSport = () => {
        
        let sportClass;
        let sportName = document.getElementById("sport-name").value;
        let activity = document.getElementById("activity").value;
        let arena = document.getElementById("arena").value;
        let rules = document.getElementById("rules").value;
        let playTime = document.getElementById("playing-time").value;
        let skills = [];
        let team = document.getElementById("team").value;
        let playingItem = document.getElementById("playing-item").value;
        let id = sportsArray.length;
        let sport;

        const sportNamePatt = /^[A-Za-z- ]+$/g;
        const activityPatt = /^[A-Za-z -]+$/g;
        const arenaPatt = /^[A-Za-z -\/()]+$/g;

        const validationWarning = (selector, text) => {
            document.getElementById(selector).innerHTML = text;
            document.getElementById(selector).style.color = "red";
        }


        if (select.value === 'Football') {
            sportClass = 'Football';
            sport = new Football(sportName, activity, arena, rules, playTime, id, team, playingItem, skills, sportClass);
        } else if (select.value === 'Hockey'){
            sportClass = 'Hockey';
            sport = new Hockey(sportName, activity, arena, rules, playTime, id, team, playingItem, skills, sportClass);
        }
        
        if (sportNamePatt.test(sportName) == false) {
            validationWarning("sport-name_alert", "Numbers Here");
            return
        } else if (sportName.length == 0) {
            validationWarning("sport-name_alert", "Sports Name Should Not be Blank");
            return
        } else if (activityPatt.test(activity) == false) {
            validationWarning("activity_alert", "Numbers Here");
            return
        } else if (activity.length == 0) {
            validationWarning("lname_alert", "Activity Should Not be Blank");
            return
        } else if (arenaPatt.test(arena) == false) {
            validationWarning("arena_alert", "Numbers Here");
            return
        } else if (arena.length == 0) {
            validationWarning("arena_alert", "Arena Should Not be Blank");
            return
        } else if (rules.length == 0) {
            validationWarning("rules_alert", "Rules Should Not be Blank");
            return
        } else if (playTime.length == 0) {
            validationWarning("playing-time_alert", "Playing Time Should Not be Blank");
            return
        } else {
            sportsArray.push(sport);
            localStorage.setItem('sports', JSON.stringify(sportsArray));
            render();
            clearInputs();
        }
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
        const warnings = document.querySelectorAll('small');

        tbody.innerHTML = '';
        warnings.forEach(elem => {
            elem.innerHTML = '';
        }); 
        sportsArray = [];
        
        if (arr !== null) {
            arr.forEach((sport, i) => {
                if (sport.sportClass === 'Football') {
                    sport = new Football(sport.sportName, sport.activity, sport.arena, sport.rules, sport.playTime, i + 1, sport.team, sport.playingItem, sport._skills, sport.sportClass);
                } else if (sport.sportClass === 'Hockey'){
                    sport = new Hockey(sport.sportName, sport.activity, sport.arena, sport.rules, sport.playTime, i + 1, sport.team, sport.playingItem, sport._skills, sport.sportClass);
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
                        <td>${item._skills}</td>
                        <td>${`<img src="delete.svg" class="delete" alt="basket">`}</td>
                    </tr>
                `);
            });
        } 
       
        localStorage.setItem('sports', JSON.stringify(sportsArray));
        
    };

    submitBtn.addEventListener('click', () => {
        makeNewSport();
    });

    sportsArray.forEach((array, index) => {
        const selectOption = document.createElement('option');
        selectOption.classList.add('form-control');
        selectSportArray.append(selectOption);
        selectOption.textContent = array.sportName;
        selectOption.setAttribute('id', index);
    })

    skillsBtn.addEventListener('click', () => {
        if (selectSportArray.selectedIndex === 0) {
            return;
        }

        sportsArray[selectSportArray.selectedIndex - 1].skills = skillsInput.value;
        localStorage.setItem('sports', JSON.stringify(sportsArray));
        skillsInput.value = '';
    })

    render();

    if (sportsArray.length !== 0) {
        sportsArray[0].delete();
    }

})