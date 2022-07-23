/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useRef, useEffect, useState } from 'react'
import { useSize } from '../../lib/hooks/useSize'
import { useResize } from '../../lib/hooks/useResize'
import { Paper } from '../Paper'
import { SkillProgression } from './components/SkillProgression'

const data = [
	{
		name: 'React',
		progress: 75,
	},
	{
		name: 'Typescript',
		progress: 70,
	},
	{
		name: 'Redux',
		progress: 50,
	},
	{
		name: 'MobX',
		progress: 15,
	},
	{
		name: 'Next.JS',
		progress: 10,
	},
	{
		name: 'SASS',
		progress: 65,
	},
]

export const Skills = () => {
	const { size, currentRef } = useSize()
	const layoutStyles =
		size === 'mobile'
			? {
					gridTemplateColumns: `repeat(1, minmax(0, 1fr))`,
			  }
			: {
					gridTemplateColumns: `repeat(2, minmax(0, 1fr))`,
					columnGap: '3.3125rem',
			  }

	return (
		<Paper shadow>
			<section ref={currentRef}>
				<div>
					<p className='font-bold text-lg leading-[22px] uppercase mb-4'>
						Front end
					</p>
					<div>
						<ul className='w-full grid grid-cols-2 gap-4' style={layoutStyles}>
							{data.map(item => {
								return (
									<li className='flex items-center'>
										<span className='font-medium text-base leading-[20px] text-dark-200 basis-3/6'>
											{item.name}
										</span>
										<SkillProgression width={item.progress} />
									</li>
								)
							})}
						</ul>
					</div>
				</div>
			</section>
		</Paper>
	)
}
