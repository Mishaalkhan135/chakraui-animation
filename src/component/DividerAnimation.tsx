import { Box } from "@chakra-ui/react";
import { motion, useAnimation, useViewportScroll } from "framer-motion";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const DividerAnimation = ({ direction, circleColor, circleShadow }: any) => {
	const { ref, inView } = useInView({ threshold: 0.5 });
	const { scrollY } = useViewportScroll();
	const controls = useAnimation();
	const [lastY, setLastY] = useState(0);
	const [showCircle, setShowCircle] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (inView) {
				const currentY = scrollY.get();
				const isScrollingUp = currentY < lastY;

				controls.start({
					scaleX: inView && !isScrollingUp ? 1 : 0,
					scaleY: inView && !isScrollingUp ? 1 : 0.5,
				});

				setLastY(currentY);
			}
		};

		const unsubscribeScrollY = scrollY.onChange(handleScroll);
		return () => {
			unsubscribeScrollY();
		};
	}, [scrollY, inView, controls, lastY]);

	return (
		<Box ref={ref} position='relative' h='2px' mb={6}>
			<motion.div
				animate={controls}
				onUpdate={(latest) => {
					if (latest.scaleX === 1) {
						setShowCircle(true);
					} else {
						setShowCircle(false);
					}
				}}
				style={{
					position: "absolute",
					width: "100%",
					height: "100%",
					backgroundColor: inView ? "black" : "gray",
					originX: direction === "rightToLeft" ? "0%" : "100%",
				}}
				transition={{ duration: 0.9 }}
			/>

			{showCircle && (
				<Box
					position='absolute'
					top='50%'
					right={direction === "rightToLeft" ? "auto" : "0%"}
					left={direction === "leftToRight" ? "-2%" : "100%"}
					transform='translate(50%, -50%)'
					borderRadius='50%'
					w='20px'
					h='20px'
					backgroundColor={circleColor || "blue"} // Outer circle color
					boxShadow={circleShadow || "0 0 20px 5px black"}
				>
					<Box
						position='absolute'
						top='50%'
						left='50%'
						borderRadius='full'
						w='8px'
						h='8px'
						backgroundColor='black'
						transform='translate(-50%, -50%)'
					/>
				</Box>
			)}
		</Box>
	);
};

export default DividerAnimation;
