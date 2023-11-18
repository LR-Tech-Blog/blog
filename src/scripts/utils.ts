import { sha256 } from "js-sha256";

const gravatarBaseUrl = "https://www.gravatar.com/avatar/";

export function getGravatarImageUrl(email: string, size: number): string {
    const hash = sha256(email)
    return `${gravatarBaseUrl}${hash}?s=${size}`
}