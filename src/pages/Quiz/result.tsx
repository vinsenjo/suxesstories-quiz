import { PieChardComponent } from '@/components/ui/pieChart';
import React, { useEffect, useState } from 'react'

const Result = ({ result }: { result: String[] }) => {
    const [color, setColor] = useState<String[]>([])
    useEffect(() => {
        setColor(result)
    }, [])


    const merah = React.useMemo(() => { return result.filter((item) => item == "merah").length }, [])
    const ungu = color.filter((item) => item == "ungu").length
    const kuning = color.filter((item) => item == "kuning").length
    const hijau = color.filter((item) => item == "hijau").length

    const chartData = [
        { warna: "merah", jumlah: merah, fill: "red" },
        { warna: "ungu", jumlah: ungu, fill: "purple" },
        { warna: "hijau", jumlah: kuning, fill: "green" },
        { warna: "kuning", jumlah: hijau, fill: "yellow" },
    ]

    const hasil = {
        merah: "aku merupakan orang yang berani, menjadi orang yang pertama bertindak, merasa kuat, kompetitif, tegas, ambisius, berani dan agresif.",
        ungu: "aku merupakan orang yang teliti, detail, sering memendam perasaan, kaku, serius, ragu - ragu dan suka mengkritik.",
        kuning: "aku merupakan orang yang periang, lincah, bersemangat, antusias, banyak bicara, optimis dan suka berdalih.",
        hijau: " aku merupakan orang yang mudah terbawa pergaulan, mudah puas, jarang menuntut, berhati - hati dan sering mengalah pada orang lain. "
    }

    const mostCommonColor = chartData.reduce((prev, current) => {
        return current.jumlah > prev.jumlah ? current : prev;
    });



    return (
        <div className='px-4 flex flex-col items-center h-screen bg-second gap-10'>
            <h1 className='text-lg mt-24 lg:text-2xl font-semibold text-primer'>SELAMAT TELAH MENYELESAIKAN TEST ANDA !</h1>
            <PieChardComponent chartData={chartData} hasil={hasil[mostCommonColor.warna as keyof typeof hasil]} />
        </div>
    )
}

export default Result
