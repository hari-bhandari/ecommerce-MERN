const dates = [...Array(7)].map((_, i) => {
    const d = new Date()
    d.setDate(d.getDate() - i)
    const day = d.getDate()
    return `${day}/${d.getMonth() + 1}`
})
export const lineData = (data,loading) => {
    let salesData=[];
    let salesCount=[];
    if(loading){
        salesData=[]

    }
    if(!loading){
        for (let date of dates.reverse()) {
            const sales=data[date]
            if(!sales){
                salesData.push(0)
                salesCount.push(0)
                continue
            }
            salesCount.push(sales.length)
            let tempTotal=sales.reduce((a, b) => a + b, 0)
            salesData.push(tempTotal.toFixed(1))
        }
    }


    return {
        labels: dates,
        datasets: [
            {
                lagend: 'none',
                data: salesData,
                borderColor: "#ff8084",
                backgroundColor: "#ff8084",
                borderWidth: 10,
                label:'Sales in £'
            },
            {
                lagend: 'none',
                data: salesCount,
                borderColor: "#00ffa7",
                backgroundColor: "#00ffa7",
                borderWidth: 2,
                label:'Sales count'
            },
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