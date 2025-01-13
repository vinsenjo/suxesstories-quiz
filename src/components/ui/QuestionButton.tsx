
interface QuestionButtonProps {
    text: string;
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
const QuestionButton: React.FC<QuestionButtonProps> = ({ text, handleClick }) => {
    return (
        <button onClick={handleClick} className='w-full  flex items-center justify-center text-base lg:text-lg neu neu-active bg-langit hover:bg-langit/30 hover:text-primer rounded-md py-2'>
            {text}
        </button>
    )
}
export default QuestionButton
