export const  lineData = {
    labels: ['100', '200', '300', '400', '500', '600', '700', '800'],
    datasets: [
        {
            lagend: 'none',
            data: [2.5, 3, 3, 0.9, 1.3, 1.8, 3.8, 1.5],
            borderColor: "#ff8084",
            backgroundColor: "#ff8084",
            borderWidth: 2
        },
        {
            lagend: 'none',
            data: [3.8, 1.8, 4.3, 2.3, 3.6, 2.8, 2.8, 2.8],
            borderColor: "#a5a5a5",
            backgroundColor: "#a5a5a5",
            borderWidth: 2
        }
    ]
};
export const  doughnutOptions = {
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
    chartArea: { left: 0, top: 10, width: '360px', height: '100%' },
    enableInteractivity: false,
}
export const  pieOptions = {
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
    chartArea: { left: 0, top: 10, width: '360px', height: '100%' },
    legend: "none"
};