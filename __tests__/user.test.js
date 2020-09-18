class User{
    constructor(details){
        const { firstName, lastName } = details;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get name(){
        return `${this.firstName} ${this.lastName}`
    }
}

describe('User', () => {
    it('deve retornar nome completo Rodrigo Padilha', () => {
        const user = new User({firstName: 'Rodrigo', lastName: 'Padilha'});
        expect(user.name).toBe('Rodrigo Padilha')
    })
})