export interface ServiceContainerInterface {
    // getService<T> (): T
    addService<T> (service: T): any
}

export class ServiceContainer implements ServiceContainerInterface {

    private services: Array<Object> = []

    public addService<T> (service: T): ServiceContainer {
        this.services = [...this.services, service]

        return this
    }

    // public getService<T> (): T {
        
    // }
}