

const data = [{
    "from": "2023-05-30T10:29:15+00:00",
    "to": "2023-05-30T14:31:02+00:00",
}];

function createChart() {
    const firstTime = new Date(data[0].from);
    const dayStart = new Date(Date.UTC(firstTime.getUTCFullYear(), firstTime.getUTCMonth(), firstTime.getUTCDate()));
    const dayEnd = new Date(Date.UTC(firstTime.getUTCFullYear(), firstTime.getUTCMonth(), firstTime.getUTCDate(), 23, 59, 59, 999));
    const fullDay = dayEnd - dayStart

    const firstGapWidth = (firstTime - dayStart) / fullDay;
    const firstGap = document.createElement('div')
    firstGap.className = 'gap'
    firstGap.style.width = `${firstGapWidth}%`



    data.forEach((timeSet, index) => {
        const visitStart = new Date(timeSet.from)
        const visitEnd = new Date(timeSet.to)
        const durationWidth = (visitEnd - visitStart) / fullDay

        const visit = document.createElement('div')
        visit.style.width = `${durationWidth}%`

        if (index !== 0) {
            const restWidth = (visitStart - new Date(data[index - 1].to)) / fullDay
            const rest = document.createElement('div');
            rest.style.width = `${restWidth}%`
        }
        if (index === data.length - 1) {
            const lastGapWidth = (dayEnd - visitEnd) / fullDay;
            const lastGap = document.createElement('div')
            lastGap.style.width = `${lastGapWidth}%`
        }
    });


}

createChart();