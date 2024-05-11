/**
 * useEventWrapper will use the defineEventHandler from 'h3' to make a wrapper utility for each eventHandler
 */
import { defineCachedEventHandler} from "nitropack/runtime";
import { defineEventHandler, EventHandler } from "h3"


export const useEventWrapper = defineCachedEventHandler(async (event) => {
    await asyncFn(...args);
})

export function useEventT<T>(e: () => Promise<T>, ...args: any[]) {
    return e(...args)
}