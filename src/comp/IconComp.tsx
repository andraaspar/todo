import React, { createElement, PropsWithChildren } from 'react'
import { TIcon } from './TIcon'

export interface IconCompProps {
	icon: TIcon
}

export function IconComp(props: PropsWithChildren<IconCompProps>) {
	return <i className='to-icon'>{createElement(props.icon)}</i>
}
