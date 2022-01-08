// libraries and hooks
import { FC } from "react";
import { useNavigate } from "react-router-dom";

export const GoBack: FC = () => {
	const navigate = useNavigate();
	return (
		<button type="button" onClick={() => navigate(-1)}>
			<img
				width="20px"
				style={{ transform: "rotate(90deg)" }}
				src="https://img.icons8.com/ios-filled/50/000000/expand-arrow--v1.png"
				alt="go-back arrow"
			/>
		</button>
	);
};
