import { Geo } from './geo'

export interface AddressInterface {
    street: String
    suite: String
    city: String
    zipCode: String
    geo: Geo
}