import { Box } from "@chakra-ui/react";
import { motion, useAnimation, useViewportScroll } from "framer-motion";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const DividerAnimation = ({ direction }: any) => {
	const { ref, inView } = useInView({ threshold: 0.5 });
	const [isHovered, setIsHovered] = useState(false);
	const [lastY, setLastY] = useState(0);
	const { scrollY } = useViewportScroll();
	const controls = useAnimation();

	const handleHoverStart = () => {
		setIsHovered(true);
	};

	const handleHoverEnd = () => {
		setIsHovered(false);
	};

	useEffect(() => {
		const handleScroll = () => {
			if (inView) {
				const currentY = scrollY.get();
				const isScrollingUp = currentY < lastY;

				controls.start({
					scaleX: isHovered || (inView && !isScrollingUp) ? 1 : 0,
				});

				setLastY(currentY);
			}
		};

		const unsubscribeScrollY = scrollY.onChange(handleScroll);
		return () => {
			unsubscribeScrollY();
		};
	}, [scrollY, inView, isHovered, controls, lastY]);

	return (
		<Box
			ref={ref}
			position='relative'
			h='2px'
			onMouseEnter={handleHoverStart}
			onMouseLeave={handleHoverEnd}
		>
			<motion.div
				animate={controls}
				style={{
					position: "absolute",
					width: "100%",
					height: "100%",
					backgroundColor: isHovered || inView ? "black" : "gray",
					originX: direction === "rightToLeft" ? "100%" : "0%",
				}}
				transition={{ duration: 0.9 }}
			/>
		</Box>
	);
};

export default DividerAnimation;
