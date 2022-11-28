// code your solution here
const saturdayFun = function(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}
saturdayFun("bathe my dog!")

const mondayWork = function(activity = "go to the office"){
    return `This Monday, I will ${activity}.`
}
mondayWork("work from home")

function wrapAdjective(style = '*'){
    return function(condition = "special"){
       
            return `You are ${style}${condition}${style}!`
    }

}
wrapAdjective("a hard worker" )
wrapAdjective("a dedicated programmer!")