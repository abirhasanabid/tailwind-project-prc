import { Line, LineChart, XAxis, YAxis } from "recharts";

const Chart = () => {
    // fake data

    const stdData = [
        {
            "name": "John Doe",
            "age": 16,
            "grades": {
                "math": 85,
                "biology": 90,
                "physics": 78
            }
        },
        {
            "name": "Jane Smith",
            "age": 17,
            "grades": {
                "math": 92,
                "biology": 88,
                "physics": 94
            }
        },
        {
            "name": "Alex Johnson",
            "age": 16,
            "grades": {
                "math": 74,
                "biology": 81,
                "physics": 69
            }
        },
        {
            "name": "Emily Davis",
            "age": 18,
            "grades": {
                "math": 88,
                "biology": 95,
                "physics": 85
            }
        },
        {
            "name": "Michael Brown",
            "age": 17,
            "grades": {
                "math": 79,
                "biology": 84,
                "physics": 91
            }
        }
    ];

    return (
        <div>
            <LineChart width={600} height={500} data={stdData}>
                <XAxis dataKey='name'></XAxis>
                <YAxis></YAxis>
                <Line type="monotone" dataKey="grades.math" stroke="blue" />
                <Line type="monotone" dataKey="grades.biology" stroke="orange" />
                <Line type="monotone" dataKey="grades.physics" stroke="red" />

            </LineChart>

        </div>
    );
};

export default Chart;