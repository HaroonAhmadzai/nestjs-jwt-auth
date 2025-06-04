import { Injectable, NotFoundException } from "@nestjs/common";

const users = [
    {
        id: 1,
        name: "Haroon",
        email: "haroon@gmail.com"
    },
    {
        id: 2,
        name: "Ahmad",
        email: "ahmad@gmail.com"
    },
]

@Injectable()
export class UsersService {
    findByEmail( email : string) {
        const authUser = users.find(user => user.email === email);
        if (!authUser) {
            throw new NotFoundException("User not found");
        }
       return authUser;
    }

    findOne(id: number) {
        const user = users.find(user => user.id === id);
        if (!user) {
            throw new NotFoundException("User not found");
        }
        return user;
    }
}