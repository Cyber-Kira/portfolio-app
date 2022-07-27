import React from 'react'

export const Paper = ({
	children,
	shadow,
	paddingRight,
	paddingLeft,
	paddingTop,
	paddingBottom,
}: {
	children: React.ReactNode
	shadow?: boolean
	paddingRight?: number
	paddingLeft?: number
	paddingTop?: number
	paddingBottom?: number
}) => {
	return (
		<div
			className='relative w-full rounded-xl p-[1.375rem] bg-white dark:bg-[#1e293b] dark:text-neutral-200 font-montserrat h-full transition-all'
			style={{
				paddingRight,
				paddingLeft,
				paddingTop,
				paddingBottom,
			}}
		>
			{children}
			{shadow ? (
				<div className='absolute bottom-0 left-[15%] right-[15%] h-5 rounded-full -z-10 shadow-main dark:shadow-mainDark' />
			) : null}
		</div>
	)
}
