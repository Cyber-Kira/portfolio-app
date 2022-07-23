import React from 'react'
import { Paper } from '../Paper'
import ProfilePicture from './assets/photo.png'

export const About = () => {
	return (
		<Paper shadow>
			<section className='flex flex-col md:flex-row gap-8'>
				<div className='basis-[29%]'>
					<img
						className='w-full h-auto rounded-xl'
						src={ProfilePicture}
						alt='White Man'
					/>
				</div>
				<div className='basis-[71%]'>
					<div className='flex flex-col md:flex-row gap-4 md:gap-0 justify-between'>
						<div>
							<p className='font-semibold text-2xl leading-[29px] mb-[.375rem]'>
								Kirill Koloskov
							</p>
							<p className='font-medium text-lg leading-[22px] text-primary'>
								Front-end developer
							</p>
						</div>
						<div className='flex flex-col gap-[.625rem]'>
							<div>
								<a
									className='flex items-center gap-[1.125rem] font-medium text-lg leading-[22px] text-dark-200 hover:text-dark-100 transition-colors'
									href='mailto:kkoloskov03@gmail.com'
								>
									<span className='material-icons'>email</span>
									kkoloskov03@gmail.com
								</a>
							</div>
							<div>
								<a
									className='flex items-center gap-[1.125rem] font-medium text-lg leading-[22px] text-dark-200 hover:text-dark-100 transition-colors'
									href='tel:+79586649924'
								>
									<span className='material-icons'>call</span>
									+79586649924
								</a>
							</div>
							<div>
								<a
									className='flex items-center gap-[1.125rem] font-medium text-lg leading-[22px] text-dark-200 hover:text-dark-100 transition-colors'
									href='https://github.com/Cyber-Kira/'
									target='_blank'
									rel='noreferrer'
								>
									<span className='material-icons'>code</span>
									Cyber-Kira
								</a>
							</div>
						</div>
					</div>
					<div className='mt-9 flex flex-col gap-4'>
						<p className='font-medium text-lg leading-[22px] text-primary'>
							Self-motivated developer, who is willing to learn and create
							outstanding UI applications.
						</p>
					</div>
				</div>
			</section>
		</Paper>
	)
}
