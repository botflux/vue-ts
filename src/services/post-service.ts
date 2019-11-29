import { PostInterface } from '@/models/post'
import { EntityServiceInterface } from '@/services/entity-service'
import { ServiceInterface } from './service-interface'

export class PostService implements EntityServiceInterface<PostInterface>, ServiceInterface {
    public getServiceType = (): String => 'EntityServiceInterface<PostInterface>'

    public findAll = (): Promise<Array<PostInterface>> =>
        fetch ('https://jsonplaceholder.typicode.com/posts')
            .then ((response: Response) => response.json ())

    public find = (id: Number): Promise<PostInterface> =>
        fetch (`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then ((response: Response) => response.json ())
}

export default (): EntityServiceInterface<PostInterface> =>
    new PostService ()