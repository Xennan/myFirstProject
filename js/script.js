"use strict";
// НИ ОДНО РЕШЕНИЕ НЕ МОЁ, Я НИХРЕНИЩЕ НЕ ПОНЯЛ

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(plan) {
        let {age} = plan;
        let {languages} = plan.skills;
        let str = `Мне ${age} и я владею языками: `;
        
        languages.forEach(function(lang) {
            str += `${lang.toUpperCase()} `;
        });
        return str;
    }
};

function showExperience(plan) {
    const d = plan.skills.exp;
    return d;
}

function showProgrammingLangs(plan) {
    let str = '';
    const {programmingLangs} = plan.skills;
    
    for (let key in programmingLangs) {
        str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
        
    }
    return str;
}