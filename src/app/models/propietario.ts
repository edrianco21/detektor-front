export class Propietario {
    address: string
    document: string
    email: string
    lastName: string
    name: string
    phone: string
    propietarioId: number

    constructor(attrs?: any) {
        this.address = attrs.address
        this.document = attrs.document
        this.email = attrs.email
        this.lastName = attrs.lastName
        this.name = attrs.name
        this.phone = attrs.phone
        this.propietarioId = attrs.propietarioId
    }
}