import React from 'react'

export const Paper = ({
	children,
	shadow,
}: {
	children: React.ReactNode
	shadow?: boolean
}) => {
	return (
		<div className='relative w-full rounded-xl p-[1.375rem] bg-white font-montserrat'>
			{children}
			{shadow ? (
				<div className='absolute bottom-0 left-[15%] right-[15%] h-5 rounded-full -z-10 shadow-main' />
			) : null}
		</div>
	)
}
