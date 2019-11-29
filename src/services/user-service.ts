import { EntityServiceInterface } from './entity-service';
import { UserInterface } from '@/models/user';
import { ServiceInterface } from './service-interface';

export class UserService implements EntityServiceInterface<UserInterface>, ServiceInterface {

    public getServiceType = (): String => 'EntityServiceInterface<UserInterface>'

    public findAll = (): Promise<Array<UserInterface>> =>
        fetch ('https://jsonplaceholder.typicode.com/users')
            .then ((response: Response) => response.json ())

    public find = (id: Number): Promise<UserInterface> =>
        fetch (`https://jsonplaceholder.typicode.com/users/${id}`)
            .then ((response: Response) => response.json ())
}

export default (): EntityServiceInterface<UserInterface> =>
    new UserService ()