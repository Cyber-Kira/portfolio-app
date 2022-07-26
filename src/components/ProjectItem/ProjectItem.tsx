/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { useSize } from '../../lib/hooks/useSize'
import { ProjectsInterface } from '../Pagination'
import { Paper } from '../Paper'

export const ProjectItem = ({
	title,
	description,
	tags,
	imageLink,
	demoLink,
	sourceLink,
}: ProjectsInterface) => {
	const { size, currentRef } = useSize()

	const flexStyles =
		size === 'mobile'
			? {
					flexDirection: 'column' as const,
					gap: '1.375rem',
			  }
			: {
					flexDirection: 'row' as const,
			  }

	return (
		<Paper shadow>
			<section
				ref={currentRef}
				className='flex flex-col gap-[3.25rem] h-full'
				style={flexStyles}
			>
				<div className='basis-[42%] h-full'>
					<div className='max-h-[150px] h-[150px]'>
						<img
							className='w-full max-h-full rounded-xl object-cover'
							src={imageLink}
							alt={title}
							loading='lazy'
							height={150}
						/>
					</div>
				</div>
				<div className='basis-[58%]'>
					<div className='flex flex-col h-full'>
						<ul className='flex flex-wrap gap-2 font-medium text-base leading-[20px] text-dark-200'>
							{tags.map(tag => {
								return <li key={tag}>#{tag}</li>
							})}
						</ul>
						<span className='font-medium text-2xl leading-[29px] text-dark-100 mt-[1.5625rem] mb-[1.125rem]'>
							{title}
						</span>
						<p className='font-medium text-base leading-[20px] text-primary mb-[2.5625rem]'>
							{description}
						</p>
						<div className='flex items-center gap-3 mt-auto flex-wrap'>
							<a
								href={demoLink}
								target='_blank'
								rel='noreferrer'
								className='font-medium text-lg leading-[22px] text-white bg-accent  hover:shadow-lg rounded-xl pl-10 pr-[2.375rem] pt-[.8125rem] pb-[.6875rem] transition-all'
								type='button'
							>
								Demo
							</a>
							<a
								href={sourceLink}
								target='_blank'
								rel='noreferrer'
								className='font-medium text-lg leading-[22px] text-accent border border-accent hover:bg-accent hover:text-white transition-colors rounded-xl px-[2.1875rem] py-3'
								type='button'
							>
								Code
							</a>
						</div>
					</div>
				</div>
			</section>
		</Paper>
	)
}
