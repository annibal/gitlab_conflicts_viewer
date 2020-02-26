export const XStates = Object.freeze({
	IDLE: 'xstate-idle',
	LOADING: 'xstate-loading',
	ERROR: 'xstate-error',
	DONE: 'xstate-done'
})

export const map_XStates2TranslationKeys = xstate => ({
	[XStates.IDLE]: 'xstates.idle',
	[XStates.LOADING]: 'xstates.loading',
	[XStates.ERROR]: 'xstates.error',
	[XStates.DONE]: 'xstates.done',
}[xstate])

export const extractXState = statePortion => statePortion.xState