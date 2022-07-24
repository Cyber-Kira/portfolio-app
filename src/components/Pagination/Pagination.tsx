/* eslint-disable no-console */
import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'

const items = [1, 2, 3, 4, 5]

const Items = ({ currentItems }: { currentItems: [] }) => {
	return (
		currentItems &&
		currentItems.map(item => (
			<div>
				<h3>Item #{item}</h3>
			</div>
		))
	)
}

export const Pagination = ({ itemsPerPage }: { itemsPerPage: number }) => {
	const [currentItems, setCurrentItems] = useState<number[]>([])
	const [pageCount, setPageCount] = useState(0)
	const [itemOffset, setItemOffset] = useState(0)

	useEffect(() => {
		const endOffset = itemOffset + itemsPerPage
		console.log(`Loading items from ${itemOffset} to ${endOffset}`)
		setCurrentItems(items.slice(itemOffset, endOffset))
		setPageCount(Math.ceil(items.length / itemsPerPage))
	}, [itemOffset, itemsPerPage])

	const handlePageClick = (event: HTMLInputElement) => {
		const newOffset = (event.selected * itemsPerPage) % items.length
		console.log(
			`User requested page number ${event.selected}, which is offset ${newOffset}`
		)
		setItemOffset(newOffset)
	}

	return (
		<>
			<Items currentItems={currentItems} />
			<ReactPaginate
				breakLabel='...'
				nextLabel='next >'
				onPageChange={handlePageClick}
				pageRangeDisplayed={5}
				pageCount={pageCount}
				previousLabel='< previous'
				renderOnZeroPageCount={null}
			/>
		</>
	)
}
