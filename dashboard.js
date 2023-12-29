document.addEventListener('DOMContentLoaded', function () {
    var companyMetrics = {
        totalRevenue: 406411.29,
        totalJobsAvg: 620,
        ticketsCreated: 655,
        ticketsScheduled: 735,
        outstandingAmount: 110448.80,
        membershipSold: 105,
        jobsCompleted: 436,
        totalCancelled: 65,
    };

    var revenueByLocationData = {
        labels: ['Everett', 'Seattle', 'Lynnwood', 'Bothell', 'Mukilteo', 'Edmonds'],
        data: [85000, 80000, 49000,47000,45000,34000],
    };

    var revenueByJobTypeData = {
        labels: ['Service Plumbing','Bid Work HVAC','Service HVAC','Bid Work Plumbing','HWT Replacement','Maintainance','Material Sale'],
        data: [181000, 130000, 80000,79000,43000,42000],
    };

    updateCompanyMetrics(companyMetrics);

   
    updateBarGraph('revenueByLocationChart', 'Revenue by Job Location', revenueByLocationData);
    updateBarGraph('revenueByJobTypeChart', 'Revenue by Job Type', revenueByJobTypeData);
});

function updateCompanyMetrics(metrics) {
    Object.keys(metrics).forEach(metricName => {
        var metricElement = document.getElementById(metricName.toLowerCase());
        if (metricElement) {
            metricElement.textContent = typeof metrics[metricName] === 'number' ? `$${metrics[metricName].toFixed(2)}` : metrics[metricName];
        }
    });
}

function updateBarGraph(chartId, chartLabel, chartData) {
    var ctx = document.getElementById(chartId).getContext('2d');
    new Chart(ctx, {
        type: 'bar', 
        data: {
            labels: chartData.labels,
            datasets: [{
                label: chartLabel,
                data: chartData.data,
                backgroundColor: '#41bf99', 
            }],
        },
        options: {
            indexAxis: 'y',
            scales: {
                x: { 
                    beginAtZero: true,
                    ticks: {
                        callback: function (value) {
                            return ''; 
                        }
                    }
                }
            }
        }
    });
}
