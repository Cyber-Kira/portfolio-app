import React from 'react'
import { useSize } from '../../lib/hooks/useSize'
import { Paper } from '../Paper'
import GameDev from './assets/unity.webp'
import Music from './assets/flstudio.png'

const data = [
	{
		title: 'Game Development',
		description: 'In my spare time I like to create little games on Unity!',
		img: GameDev,
	},
	{
		title: 'Music Production',
		description:
			"Sometimes i like to sample beats and play on my MIDI. (it's actually fun)",
		img: Music,
	},
]

export const Hobbies = () => {
	const { size, currentRef } = useSize()

	const flexStyles =
		size === 'mobile'
			? {
					gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
					gap: '2.25rem',
			  }
			: {
					gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
					gap: '4.5rem',
			  }

	const marginStyles =
		size === 'mobile'
			? {
					marginBottom: '1.625rem',
			  }
			: {
					marginBottom: '1.375rem',
			  }

	return (
		<Paper shadow>
			<section ref={currentRef}>
				<span
					className='block font-medium text-2xl leading-[29px] text-dark-200'
					style={marginStyles}
				>
					Hobbies
				</span>
				<ul>
					<li>
						<div
							className='grid grid-cols-3 justify-between gap-4'
							style={flexStyles}
						>
							{data.map(item => {
								return (
									<div key={item.title} className='flex gap-4'>
										<div className='w-full'>
											<img
												className='w-full h-auto max-h-[8.625rem] object-cover rounded-xl'
												src={item.img}
												alt='Medscan'
											/>
											<p className='font-semibold text-lg leading-[22px] text-dark-100 mt-[1.625rem] mb-[.625rem]'>
												{item.title}
											</p>
											<p className='font-medium text-base leading-[20px] text-primary'>
												{item.description}
											</p>
										</div>
									</div>
								)
							})}
						</div>
					</li>
				</ul>
			</section>
		</Paper>
	)
}
