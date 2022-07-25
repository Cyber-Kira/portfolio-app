import React from 'react'
import { Paper } from '../Paper'

export const Title = ({
	count,
	title,
	children,
	tags,
}: {
	count?: number
	title?: string
	children?: React.ReactNode
	tags?: React.ReactNode
}) => {
	return (
		<Paper>
			<div>
				{children ?? <span>{title} </span>}
				{count ? (
					<span className='font-mono text-lg leading-[20px] text-primary'>
						({count})
					</span>
				) : null}
				{tags ?? tags}
			</div>
		</Paper>
	)
}
