import { TypedAction } from "@ngrx/store/src/models";

type Action<T> = {payload: T} & TypedAction<string> & {
    type: string;
}

export default Action