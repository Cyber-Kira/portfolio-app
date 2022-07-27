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

const Items = ({ currentItems }: { currentItems: ProjectsInterface[] }) => {
	return (
		<div className='grid md:grid-cols-3 gap-8 min-h-[500px]'>
			{currentItems &&
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

export const Pagination = ({
	itemsPerPage,
	projects,
}: {
	itemsPerPage: number
	projects: ProjectsInterface[]
}) => {
	const [currentItems, setCurrentItems] = useState<ProjectsInterface[]>([])
	const [pageCount, setPageCount] = useState(0)
	const [itemOffset, setItemOffset] = useState(0)

	useEffect(() => {
		const endOffset = itemOffset + itemsPerPage
		setCurrentItems(projects.slice(itemOffset, endOffset))
		setPageCount(Math.ceil(projects.length / itemsPerPage))
	}, [itemOffset, itemsPerPage, projects])

	const handlePageClick = (event: { selected: number }) => {
		const newOffset = (event.selected * itemsPerPage) % projects.length
		const top = document.getElementById('Projects')?.offsetTop

		setItemOffset(newOffset)

		// Not DRY : Layout, line 293
		// TODO: create helper function
		if (top)
			window.scrollTo({
				top,
				behavior: 'smooth',
			})
	}

	return (
		<>
			<Items currentItems={currentItems} />
			<ReactPaginate
				breakLabel={<span className='material-icons'>more_horiz</span>}
				breakClassName='w-[2.25rem] h-[2.25rem] flex items-center justify-center'
				breakLinkClassName='font-roboto text-[22px] text-dark-200 flex items-center justify-center select-none'
				nextLabel={<span className='material-icons'>chevron_right</span>}
				nextClassName='border border-dark-200 hover:border-accent hover:text-accent dark:hover:text-accent dark:hover:border-accent dark:border-neutral-200 rounded-[.25rem] w-[2.25rem] h-[2.25rem] transition-colors'
				nextLinkClassName='font-roboto text-[.75rem] leading-[.875rem] font-normal w-full h-full flex items-center justify-center select-none'
				previousLabel={<span className='material-icons'>chevron_left</span>}
				previousClassName='border border-dark-200 hover:border-accent hover:text-accent dark:hover:text-accent dark:hover:border-accent dark:border-neutral-200 dark:text-neutral-200 rounded-[.25rem] w-[2.25rem] h-[2.25rem] transition-colors'
				previousLinkClassName='font-roboto text-[.75rem] leading-[.875rem] font-normal w-full h-full flex items-center justify-center select-none'
				activeClassName='border-accent dark:border-accent'
				activeLinkClassName='bg-accent text-white'
				pageClassName='border border-dark-200 dark:border-neutral-200 dark:text-neutral-200 rounded-[4px] w-[2.25rem] h-[2.25rem] hover:border-accent dark:hover:border-accent dark:hover:text-accent hover:text-accent transition-colors'
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
