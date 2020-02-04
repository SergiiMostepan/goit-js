const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const makeTransaction = (transaction) => {
    return new Promise((resolve, reject) => {
        const delay = randomIntegerFromInterval(200, 500);

        setTimeout(() => {
            const canProcess = Math.random() > 0.3;

            if (canProcess) {
                transaction.time = delay;
                return resolve(transaction);
            } else {
                return reject(transaction.id);
            }

        }, delay);

    });
};




const onResolve = ({
    id,
    time
}) => {
    console.log(`Transaction ${id} processed in ${time}ms`);
};

const onReject = id => {
    console.warn(`Error processing transaction ${id}. Please try again later.`);
};


makeTransaction({
        id: 70,
        amount: 150
    })
    .then(onResolve)
    .catch(onReject);

makeTransaction({
        id: 71,
        amount: 230
    })
    .then(onResolve)
    .catch(onReject);

makeTransaction({
        id: 72,
        amount: 75
    })
    .then(onResolve)
    .catch(onReject);

makeTransaction({
        id: 73,
        amount: 100
    })
    .then(onResolve)
    .catch(onReject);