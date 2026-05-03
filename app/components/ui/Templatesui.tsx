import type React from "react";

type TemplatesProps = {
	children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export const TemplatesUi: React.FC<TemplatesProps> = ({
	children,
	...props
}) => {
	return (
		<div
			className="bg-gray-300/70 px-3 pt-4 min-h-[89vh] max-h-[91vh] overflow-hidden"
			{...props}
		>
			{children}
		</div>
	);
};