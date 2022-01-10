// libraries and hooks
import { FC } from "react";
// styles
import "../styles/Badge.css";

interface Props {
	type: string;
}

export const Badge: FC<Props> = ({ type }) => {
	return <li className={`Badge ${type}`}>{type}</li>;
};
