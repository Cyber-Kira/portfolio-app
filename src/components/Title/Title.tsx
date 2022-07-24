import React, { Children } from 'react'
import { Paper } from '../Paper'

export const Title = ({
	countable,
	title,
	tags,
	children,
}: {
	countable?: boolean
	title: string
	tags?: string[]
	children?: React.ReactNode
}) => {
	const countArrayLength = Children.toArray(children).length

	return (
		<>
			<Paper>
				<div>
					<span>{title} </span>
					{countable ? (
						<span className='font-mono text-lg leading-[20px] text-primary'>
							({countArrayLength})
						</span>
					) : null}
				</div>
				{tags ? (
					<div className='flex gap-4 mt-4'>
						{tags?.map(tag => {
							return (
								<ul>
									<li>
										<button
											className='font-medium text-sm leading-[17px] px-[22px] py-2 text-accent border border-dark-200 hover:bg-accent hover:text-white rounded-xl hover:border-accent'
											type='button'
										>
											{tag}
										</button>
									</li>
								</ul>
							)
						})}
					</div>
				) : null}
			</Paper>
			{children}
		</>
	)
}
