import { useEffect, useState } from 'react'
import { getQuestions } from '../../services/firebase'
import { Question } from '../../types/question'
import QuestionCard from './QuestionCard'
import image1 from '../../assets/image1.png'
import QuestionButton from '@/components/ui/QuestionButton'

import Result from './result'

const Quiz = () => {
    const [start, setStart] = useState<boolean>(false)
    const [data, setData] = useState<Question[]>([])
    const [result, setResult] = useState<String[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [question, setQuestion] = useState<number>(0)
    useEffect(() => {
        try {
            setLoading(true)
            const getData = async () => {
                const res = await getQuestions()
                const sortedData = res?.sort((a, b) => parseInt(a.id) - parseInt(b.id));
                setData(sortedData!)
            }
            getData()
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    }, [])
    const handleClick = (color: string) => {
        setResult((prevResult) => {
            const updatedResult = [...prevResult, color];
            return updatedResult;
        });
        if (question <= data.length - 1) {
            setQuestion((prevQuestion) => prevQuestion + 1);
        } else {
            console.log('Final Result:', result);
        }
    }
    if (start === false) {
        return <div className='flex h-screen items-center justify-center'>
            <button className="text-xl neu px-5 py-2 rounded-md hover:bg-langit neu-active" onClick={() => setStart(true)}>Mulai Quiz</button>
        </div>

    }
    if (question === data.length) {
        return <Result result={result} />;
    }
    return (
        <div className='bg-second'>

            <div className='flex flex-col items-center justify-center gap-2 min-h-screen  lg:px-0 px-5 bg-neutral lg:mx-20'>
                {loading ? (<div>Loading...</div>) :
                    (data?.length > 0 &&
                        <>
                            <QuestionCard question={data[question].text} />
                            <img src={image1} alt="image" className='lg:w-[400px] w-[300px]' />
                            <div className='grid grid-cols-1 lg:grid-cols-2  w-full lg:w-2/3 gap-x-2 gap-y-2'>
                                {data[question].option.map((item, idx) => {
                                    return (
                                        <QuestionButton handleClick={() => handleClick(item.color)} text={item.text} key={idx} />
                                    )
                                })}

                            </div>
                        </>
                    )
                }
            </div>
        </div>
    )
}

export default Quiz
