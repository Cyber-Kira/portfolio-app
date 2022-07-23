import React, { useCallback, useEffect, useState } from 'react'

export type Type = {
	offsetWidth: number
	offsetHeight: number
}

export const useResize = <T extends Type>(
	myRef: React.MutableRefObject<T | undefined | null>
) => {
	const [width, setWidth] = useState(0)
	const [height, setHeight] = useState(0)

	const handleResize = useCallback(() => {
		if (myRef.current) {
			setWidth(myRef.current.offsetWidth)
			setHeight(myRef.current.offsetHeight)
		}
	}, [myRef])

	useEffect(() => {
		window.addEventListener('load', handleResize)
		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('load', handleResize)
			window.removeEventListener('resize', handleResize)
		}
	}, [myRef, handleResize])

	return { width, height }
}
