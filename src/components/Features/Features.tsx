/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import { setTheme } from '../../lib/utils'

export const Features = () => {
	const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('light')
	const [isExpanded, setIsExpanded] = useState(false)

	const handleThemeChange = () => {
		if (currentTheme === 'light') {
			setCurrentTheme('dark')
			setTheme('dark')
		} else {
			setCurrentTheme('light')
			setTheme('light')
		}
	}

	useEffect(() => {
		setCurrentTheme(localStorage.theme)
	}, [])

	const handleExpanding = () => {
		setIsExpanded(prevState => !prevState)
	}

	return (
		<div className='w-full'>
			<div className='flex items-center justify-center ml-auto w-fit h-10 rounded-full bg-white dark:bg-[#1e293b]'>
				<button
					type='button'
					className={`flex items-center rotate-180 justify-center rounded-full w-full h-full p-2 hover:text-accent dark:text-neutral-200 dark:hover:text-accent cursor-pointer transition-all ${
						isExpanded ? 'rotate-180' : 'rotate-0'
					}`}
					onClick={handleExpanding}
				>
					<span className='material-icons'>chevron_left</span>
				</button>
				<div
					className={`w-full h-full rounded-full ${
						isExpanded ? 'overflow-visible' : 'overflow-hidden w-0'
					}`}
				>
					<button
						type='button'
						className='flex items-center group h-full px-2 rounded-full gap-2'
					>
						<span className='material-icons dark:text-neutral-200'>
							dashboard
						</span>
						<span className='whitespace-nowrap group-hover:text-accent dark:text-neutral-200 dark:group-hover:text-accent transition-colors'>
							Switch layout
						</span>
					</button>
				</div>
				<button
					type='button'
					className='flex items-center justify-center rounded-full w-full h-full cursor-pointer p-2 hover:text-accent dark:text-neutral-200 dark:hover:text-accent transition-colors'
					onClick={handleThemeChange}
				>
					{currentTheme === 'dark' ? (
						<span className='material-icons'>light_mode</span>
					) : (
						<span className='material-icons'>dark_mode</span>
					)}
				</button>
			</div>
		</div>
	)
}
