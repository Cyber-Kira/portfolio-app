/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { useSize } from '../../lib/hooks/useSize'
import { Paper } from '../Paper'
import img from './assets/coffee.png'

export const Blog = () => {
	const { size, currentRef } = useSize()

	// const gridRowsStyles =
	// 	size === 'mobile'
	// 		? {
	// 				gridTemplateRows: 'repeat(2, minmax(0, 1fr))',
	// 		  }
	// 		: {
	// 				gridAutoRows: 0,
	// 		  }

	return (
		<Paper paddingRight={0} shadow>
			<section ref={currentRef}>
				<div className='flex flex-col h-full'>
					<span className='font-medium text-base leading-[20px] text-neutral-200'>
						Blog
					</span>
					<div>
						<div className='grid grid-cols-2 grid-rows-2'>
							<div className='grid grid-rows-2 row-span-2'>
								<p className='font-medium text-2xl leading-[29px] text-dark-100 mt-[1.875rem]'>
									How to organize your CSS
								</p>
								<div>
									<p className='font-medium text-base leading-[20px] text-primary mb-6'>
										In this article i tell the story about Proin eu justo sit
										amet lacus bibendum tincidunt. Vivamus non volutpat nisl, a
										luctus mi.
									</p>
									<p className='font-medium text-base leading-[20px] text-primary'>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Adipisci provident reprehenderit quam quod?
									</p>
								</div>
							</div>
							<div className='overflow-hidden'>
								<img
									className='translate-x-10 rounded-xl'
									src={img}
									alt='Coffee'
								/>
							</div>
						</div>
					</div>
					<span className='mt-auto font-medium text-base leading-[20px] text-accent cursor-pointer'>
						dev.to
					</span>
				</div>
			</section>
		</Paper>
	)
}
