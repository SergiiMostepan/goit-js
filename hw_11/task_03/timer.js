'use strict'

import Timer from './timerPlug.js'


const timer = new Timer({
    selector: '#timer-1',
    targetDate: new Date('Jul 17, 2020'),
})


timer.start();