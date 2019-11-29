import { AddressInterface } from './address'
import { CompanyInterface } from './company'

export interface UserInterface {
    id: Number
    name: String
    email: String
    address: AddressInterface
    phone: String
    website: String
    company: CompanyInterface
}