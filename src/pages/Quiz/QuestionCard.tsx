const QuestionCard = ({ question }: { question: string }) => {
    return (
        <div className='neu rounded-md px-2 py-4 w-full lg:w-2/3 text-lg lg:text-xl my-4  mt-10 lg:mt-20'>
            <p>{question}</p>
        </div>
    )
}

export default QuestionCard
