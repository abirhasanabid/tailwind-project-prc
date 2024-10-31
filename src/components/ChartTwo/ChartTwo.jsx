import { Bar, BarChart, XAxis, YAxis } from "recharts";

const ChartTwo = () => {
    // fake data
    const salesData = [
        { "month": "January", "sales": 1500 },
        { "month": "February", "sales": 1800 },
        { "month": "March", "sales": 2100 },
        { "month": "April", "sales": 2400 },
        { "month": "May", "sales": 2000 }
    ];

    return (
        <div className="mt-14">
            <BarChart width={800} height={500} data={salesData}>
                <Bar dataKey='sales' fill="orange"></Bar>
                <XAxis dataKey='month'></XAxis>
                <YAxis></YAxis>
            </BarChart>
        </div>
    );
};

export default ChartTwo;