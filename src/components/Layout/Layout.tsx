import React, { useEffect, useState } from 'react'
import { About } from '../About'
import { Blog } from '../Blog'
import { Experiences } from '../Experiences'
import { Hobbies } from '../Hobbies'
import { Pagination } from '../Pagination'
import { ProjectItem } from '../ProjectItem'
import { Skills } from '../Skills'
import { Tags } from '../Tags'
import { Title } from '../Title'

const latestProject = {
	tags: ['React', 'Typescript', 'Redux', 'Tailwind'],
	title: 'Weather App',
	description:
		'An application to display weather for current location or using search. Using openweather API.',
	imageLink: 'https://i.ibb.co/X3xMbQ5/Screenshot-from-2022-07-26-22-43-09.png',
	demoLink: 'https://weather-app-67e25.web.app',
	sourceLink: 'https://github.com/Cyber-Kira/weather-app',
}

export interface TagInterface {
	name: string
	isChecked: boolean
}

export const Layout = () => {
	const [currentTags, setCurrentTags] = useState<TagInterface[]>([])

	useEffect(() => {
		setCurrentTags([
			{ name: 'React', isChecked: false },
			{ name: 'Redux', isChecked: false },
			{ name: 'Typescript', isChecked: false },
			{ name: 'Javascript', isChecked: false },
			{ name: 'HTML', isChecked: false },
			{ name: 'CSS', isChecked: false },
			{ name: 'SASS', isChecked: false },
			{ name: 'Tailwind', isChecked: false },
			{ name: 'Course', isChecked: false },
		])
	}, [])

	return (
		<main className='max-w-5xl mx-auto flex flex-col gap-9 px-3 md:px-0 my-6 md:mt-[4.375rem]'>
			<About />
			<div className='grid md:grid-cols-12 gap-[2.1875rem] auto-rows-min'>
				<div className='flex flex-col gap-9 md:col-span-5'>
					<Skills />
					<Experiences />
					<Hobbies />
				</div>
				<div className='flex flex-col gap-9 md:col-span-7'>
					<div className='flex flex-col gap-4'>
						<Title>
							<div className='flex'>
								<span>Latest Project</span>
								<button
									type='button'
									onClick={() =>
										window.scrollTo({
											top: document.body.scrollHeight,
											behavior: 'smooth',
										})
									}
									className='ml-auto hover:text-accent transition-colors'
								>
									more
								</button>
							</div>
						</Title>
						<ProjectItem
							title={latestProject.title}
							description={latestProject.description}
							tags={latestProject.tags}
							imageLink={latestProject.imageLink}
							demoLink={latestProject.demoLink}
							sourceLink={latestProject.sourceLink}
						/>
					</div>
					<div className='flex flex-col gap-4 items-stretch'>
						<Title title='Blog' />
						<Blog />
					</div>
				</div>
			</div>
			<div className='flex flex-col gap-4'>
				<Title
					title='Projects'
					count={22}
					tags={<Tags tags={currentTags} setTags={setCurrentTags} />}
				/>
				<Pagination itemsPerPage={3} />
			</div>
		</main>
	)
}
