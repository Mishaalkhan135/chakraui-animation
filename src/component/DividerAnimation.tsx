import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

const DividerAnimation = () => {
	const parentRef = useRef(null);
	const { ref, inView } = useInView({ threshold: 0.5 });
	const parentHeight = parentRef.current ? parentRef.current.clientHeight : 0;
	const [isHovered, setIsHovered] = useState(false);
	const [scrollPosition, setScrollPosition] = useState(0);
	const [scrollDirection, setScrollDirection] = useState("down");

	const handleHoverStart = () => {
		setIsHovered(true);
	};

	const handleHoverEnd = () => {
		setIsHovered(false);
	};

	const handleScroll = () => {
		const currentPosition = window.scrollY;
		setScrollDirection(currentPosition > scrollPosition ? "down" : "up");
		setScrollPosition(currentPosition);
	};

	const getLinePercentage = () => {
		if (scrollDirection === "down") {
			return scrollPosition / parentHeight > 1
				? 1
				: scrollPosition / parentHeight;
		} else {
			return scrollPosition / parentHeight < 0
				? 0
				: 1 - scrollPosition / parentHeight;
		}
	};

	return (
		<Box ref={parentRef} position='relative' h='2px'>
			<Box
				ref={ref}
				position='absolute'
				left={0}
				top='50%'
				w='100%'
				h='2px'
				bg='gray'
				onMouseEnter={handleHoverStart}
				onMouseLeave={handleHoverEnd}
			>
				<motion.div
					style={{
						width: `${getLinePercentage() * 100}%`,
						height: "100%",
						backgroundColor: isHovered || inView ? "black" : "gray",
					}}
					animate={{
						width: `${
							isHovered || inView
								? "100%"
								: scrollDirection === "down"
								? getLinePercentage() * 100 + "%"
								: (1 - getLinePercentage()) * 100 + "%"
						}`,
					}}
					transition={{ duration: 0.9 }}
				/>
			</Box>
		</Box>
	);
};

export default DividerAnimation;
