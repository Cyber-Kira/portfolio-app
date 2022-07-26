import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import { ProjectItem } from '../ProjectItem'

export interface ProjectsInterface {
	title: string
	description: string
	tags: string[]
	imageLink: string
	demoLink: string
	sourceLink: string
}

// TODO: Create API
const projects = [
	{
		tags: ['React', 'Typescript', 'Redux', 'Tailwind'],
		title: '#Todo',
		description: 'A Todo application. Did a lot of work with CSS animations.',
		imageLink:
			'https://i.ibb.co/fQJ62q9/screencapture-todo-3cbda-web-app-2022-07-26-22-39-33.png',
		demoLink: 'https://todo-3cbda.web.app',
		sourceLink: 'https://github.com/Cyber-Kira/todo',
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
		title: 'Windbnb',
		description: 'An application to render stays with sorting.',
		imageLink:
			'https://i.ibb.co/2qgBsbL/Screenshot-from-2022-07-26-22-45-11.png',
		demoLink: 'https://windbnb-ae8e5.web.app',
		sourceLink: 'https://github.com/Cyber-Kira/windbnb',
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
		tags: ['JavaScript'],
		title: 'Brackets',
		description:
			'Implement function `check(str, bracketsConfig)`, that for given brackets sequence will return `true` if it is correct and `false` otherwise.',
		imageLink:
			'https://repository-images.githubusercontent.com/229449376/3cfde400-5298-11ea-9f39-aab161ef8f69',
		demoLink: '',
		sourceLink: 'https://github.com/Cyber-Kira/brackets',
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
		tags: ['Javascript', 'Course'],
		title: 'Arkanoid',
		description: 'Arkanoid game written on Javascript.',
		imageLink:
			'https://i.ibb.co/yFHs9Sm/screencapture-cyber-kira-github-io-canvas-arkanoid-2022-07-26-20-00-30.png',
		demoLink: 'https://cyber-kira.github.io/canvas-arkanoid/',
		sourceLink: 'https://github.com/Cyber-Kira/canvas-arkanoid',
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
		tags: ['React', 'Typescript', 'Tailwind'],
		title: 'Country Quiz',
		description: 'A country quiz application. Using REST Countries API.',
		imageLink:
			'https://i.ibb.co/1JRv2Lt/screencapture-country-quiz-60eea-web-app-2022-07-26-20-06-05.png',
		demoLink: 'https://country-quiz-60eea.web.app',
		sourceLink: 'https://github.com/Cyber-Kira/country-quiz',
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
		tags: ['Javascript'],
		title: 'Guessing Game',
		description: 'A guessing game class which using binary search algorithm.',
		imageLink:
			'https://repository-images.githubusercontent.com/229449376/3cfde400-5298-11ea-9f39-aab161ef8f69',
		demoLink: '',
		sourceLink: 'https://github.com/Cyber-Kira/guessing-game',
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
		title: 'My Gallery',
		description: 'A page that feature image gallery.',
		imageLink:
			'https://i.ibb.co/jH0ydFB/screencapture-cyber-kira-github-io-my-team-page-2022-01-27-21-04-15.png',
		demoLink: 'https://cyber-kira.github.io/my-team-page/',
		sourceLink: 'https://github.com/Cyber-Kira/my-team-page',
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
		tags: ['HTML', 'SASS'],
		title: 'Recipe Page.',
		description: 'Single Page recipe blog with responsive design.',
		imageLink:
			'https://i.ibb.co/NSb0Dtq/Screenshot-from-2022-07-26-22-31-03.png',
		demoLink: 'https://cyber-kira.github.io/recipe-page/',
		sourceLink: 'https://github.com/Cyber-Kira/recipe-page',
	},
	{
		tags: ['React', 'Redux', 'Javascript', 'Course'],
		title: 'Star Wars App.',
		description: 'Simple store. First time using Redux.',
		imageLink:
			'https://i.ibb.co/0XL1S4G/screencapture-redux-store-3512-web-app-2022-07-26-22-34-20.png',
		demoLink: 'https://redux-store-3512.web.app/',
		sourceLink: 'https://github.com/Cyber-Kira/redux-store',
	},
]

const Items = ({ currentItems }: { currentItems: ProjectsInterface[] }) => {
	return (
		<div className='grid md:grid-cols-3 gap-8 min-h-[500px]'>
			{currentItems &&
				// eslint-disable-next-line @typescript-eslint/no-unused-vars
				currentItems.map(item => {
					return (
						<ProjectItem
							title={item.title}
							description={item.description}
							tags={item.tags}
							imageLink={item.imageLink}
							demoLink={item.demoLink}
							sourceLink={item.sourceLink}
							key={item.title}
						/>
					)
				})}
		</div>
	)
}

export const Pagination = ({ itemsPerPage }: { itemsPerPage: number }) => {
	const [currentItems, setCurrentItems] = useState<ProjectsInterface[]>([])
	const [pageCount, setPageCount] = useState(0)
	const [itemOffset, setItemOffset] = useState(0)

	useEffect(() => {
		const endOffset = itemOffset + itemsPerPage
		setCurrentItems(projects.slice(itemOffset, endOffset))
		setPageCount(Math.ceil(projects.length / itemsPerPage))
	}, [itemOffset, itemsPerPage])

	const handlePageClick = (event: { selected: number }) => {
		const newOffset = (event.selected * itemsPerPage) % projects.length
		setItemOffset(newOffset)
	}

	return (
		<>
			<Items currentItems={currentItems} />
			<ReactPaginate
				breakLabel={<span className='material-icons'>more_horiz</span>}
				breakClassName='w-[2.25rem] h-[2.25rem] flex items-center justify-center'
				breakLinkClassName='font-roboto text-[22px] text-dark-200 flex items-center justify-center select-none'
				nextLabel={<span className='material-icons'>chevron_right</span>}
				nextClassName='border border-dark-200 rounded-[.25rem] w-[2.25rem] h-[2.25rem]'
				nextLinkClassName='font-roboto text-[.75rem] leading-[.875rem] font-normal w-full h-full flex items-center justify-center select-none'
				previousLabel={<span className='material-icons'>chevron_left</span>}
				previousClassName='border border-dark-200 rounded-[.25rem] w-[2.25rem] h-[2.25rem]'
				previousLinkClassName='font-roboto text-[.75rem] leading-[.875rem] font-normal w-full h-full flex items-center justify-center select-none'
				activeClassName='border-accent'
				activeLinkClassName='bg-accent text-white'
				pageClassName='border border-dark-200 rounded-[4px] w-[2.25rem] h-[2.25rem] hover:border-accent hover:text-accent transition-colors'
				pageLinkClassName='font-roboto text-[.75rem] leading-[.875rem] font-normal w-full h-full flex items-center justify-center select-none'
				containerClassName='flex gap-4 self-end mt-4'
				onPageChange={handlePageClick}
				pageCount={pageCount}
				pageRangeDisplayed={2}
				marginPagesDisplayed={2}
			/>
		</>
	)
}
