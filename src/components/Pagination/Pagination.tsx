import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import { ProjectItem } from '../ProjectItem'

const items = [...Array(15).keys()]

const Items = ({ currentItems }: { currentItems: number[] }) => {
	return (
		<div className='grid md:grid-cols-3 gap-8'>
			{currentItems &&
				// eslint-disable-next-line @typescript-eslint/no-unused-vars
				currentItems.map(item => {
					return <ProjectItem />
				})}
		</div>
	)
}

export const Pagination = ({ itemsPerPage }: { itemsPerPage: number }) => {
	const [currentItems, setCurrentItems] = useState<number[]>([])
	const [pageCount, setPageCount] = useState(0)
	const [itemOffset, setItemOffset] = useState(0)

	useEffect(() => {
		const endOffset = itemOffset + itemsPerPage
		setCurrentItems(items.slice(itemOffset, endOffset))
		setPageCount(Math.ceil(items.length / itemsPerPage))
	}, [itemOffset, itemsPerPage])

	const handlePageClick = (event: { selected: number }) => {
		const newOffset = (event.selected * itemsPerPage) % items.length
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
