import React from 'react'
import { About } from '../About'
import { Blog } from '../Blog'
import { Experiences } from '../Experiences'
import { Hobbies } from '../Hobbies'
import { Paper } from '../Paper'
import { ProjectItem } from '../ProjectItem'
import { Skills } from '../Skills'

export const Layout = () => {
	return (
		<main className='max-w-5xl mx-auto flex flex-col gap-[2.625rem] px-3 md:px-0 my-6 md:mt-[4.375rem]'>
			<About />
			<div className='grid md:grid-cols-12 gap-[2.125rem] auto-rows-min'>
				<div className='flex flex-col gap-9 md:col-span-5'>
					<Skills />
					<Experiences />
					<Hobbies />
				</div>
				<div className='flex flex-col gap-4 md:col-span-7'>
					<Paper>
						<div className='flex items-center'>
							<p>
								Latest Project{' '}
								{/* <span className='font-mono text-lg leading-[20px] text-primary'>
								(3)
							</span> */}
							</p>
							<span className='ml-auto'>more</span>
						</div>
					</Paper>
					<Blog />
					<div className='flex flex-col gap-9'>
						<ProjectItem />
					</div>
				</div>
			</div>
			<Blog />
		</main>
	)
}
