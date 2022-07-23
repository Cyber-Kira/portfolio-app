import React from 'react'
import { useSize } from '../../lib/hooks/useSize'
import { Paper } from '../Paper'
import Medscan from './assets/medscan.webp'
import Cetera from './assets/cetera.jpg'

const data = [
	{
		workingPeriod: '2021 June - Current',
		title: 'Technical Support Engineer',
		description:
			'Working with Active Directory, managing 300+ PCs. Working with QMs. Mentoring.',
		img: Medscan,
	},
	{
		workingPeriod: 'July 2020 - September 2020',
		title: 'Web Developer',
		description:
			'Creating plugins for local CMS (Cetera CMS), mostly on PHP. Publishing content and making HTML-CSS layouts.',
		img: Cetera,
	},
]

export const Experiences = () => {
	const { size, currentRef } = useSize()

	const flexStyles =
		size === 'mobile'
			? {
					flexDirection: 'column' as const,
					gap: '2.25rem',
			  }
			: {
					flexDirection: 'row' as const,
					gap: '4.5rem',
			  }

	const marginStyles =
		size === 'mobile'
			? {
					marginBottom: '2.75rem',
			  }
			: {
					marginBottom: '1.75rem',
			  }

	return (
		<Paper shadow>
			<section ref={currentRef}>
				<span
					className='block font-medium text-2xl leading-[29px] text-dark-200'
					style={marginStyles}
				>
					Experiences
				</span>
				<ul>
					<li>
						<div className='flex justify-between gap-4' style={flexStyles}>
							{data.map(item => {
								return (
									<div className='flex gap-4'>
										<img className='w-16 h-16' src={item.img} alt='Medscan' />
										<div>
											<p className='font-medium text-sm leading-[17px] text-primary'>
												{item.workingPeriod}
											</p>
											<p className='font-semibold text-base leading-[20px] text-dark-100 mt-3 mb-8'>
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
