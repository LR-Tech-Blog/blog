export function goto(url: string) {
    window.open(url, "_blank")
}

export function gotoCreatorGithub() {
    const creatorGithub = "https://github.com/LuanRoger"
    goto(creatorGithub)
}

export function gotoCreatorLinkedin() {
    const creatorLinkedin = "https://linkedin.com/in/luan-roger/"
    goto(creatorLinkedin)
}