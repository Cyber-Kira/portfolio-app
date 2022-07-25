import React from 'react'
import { TagInterface } from '../Layout'

export const Tags = ({
	tags,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	setTags,
}: {
	tags: TagInterface[]
	setTags: React.Dispatch<React.SetStateAction<TagInterface[]>>
}) => {
	const handleClick = (
		e: React.ChangeEvent<HTMLInputElement>,
		tagName: string
	) => {
		const foundTagIndex = tags.findIndex(item => item.name === tagName)
		const foundTag = tags.find(item => item.name === tagName)
		const beforeFoundTag = tags.slice(0, foundTagIndex)
		const afterFoundTag = tags.slice(foundTagIndex + 1, tags.length)

		if (foundTag) {
			const newTag: TagInterface = {
				...foundTag,
				isChecked: !foundTag.isChecked,
			}

			setTags([...beforeFoundTag, newTag, ...afterFoundTag])
		}
	}

	return (
		<div className='flex gap-4 mt-4 flex-wrap'>
			{tags.map(tag => {
				return (
					<ul>
						<li className='relative w-full h-full rounded-xl group'>
							<label htmlFor='tags'>
								<input
									className='absolute cursor-pointer inset-0 appearance-none'
									type='checkbox'
									name='tags'
									id={tag.name}
									value={tag.name}
									checked={tag.isChecked}
									onChange={e => handleClick(e, tag.name)}
								/>
							</label>
							<button
								className={`
                    font-medium text-sm leading-[17px] px-[22px] py-2 text-dark-200 border border-dark-200 group-hover:border-accent rounded-xl transition-colors ${
											tag.isChecked
												? 'bg-accent text-white border-accent'
												: 'group-hover:text-accent'
										}
                    `}
								type='button'
							>
								{tag.name}
							</button>
						</li>
					</ul>
				)
			})}
		</div>
	)
}
