import { AnyAction, AsyncThunk } from '@reduxjs/toolkit'


export type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>

export type PendingAction = ReturnType<GenericAsyncThunk['pending']>
export type FulfilledAction = ReturnType<GenericAsyncThunk['fulfilled']>
export type RejectedAction = ReturnType<GenericAsyncThunk['rejected']>

export const isPendingAction = (action: AnyAction): action is PendingAction => {
	return action.type.endsWith('/pending')
}
export const isFulfilledAction = (action: AnyAction): action is FulfilledAction => {
	return action.type.endsWith('/fulfilled')
}
export const isRejectedAction = (action: AnyAction): action is RejectedAction => {
	return action.type.endsWith('/rejected')
}
