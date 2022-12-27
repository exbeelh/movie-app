import { AiFillStar } from 'react-icons/ai'

const Card = ({id, poster, title, vote}) => {
    return(
        <div className="md:w-[280px] md:h-[480px] mx-auto overflow-hidden rounded-xl shadow-lg bg-black text-white flex-row flex-warp mb-8 justify-between" key={id}>
            <img src={`${process.env.REACT_APP_BASEIMAGEURL}/${poster}`} alt={title} className="h-[80%] w-[100%] object-cover" />
            <div className="text-sm ml-3 my-2 font-bold flex gap-1"><AiFillStar color='yellow' size={20} />{vote}</div>
            <div className="text-md text-center mb-3 font-bold">{title}</div>
        </div>
    )
}

export default Card;