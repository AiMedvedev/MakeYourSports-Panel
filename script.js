'use strict';

class TeamSports {
    constructor(activity, field, squad) {
        this.activity = activity;
        this.field = field;
        this.squad = squad;
    }
    gamePlay() {
        console.log('This is so fun!');
    }
}

class Soccer extends TeamSports {
    constructor(activity, field, squad, ballType, skills = []) {
        super(activity, field, squad);
        this.ballType = ballType;
        this._skills = skills;
    }
}

class Football extends TeamSports {
    constructor(activity, field, squad, ballType, skills = []) {
        super(activity, field, squad);
        this.ballType = ballType;
        this._skills = skills;
    }

    get skills() {
        return this._skills;
    }

    set skills(str) {
        this.skills.push(str);
    }

    rules() {
        console.log('Easy and clear!');
    }
}

const flagFootball = new Football('intensive', 'medium', 5, 'oval', ['speed', 'catch', 'agility']);

flagFootball.skills = 'jumping';

console.log(flagFootball);


function GetData() {
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let age = document.getElementById("age").value;
    let gender = Gender();
    let address = document.getElementById("address").value;
    let pno = document.getElementById("pno").value;
    let dob = document.getElementById("dob").value;
    let Qualification = document.getElementById("Qualification").value;
    let email = document.getElementById("email").value;
    let cname = document.getElementById("cname").value;
    let fnamePatt = /^[A-Za-z]+$/g;
    let lnamePatt = /^[A-Za-z]+$/g;
    let agePatt = /^[0-9]+$/g;
    let pnoPatt = /^[0-9]+$/g;
    let emailAt = "@";
    let emailAtsrh = email.search(emailAt);

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

    cel1.innerHTML = fname;
    cel2.innerHTML = lname;
    cel3.innerHTML = age;
    cel4.innerHTML = gender;
    cel5.innerHTML = address;
    cel6.innerHTML = pno;
    cel7.innerHTML = dob;
    cel8.innerHTML = Qualification;
    cel9.innerHTML = email;
    cel10.innerHTML = cname;


    //First name Validation

    if (fnamePatt.test(fname) == false) {
        document.getElementById("fname_alert").innerHTML = "Numbers Here";
        document.getElementById("fname_alert").style.color = "red";

    }

    if (fname.length == 0) {
        document.getElementById("fname_alert").innerHTML = "First Name Should be Blank";
        document.getElementById("fname_alert").style.color = "red";
    }

    //Last name Validation

    if (lnamePatt.test(lname) == false) {
        document.getElementById("lname_alert").innerHTML = "Numbers Here";
        document.getElementById("lname_alert").style.color = "red";
    }

    if (lname.length == 0) {
        document.getElementById("lname_alert").innerHTML = "Last Name Should be Blank";
        document.getElementById("lname_alert").style.color = "red";
    }

    // Age Validation

    if (agePatt.test(age) == false) {
        document.getElementById("age_alert").innerHTML = "Your Input is Wrong";
        document.getElementById("age_alert").style.color = "red";
    }

    if (age.length == 0) {
        document.getElementById("age_alert").innerHTML = "Age blank";
        document.getElementById("age_alert").style.color = "red";
    }

    //Address Validation

    if (address.length == 0) {
        document.getElementById("address_alert").innerHTML = "Address Should be Blank";
        document.getElementById("address_alert").style.color = "red";
    }

    // Pnone Number Validation

    if (pnoPatt.test(pno) == false) {
        document.getElementById("pno_alert").innerHTML = "Numbers only Allowed";
        document.getElementById("pno_alert").style.color = "red";
    }
    //E-mail Validation

    if (emailAtsrh < 0) {
        document.getElementById("email_alert").innerHTML = "Enter E-mail Correctly";
        document.getElementById("email_alert").style.color = "red";
    }

    if (fname.length == 0 || lname.length == 0 || age.length == 0 || address.length == 0 || pno.length == 0 || dob.length == 0 || email.length == 0 || cname.length == 0) {

        table.disabled = "true";
    }

}


function Gender() {
    let m = document.getElementById("Male").checked;
    let f = document.getElementById("Female").checked;
    let man = " ";

    if (m == false && f == false) {
        document.getElementById("gender_alert").innerHTML = "Please Select Gender";
        document.getElementById("gender_alert").style.color = "red";

    } else if (m == true) {
        man = man.innerHTML = "Male";
    } else {
        man = man.innerHTML = "Female";
    }
    return man;
}