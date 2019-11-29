export interface FindAllInterface<T> {
    (): Promise<Array<T>>
}

export interface FindInterface<T> {
    (id: Number): Promise<T>
}

export interface EntityServiceInterface<T> {
    findAll: FindAllInterface<T>,
    find: FindInterface<T>
}
