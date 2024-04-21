const messageText = "Olha esse artigo do LR Tech Blog!";

export function shareLinkedin(url: string) {
    const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
    window.open(linkedinUrl, "_blank");
}

export function shareTwitter(url: string) {
    const twitterUrl = `https://twitter.com/intent/tweet?url=${url}&text=${messageText}`;
    window.open(twitterUrl, "_blank");
}

export function shareWhatsApp(url: string) {
    const whatsappUrl = `https://api.whatsapp.com/send?text=${messageText} ${url}`;
    window.open(whatsappUrl, "_blank");
}

export function shareTelegram(url: string) {
    const telegramUrl = `https://telegram.me/share/url?url=${url}&text=${messageText}`
    window.open(telegramUrl, "_blank");
}

export function shareReddit(url: string) {
    const redditUrl = `https://www.reddit.com/submit?url=${url}&title=${messageText}`;
    window.open(redditUrl, "_blank");
}