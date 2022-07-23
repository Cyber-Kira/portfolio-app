import React from 'react'

export const SkillProgression = ({ width = 100 }: { width?: number }) => {
	return (
		<div className='w-full bg-neutral-100 h-[.5625rem] rounded-full'>
			<div
				className='w-full bg-accent h-[.5625rem] rounded-full'
				style={{
					width: `${width}%`,
				}}
			/>
		</div>
	)
}
