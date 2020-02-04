'use strict'

import Timer from './timerPlug.js'


const timer = new Timer({
    selector: '#timer-1',
    targetDate: new Date('Jul 17, 2020'),
})

const timer2 = new Timer({
    selector: '#timer-2',
    targetDate: new Date('Feb 10, 2020'),
})


timer.start();
timer2.start();