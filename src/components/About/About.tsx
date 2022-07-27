import React from 'react'
import { useSize } from '../../lib/hooks/useSize'
import { Paper } from '../Paper'
import ProfilePicture from './assets/photo.png'
import { ReactComponent as CodewarsLogo } from './assets/codewars-svgrepo-com.svg'

export const About = () => {
	const { size, currentRef } = useSize()

	const flexStyles =
		size === 'mobile'
			? {
					flexDirection: 'column' as const,
			  }
			: {
					flexDirection: 'row' as const,
			  }

	return (
		<Paper shadow>
			<section
				ref={currentRef}
				className='flex flex-col gap-8'
				style={flexStyles}
			>
				<div className='basis-[29%]'>
					<img
						className='w-full h-auto rounded-xl'
						src={ProfilePicture}
						alt='White Man'
					/>
				</div>
				<div className='basis-[71%]'>
					<div
						className='flex flex-col gap-4 justify-between'
						style={flexStyles}
					>
						<div>
							<p className='flex items-center gap-3 font-semibold text-2xl leading-[29px] mb-[.375rem]'>
								Kirill Koloskov
							</p>

							<p className='font-medium text-lg leading-[22px] text-primary dark:text-neutral-100'>
								Front-end developer
							</p>
						</div>
						<div className='flex flex-col gap-[.5rem]'>
							<div>
								<a
									className='flex items-center gap-[1.125rem] font-medium text-lg leading-[22px] text-dark-200 dark:text-neutral-100 hover:text-dark-100 transition-colors truncate'
									href='mailto:kkoloskov03@gmail.com'
								>
									<span className='material-icons'>email</span>
									kkoloskov03@gmail.com
								</a>
							</div>
							<div>
								<a
									className='flex items-center gap-[1.125rem] font-medium text-lg leading-[22px] text-dark-200 dark:text-neutral-100 hover:text-dark-100 transition-colors'
									href='tel:+79586649924'
								>
									<span className='material-icons'>call</span>
									+79586649924
								</a>
							</div>
							<div>
								<a
									className='flex items-center gap-[1.125rem] font-medium text-lg leading-[22px] text-dark-200 dark:text-neutral-100 hover:text-dark-100 transition-colors'
									href='https://github.com/Cyber-Kira/'
									target='_blank'
									rel='noreferrer'
								>
									<span className='material-icons'>code</span>
									GitHub
								</a>
							</div>
							<div>
								<a
									href='https://www.codewars.com/users/Cyber-Kira'
									rel='noreferrer'
									target='_blank'
									className='flex items-center gap-[1.125rem] font-medium text-lg leading-[22px] text-dark-200 dark:text-neutral-100 hover:text-dark-100 transition-colors truncate'
								>
									<CodewarsLogo className='dark:fill-neutral-100' />
									Codewars
								</a>
							</div>
						</div>
					</div>
					<div className='mt-9 flex flex-col gap-4'>
						<p className='font-medium text-lg leading-[22px] text-primary dark:text-neutral-100'>
							Self-motivated developer, who is willing to learn and create
							outstanding UI applications.
						</p>
					</div>
				</div>
			</section>
		</Paper>
	)
}
