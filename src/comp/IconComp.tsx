import { createElement, FragmentComp, TRenderJSX } from 'matul'
import { TIcon } from './TIcon'

export interface IconCompProps {
	icon: TIcon
}
export interface IconCompState {}

export const IconComp: TRenderJSX<IconCompProps, IconCompState> = (_, v) => {
	return (
		<svg class='to-icon' viewBox='0 0 16 16'>
			<use href={`#${v.props.icon}`} />
		</svg>
	)
}
