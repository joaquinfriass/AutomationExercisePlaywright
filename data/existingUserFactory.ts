export interface UserData {
    name: string;
    email: string;
    password: string;
}

export function generateExistingUser(): UserData {
    return {
        name: 'Existing User',
        email: 'existinguser2026@example2.com',
        password: '12345'
    };
}