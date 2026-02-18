import type { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./RoundButton.module.css";

interface RoundButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children?: ReactNode;
	className?: string;
}

const RoundButton = ({ children, className, ...props }: RoundButtonProps) => {
	return (
		<button
			className={`${styles.button} ${className}`}
			{...props}
			type="button"
		>
			{children}
		</button>
	);
};

export default RoundButton;
