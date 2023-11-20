import { sha256 } from "js-sha256";

const gravatarBaseUrl = "https://www.gravatar.com/avatar/";

export function getGravatarImageUrl(email: string, size: number): string {
    const hash = sha256(email)
    return `${gravatarBaseUrl}${hash}?s=${size}`
}

export function generateRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min
}