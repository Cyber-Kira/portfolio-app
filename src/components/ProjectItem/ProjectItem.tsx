import React from 'react'
import { useSize } from '../../lib/hooks/useSize'
import { Paper } from '../Paper'

export const ProjectItem = () => {
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
				className='flex flex-col gap-[3.25rem]'
				style={flexStyles}
			>
				<div className='basis-[42%]'>
					<img
						className='w-full h-auto rounded-xl max-h-[267px] object-cover'
						src='https://i.ibb.co/BfHXPkN/screencapture-weather-app-67e25-web-app-2022-07-23-09-39-29.png'
						alt='White Man'
					/>
				</div>
				<div className='basis-[58%]'>
					<div className='flex flex-col h-full'>
						<ul className='flex gap-2 font-medium text-base leading-[20px] text-dark-200'>
							<li>#HTML</li>
							<li>#CSS</li>
							<li>#responsive</li>
						</ul>
						<span className='font-medium text-2xl leading-[29px] text-dark-100 mt-[1.5625rem] mb-[1.125rem]'>
							Recipe Blog
						</span>
						<p className='font-medium text-base leading-[20px] text-primary mb-[2.5625rem]'>
							In this project, I work with HTML and CSS to create a responsive
							page . The design is from devchallenge.io. Donec aliquam est dui,
							vel vestibulum diam sollicitudin id. Quisque feugiat malesuada
							molestie.{' '}
						</p>
						<div className='flex items-center gap-3 mt-auto flex-wrap'>
							<button
								className='font-medium text-lg leading-[22px] text-white bg-accent  hover:shadow-lg rounded-xl pl-10 pr-[2.375rem] pt-[.8125rem] pb-[.6875rem] transition-all'
								type='button'
							>
								Demo
							</button>
							<button
								className='font-medium text-lg leading-[22px] text-accent border border-accent hover:bg-accent hover:text-white transition-colors rounded-xl px-[2.1875rem] py-3'
								type='button'
							>
								Code
							</button>
						</div>
					</div>
				</div>
			</section>
		</Paper>
	)
}
