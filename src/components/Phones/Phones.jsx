import axios from "axios";
import { useEffect, useState } from "react";
import { Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts";

const Phones = () => {

    const [phones, setPhones] = useState([]);

    useEffect(() => {
        /*   fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
          .then(res =>res.json())
          .then(data => setPhones(data.data)); */

        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const phoneDatas = (data.data.data);
                const phoneWithFakeData = phoneDatas.map(phone => {
                    const obj = {
                        name: phone.phone_name,
                        slug: parseInt(phone.slug.split('-')[1])
                    }
                    return obj
                })
                setPhones(phoneWithFakeData)
            })

    }, [])

    return (
        <div>
            <p className="text-xl font-bold">Phones : {phones.length}</p>
            <BarChart width={800} height={500} data={phones}>
                <Bar dataKey='slug' fill="#8884d8"></Bar>
                <XAxis dataKey='name'></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
            </BarChart>
        </div>
    );
};

export default Phones;