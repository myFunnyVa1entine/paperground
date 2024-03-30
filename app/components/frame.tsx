enum WritingMode {
	HorizontalTb = 'horizontal-tb',
	VerticalLr = 'vertical-lr',
	VerticalRl = 'vertical-rl',
}

interface FrameProps {
	children?: React.ReactNode;
}

interface FrameContentProps {
	children?: React.ReactNode;
	rotate?: boolean;
	writingMode?: WritingMode;
}

export default function Frame({ children }: FrameProps) {
	return (
		<section className='relative h-full text-2xl sm:h-screen'>
			<article className='w-full absolute top-0 left-0 px-8 pt-2'>
				<div className='flex justify-between'>
					<div>GROUND</div>
					<div>PAPER GROUN</div>
				</div>
			</article>

			<div className='absolute top-10 left-0 right-0 bottom-6 sm:bottom-7 grid grid-cols-[auto_1fr_auto]'>
				<FrameContent rotate writingMode={WritingMode.VerticalLr}>
					<div className='flex justify-between my-1 sm:-mt-1'>
						<div>D</div>
						<div>PAPER</div>
					</div>
				</FrameContent>

				<article className='overflow-auto mb-2 w-full'>{children}</article>

				<FrameContent writingMode={WritingMode.VerticalRl}>
					<div className='flex justify-between mt-0.5 sm:-mb-1.5'>
						<div>D</div>
						<div>PAPER GRO</div>
					</div>
				</FrameContent>
			</div>

			<article className='w-full fixed bottom-0 right-0 px-8 sm:absolute'>
				<div className='flex justify-between rotate-180 bg-white'>
					<div>UND</div>
					<div>PAPER GROUN</div>
				</div>
			</article>
		</section>
	);
}

function FrameContent({
	children,
	rotate = false,
	writingMode,
}: FrameContentProps) {
	return (
		<article
			className={`${rotate ? 'rotate-180' : ''}`}
			style={{ writingMode }}>
			{children}
		</article>
	);
}
