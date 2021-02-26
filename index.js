// Code your solution here
function findMatching(drivers, driver){
    return drivers.filter(d => d.toLowerCase().includes(driver.toLowerCase()) )

}

function fuzzyMatch(drivers, fuzz){
    return drivers.filter(d => d.toLowerCase().startsWith(fuzz.toLowerCase()) )

}

function matchName(drivers, driver){
    return drivers.filter(d => d.name.toLowerCase().includes(driver.toLowerCase()))

}