//callback
setTimeout(() => {
    console.log('Moke');
    setTimeout(() => {
        console.log('Mobile');
        console.log('Kla');
    }, 1000);
}, 2000);

//Asynchonouse
//then, catch
logging('Mobile', 1000)
    .then(res => logging('Moke1', res * 1000))
    .then(res => logging('Moke2', res * 1000))
    .then(res => logging('Moke3', 0))
    .then(res => logging('Moke4', 1000))
    .then(res => logging('Moke5', 1000))
    .catch(e => {
        console.log(e);
    });
waitlog('Mobile', 1000);
waitlog('Mobile', 1000);
//Async, Await
async function waitlog() {
    await logging('Mobile', 2000);
    await logging('Mobile', 2000);
    await logging('Mobile', 2000);
}

//Promise function
function logging(name, time) {
    const promise = new Promise((resolve, reject) => {
        if (time === 0) {
            reject('Time cannot set to 0');
            return;
        }
        setTimeout(() => {
            console.log(`${time}-${name}`);
            resolve(Math.ceil(Math.random() * 9));
        }, time);
    });
}