
import './_Rating.scss';
import emptyStar from "../../assets/starEmpty.svg";
import fullStar from "../../assets/starFull.svg";

const Rating = ({ score }) => {
	const stars = new Array(5).fill(null); // un tableau de 5 éléments vides

	return (
		<div className="rate">
			{stars.map((_, index) => (
				<img
					key={index}
					className="star"
					src={index < score ? fullStar : emptyStar}
					alt="rating star"
				/>
			))}
		</div>
	);
}

export default Rating;

