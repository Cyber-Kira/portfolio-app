/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react'
import { setTheme } from '../../lib/utils'
import { About } from '../About'
import { Blog } from '../Blog'
import { Experiences } from '../Experiences'
import { Features } from '../Features'
import { Footer } from '../Footer'
import { Hobbies } from '../Hobbies'
import { Pagination, ProjectsInterface } from '../Pagination'
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

const projects = [
	{
		tags: ['React', 'Typescript', 'Express', 'Tailwind'],
		title: 'My Unsplash',
		description:
			'An application to upload and view images.',
		imageLink:
			'https://i.ibb.co/p0BqQFr/da0ca8db-8b95-4213-98be-546903a4edc0.png',
		demoLink: 'https://stirring-paletas-f5ab8e.netlify.app/',
		sourceLink: 'https://github.com/Cyber-Kira/my-unsplash',
	},
	{
		tags: ['React', 'Typescript', 'Express', 'Tailwind'],
		title: 'Image Uploader',
		description:
			'An application to upload images.',
		imageLink:
			'https://i.ibb.co/wrW96kT/Image-Uploader.png',
		demoLink: 'https://chic-praline-3efcca.netlify.app/',
		sourceLink: 'https://github.com/Cyber-Kira/image-uploader',
	},
	{
		tags: ['React', 'Typescript', 'Redux', 'Tailwind'],
		title: 'Weather App',
		description:
			'An application to display weather for current location or using search. Using openweather API.',
		imageLink:
			'https://i.ibb.co/X3xMbQ5/Screenshot-from-2022-07-26-22-43-09.png',
		demoLink: 'https://weather-app-67e25.web.app',
		sourceLink: 'https://github.com/Cyber-Kira/weather-app',
	},
	{
		tags: ['React', 'Typescript', 'Redux', 'Tailwind'],
		title: '#Todo',
		description:
			'A Todo application. Did a lot of work with CSS animations. Best works on mobile',
		imageLink:
			'https://i.ibb.co/fQJ62q9/screencapture-todo-3cbda-web-app-2022-07-26-22-39-33.png',
		demoLink: 'https://todo-3cbda.web.app',
		sourceLink: 'https://github.com/Cyber-Kira/todo',
	},

	{
		tags: ['React', 'Typescript', 'Redux', 'Tailwind'],
		title: 'Windbnb',
		description: 'An application to render stays with sorting.',
		imageLink:
			'https://i.ibb.co/2qgBsbL/Screenshot-from-2022-07-26-22-45-11.png',
		demoLink: 'https://windbnb-ae8e5.web.app',
		sourceLink: 'https://github.com/Cyber-Kira/windbnb',
	},
	{
		tags: ['React', 'Typescript', 'Tailwind'],
		title: 'Country Quiz',
		description: 'A country quiz application. Using REST Countries API.',
		imageLink:
			'https://i.ibb.co/1JRv2Lt/screencapture-country-quiz-60eea-web-app-2022-07-26-20-06-05.png',
		demoLink: 'https://country-quiz-60eea.web.app',
		sourceLink: 'https://github.com/Cyber-Kira/country-quiz',
	},
	{
		tags: ['React', 'Typescript', 'SASS'],
		title: 'Button Component',
		description:
			'A reusable button with all the states in the design and a page displaying all the states.',
		imageLink: 'https://i.ibb.co/B3DrHBj/1.png',
		demoLink: 'https://devchallenges-63e63.web.app/',
		sourceLink: 'https://github.com/Cyber-Kira/button-component',
	},
	{
		tags: ['React', 'Typescript', 'SASS'],
		title: 'Input Component',
		description:
			'A reusable input with all the states in the design and a page displaying all the states.',
		imageLink: 'https://i.ibb.co/B3DrHBj/1.png',
		demoLink: 'https://devchallenges-63e63.web.app/inputs',
		sourceLink: 'https://github.com/Cyber-Kira/button-component',
	},
	{
		tags: ['React', 'Typescript', 'Redux', 'Tailwind'],
		title: 'Quote Generator',
		description:
			'A quote generator application with responsive design. Using Quote Garden API.',
		imageLink:
			'https://i.ibb.co/2kD2zZm/screencapture-quote-generator-69e0d-web-app-2022-07-26-21-06-31.png',
		demoLink: 'https://quote-generator-69e0d.web.app/',
		sourceLink: 'https://github.com/Cyber-Kira/quote-generator',
	},
	{
		tags: ['HTML', 'SASS', 'Javascript'],
		title: 'Checkout Page',
		description: 'A checkout page with responsive design.',
		imageLink:
			'https://i.ibb.co/4fg2Ndx/screencapture-cyber-kira-github-io-checkout-page-2022-02-19-17-51-07.png',
		demoLink: 'https://cyber-kira.github.io/checkout-page',
		sourceLink: 'https://cyber-kira.github.io/checkout-page',
	},
	{
		tags: ['React', 'Typescript', 'Redux', "Tailwind"],
		title: 'Github Jobs',
		description: 'This project was abandoned due to ',
		imageLink:
			'https://i.ibb.co/30kh7pX/screencapture-githubjobs-94cd2-web-app-2022-08-01-13-14-13.png',
		demoLink: 'https://githubjobs-94cd2.web.app',
		sourceLink: 'https://github.com/Cyber-Kira/github-jobs',
	},
	{
		tags: ['HTML', 'SASS'],
		title: 'Edie Homepage',
		description: "Single page Edie's startup page with responsive design.",
		imageLink:
			'https://i.ibb.co/F5qHr2Z/Screenshot-from-2022-07-26-20-15-03.png',
		demoLink: 'https://cyber-kira.github.io/edie-homepage/',
		sourceLink: 'https://github.com/Cyber-Kira/edie-homepage',
	},
	{
		tags: ['HTML', 'SASS', 'Javascript'],
		title: 'Interior Consultant',
		description: 'An Interior Consultant homepage with responsive design.',
		imageLink:
			'https://i.ibb.co/4Zj5cCr/screencapture-127-0-0-1-5500-2022-02-09-15-10-24.png',
		demoLink: 'https://cyber-kira.github.io/interior-consultant',
		sourceLink: 'https://github.com/Cyber-Kira/interior-consultant',
	},
	{
		tags: ['HTML', 'SASS'],
		title: 'My Gallery',
		description: 'A page that feature image gallery.',
		imageLink:
			'https://i.ibb.co/mHhdbFh/screencapture-cyber-kira-github-io-my-gallery-2022-02-15-11-18-21.png',
		demoLink: 'https://cyber-kira.github.io/my-gallery',
		sourceLink: 'https://github.com/Cyber-Kira/my-gallery',
	},
	{
		tags: ['HTML', 'CSS'],
		title: 'My Team Page',
		description: 'A page that feature team page.',
		imageLink:
			'https://i.ibb.co/jH0ydFB/screencapture-cyber-kira-github-io-my-team-page-2022-01-27-21-04-15.png',
		demoLink: 'https://cyber-kira.github.io/my-team-page/',
		sourceLink: 'https://github.com/Cyber-Kira/my-team-page',
	},
	{
		tags: ['HTML', 'SASS'],
		title: 'Recipe Page.',
		description: 'Single Page recipe blog with responsive design.',
		imageLink:
			'https://i.ibb.co/NSb0Dtq/Screenshot-from-2022-07-26-22-31-03.png',
		demoLink: 'https://cyber-kira.github.io/recipe-page/',
		sourceLink: 'https://github.com/Cyber-Kira/recipe-page',
	},
	{
		tags: ['HTML', 'CSS'],
		title: '404 Not Found',
		description: 'A 404 not found page with responsive design.',
		imageLink:
			'https://i.ibb.co/ydrJ7H3/screencapture-cyber-kira-github-io-404-not-found-2022-01-12-10-39-19.png',
		demoLink: 'https://cyber-kira.github.io/404-not-found',
		sourceLink: 'https://github.com/Cyber-Kira/404-not-found',
	},
	{
		tags: ['HTML', 'SASS', 'Javascript'],
		title: 'Productly',
		description: 'A single page design.',
		imageLink:
			'https://i.ibb.co/1dSC3HY/Screenshot-from-2022-07-26-21-03-44.png',
		demoLink: 'https://cyber-kira.github.io/productly-landing-page/',
		sourceLink: 'https://github.com/Cyber-Kira/productly-landing-page',
	},
	{
		tags: ['React', 'Javascript', 'Course'],
		title: 'Game of Thrones App',
		description:
			'An application to render Game of Thrones characters, houses and books. Using Ice And Fire API.',
		imageLink:
			'https://i.ibb.co/KmVw1Zn/Screenshot-from-2022-07-26-22-07-56.png',
		demoLink: 'https://gotapp-3033a.web.app/',
		sourceLink: 'https://github.com/Cyber-Kira/react-got-app',
	},
	{
		tags: ['React', 'Javascript', 'Course'],
		title: 'Star Wars App.',
		description:
			'An application to render Star Wars characters, planets and starships. Using SWAPI.',
		imageLink:
			'https://i.ibb.co/VHm57gR/screencapture-star-wars-app-c3355-web-app-people-4-2022-07-26-22-25-30.png',
		demoLink: 'https://star-wars-app-c3355.web.app/',
		sourceLink: 'https://github.com/Cyber-Kira/react-star-wars-app',
	},
	{
		tags: ['React', 'Redux', 'Javascript', 'Course'],
		title: 'ReStore.',
		description: 'Simple store. First time using Redux.',
		imageLink:
			'https://i.ibb.co/0XL1S4G/screencapture-redux-store-3512-web-app-2022-07-26-22-34-20.png',
		demoLink: 'https://redux-store-3512.web.app/',
		sourceLink: 'https://github.com/Cyber-Kira/redux-store',
	},
	{
		tags: ['Javascript', 'Course'],
		title: 'Arkanoid',
		description: 'Arkanoid game written on Javascript.',
		imageLink:
			'https://i.ibb.co/yFHs9Sm/screencapture-cyber-kira-github-io-canvas-arkanoid-2022-07-26-20-00-30.png',
		demoLink: 'https://cyber-kira.github.io/canvas-arkanoid/',
		sourceLink: 'https://github.com/Cyber-Kira/canvas-arkanoid',
	},
	{
		tags: ['Javascript'],
		title: 'Guessing Game',
		description: 'A guessing game class which using binary search algorithm.',
		imageLink:
			'https://repository-images.githubusercontent.com/229449376/3cfde400-5298-11ea-9f39-aab161ef8f69',
		demoLink: '',
		sourceLink: 'https://github.com/Cyber-Kira/guessing-game',
	},
	{
		tags: ['Javascript'],
		title: 'Mind Games',
		description: 'Set of games that runs in the console.',
		imageLink:
			'https://repository-images.githubusercontent.com/229449376/3cfde400-5298-11ea-9f39-aab161ef8f69',
		demoLink: '',
		sourceLink: 'https://github.com/Cyber-Kira/Mind-games',
	},
	{
		tags: ['Javascript'],
		title: 'Morse Decoder',
		description: 'A function, that decodes Morse code and returns a string.',
		imageLink:
			'https://repository-images.githubusercontent.com/229449376/3cfde400-5298-11ea-9f39-aab161ef8f69',
		demoLink: '',
		sourceLink: 'https://github.com/Cyber-Kira/morse-decoder',
	},
	{
		tags: ['JavaScript'],
		title: 'Brackets',
		description:
			'Implement function `check(str, bracketsConfig)`, that for given brackets sequence will return `true` if it is correct and `false` otherwise.',
		imageLink:
			'https://repository-images.githubusercontent.com/229449376/3cfde400-5298-11ea-9f39-aab161ef8f69',
		demoLink: '',
		sourceLink: 'https://github.com/Cyber-Kira/brackets',
	},
]

export interface TagInterface {
	name: string
	isChecked: boolean
}

export const Layout = () => {
	const [currentTags, setCurrentTags] = useState<TagInterface[]>([])
	const [filteredProjects, setFilteredProjects] =
		useState<ProjectsInterface[]>(projects)

	const updateProjects = () => {
		setFilteredProjects(projects)

		if (currentTags.filter(tag => tag.isChecked).length === 0) {
			return projects
		}

		const filteredTags = currentTags
			.filter(tag => tag.isChecked)
			.map(tag => tag.name)

		return projects.filter(project =>
			filteredTags.every(tag => project.tags.includes(tag))
		)
	}

	useEffect(() => {
		setTheme(localStorage.theme ?? 'light')
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

	useEffect(() => {
		const newProjects = updateProjects()

		setFilteredProjects(newProjects)
	}, [currentTags])

	return (
		<>
			<main className='max-w-6xl mx-auto flex flex-col gap-9 px-3 md:px-0 my-6 md:mt-[4.375rem]'>
				<Features />
				<About />
				<div className='grid md:grid-cols-12 gap-[2.1875rem] auto-rows-min'>
					<div className='flex flex-col gap-9 md:col-span-4'>
						<Skills />
						<Experiences />
					</div>
					<div className='flex flex-col gap-9 md:col-span-8'>
						<div className='flex flex-col gap-4'>
							<Title>
								<div className='flex'>
									<span>Latest Project</span>
									<button
										type='button'
										onClick={() => {
											const top = document.getElementById('Projects')?.offsetTop

											if (top)
												window.scrollTo({
													top,
													behavior: 'smooth',
												})
										}}
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
							<Hobbies />
							{/* <Title title='Blog' />
						<Blog /> */}
						</div>
					</div>
				</div>
				<div className='flex flex-col gap-4' id='Projects'>
					<Title
						title='Projects'
						count={filteredProjects.length}
						tags={<Tags tags={currentTags} setTags={setCurrentTags} />}
					/>
					<Pagination projects={filteredProjects} itemsPerPage={3} />
				</div>
				<div className='message-wrapper' />
			</main>
			<Footer />
		</>
	)
}
