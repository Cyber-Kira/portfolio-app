/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useRef, useEffect, useState } from 'react'
import { useResize } from './useResize'

export const useSize = () => {
	const currentRef = useRef<HTMLElement>(null)
	const { width } = useResize(currentRef)
	const [size, setSize] = useState<'mobile' | 'desktop' | null>('mobile')

	useEffect(() => {
		if (width < 700) {
			setSize('mobile')
		} else {
			setSize('desktop')
		}
	}, [width])

	return { size, currentRef }
}
