const messageText = "Check it out!";

export function shareTwitter(url: string) {
    const twitterUrl = `https://twitter.com/intent/tweet?url=${url}&text=${messageText}`;
    window.open(twitterUrl, "_blank");
}

export function shareLinkedin(url: string) {
    const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
    window.open(linkedinUrl, "_blank");
}