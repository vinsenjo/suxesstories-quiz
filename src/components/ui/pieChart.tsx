"use client"


import { Label, Pie, PieChart } from "recharts"

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

const chartConfig = {
    warna: {
        label: "Warna",
    },
    merah: {
        label: "Merah",
        color: "hsl(var(--chart-1))",
    },
    ungu: {
        label: "Ungu",
        color: "hsl(var(--chart-2))",
    },
    hijau: {
        label: "Hijau",
        color: "hsl(var(--chart-3))",
    },
    kuning: {
        label: "Kuning",
        color: "hsl(var(--chart-3))",
    },

} satisfies ChartConfig

export function PieChardComponent({ chartData, hasil, warna }: { chartData: any, hasil: string, warna: string }) {
    return (
        <Card className="flex flex-col bg-neutral">
            <CardHeader className="items-center pb-0">
                <CardTitle className="text-xl">Hasil Test Anda</CardTitle>
                {/* <CardDescription>January - June 2024</CardDescription> */}
            </CardHeader>
            <CardContent className="flex-1 pb-0">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square max-h-[250px]"
                >
                    <PieChart>
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Pie
                            data={chartData}
                            dataKey="jumlah"
                            nameKey="warna"
                            innerRadius={60}
                            strokeWidth={5}
                        >
                            <Label
                                content={({ viewBox }) => {
                                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                        return (
                                            <text
                                                x={viewBox.cx}
                                                y={viewBox.cy}
                                                textAnchor="middle"
                                                dominantBaseline="middle"
                                            >
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={viewBox.cy}
                                                    className="fill-foreground text-3xl font-bold"
                                                >
                                                </tspan>
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={(viewBox.cy || 0) + 24}
                                                    className="fill-muted-foreground"
                                                >

                                                </tspan>
                                            </text>
                                        )
                                    }
                                }}
                            />
                        </Pie>
                    </PieChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col gap-2 text-sm">
                <div className="flex items-center gap-2 font-medium leading-none">
                    <p className="text-lg">
                        Dominan Warna {warna}
                    </p>
                </div>
                <div className="leading-none text-muted-foreground">
                    {hasil}
                </div>
            </CardFooter>
        </Card>
    )
}
