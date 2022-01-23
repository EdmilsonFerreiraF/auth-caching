export class UserModel {
    constructor(
        private id: number,
        private name: string,
        private username: string,
        private email: string,
        private address: {
            street: string,
            suite: string,
            city: string,
            zipcode: number,
            geo: {
                lat: number,
                lng: number
            }
        },
        private phone: number,
        private website: string,
        private company: {
            name: string,
            catchPhrase: string,
            bs: string,
        }
    ) { }

    public getId(): number {
        return this.id
    }
    
    public getName(): string {
        return this.name
    }

    public getUsername(): string {
        return this.username
    }

    public getEmail(): string {
        return this.email
    }

    public getAddress(): UserModel["address"] {
        return this.address
    }

    public getPhone(): number {
        return this.phone
    }

    public getWebsite(): string {
        return this.website
    }

    public getCompany(): UserModel["company"] {
        return this.company
    }

    public setId(id: number) {
        this.id = id
    }

    public setName(name: string) {
        this.name = name
    }

    public setUsername(username: string) {
        this.username = username
    }
    
    public setEmail(email: string) {
        this.email = email
    }

    public setAddress(address: UserModel["address"]) {
        this.address = address
    }

    public setPhone(phone: number) {
        this.phone = phone
    }

    public setWebsite(website: string) {
        this.website = website
    }

    public setCompany(company: UserModel["company"]) {
        this.company = company
    }

    public static toModel(data?: any): UserModel {
        return (data && new UserModel(
            data.id,
            data.name,
            data.username,
            data.email,
            data.address,
            data.phone,
            data.website,
            data.company
        ))
    }
}