const dates = [...Array(7)].map((_, i) => {
    const d = new Date()
    d.setDate(d.getDate() - i)
    const day = d.getDate()
    return `${day}/${d.getMonth() + 1}`
})
export const lineData = () => {
    return {
        labels: dates.reverse(),
        datasets: [
            {
                lagend: 'none',
                data: [2.5, 3, 3, 0.9, 1.3, 1.8, 3.8, 1.5],
                borderColor: "#ff8084",
                backgroundColor: "#ff8084",
                borderWidth: 2
            }
        ]
    }
};
export const doughnutOptions = {
    title: "",
    pieHole: 0.35,
    pieSliceBorderColor: "none",
    colors: ['#ff8084', '#13c9ca', '#a5a5a5'],
    legend: {
        position: "none"
    },
    pieSliceText: "none",
    tooltip: {
        trigger: "none"
    },
    animation: {
        startup: true,
        easing: 'linear',
        duration: 1500,
    },
    chartArea: {left: 0, top: 10, width: '360px', height: '100%'},
    enableInteractivity: false,
}
export const pieOptions = {
    title: "",
    pieHole: 1,
    slices: [
        {
            color: "#ff8084"
        },
        {
            color: "#13c9ca"
        },
        {
            color: "#f0b54d"
        },
    ],
    tooltip: {
        showColorCode: false
    },
    chartArea: {left: 0, top: 10, width: '360px', height: '100%'},
    legend: "none"
};