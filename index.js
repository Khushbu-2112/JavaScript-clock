setInterval(setclock,1000)

const hh = document.querySelector('[data-hour-hand]')
const sh = document.querySelector('[data-sec-hand]')
const mh = document.querySelector('[data-min-hand]')
function setclock()
{
    const cd = new Date()
    const st = cd.getSeconds()
    const mt = cd.getMinutes()
    const ht = cd.getHours()
    const sr = st/60
    const mr = (sr+mt)/60
    const hr = (mr+ht)/12
    document.getElementById('ti').innerHTML = ht + " : "+mt+" : "+st;
    setro(sh,sr)
    setro(mh,mr)
    setro(hh,hr)
}

function setro(element,rr)
{
    element.style.setProperty('--rotate',rr * 360)
}

setclock()