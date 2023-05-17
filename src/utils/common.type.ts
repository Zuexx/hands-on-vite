type TypedDictionary = { [key: string]: string | undefined };

type AuthError = {
    errorCode?: string,
    errorMessage?: string,
    errorFields?: []
}

type Success = {
    successCode?: string,
    successMessage?: string,
}

export {
    type TypedDictionary,
    type AuthError,
    type Success
}