import { createElement, FragmentComp, TRenderJSX } from 'matul'
import * as Icons from './IconStrings'

export interface IconsCompProps {}
export interface IconsCompState {
	icons: string
}

export const IconsComp: TRenderJSX<IconsCompProps, IconsCompState> = (_, v) => {
	v.state.icons =
		v.state.icons ??
		Object.entries(Icons)
			.map(([id, icon]) =>
				icon
					.replace(/<svg\b/, `<symbol id="${id}"`)
					.replace(/<\/svg\b/, `</symbol`),
			)
			.join('')
	return (
		<div style='display:none'>
			<svg __UNSAFE_trust__={v.state.icons}></svg>
		</div>
	)
}
