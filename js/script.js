const links = [
    {
        title: "YouTube",
        url: "https://www.youtube.com/@Real.Maxi15",
        icon: "fa-brands fa-youtube",
        color: "#FF0000"
    },
    {
        title: "Wilde Pommes Discord",
        url: "https://discord.gg/FeznJ5nJ2s",
        icon: "fa-brands fa-discord",
        color: "#5865F2"
    },
    {
        title: "Steam",
        url: "https://steamcommunity.com/id/realmaxi15/",
        icon: "fa-brands fa-steam",
        color: "#66C0F4"
    },
    {
        title: "Instagram",
        url: "https://www.instagram.com/realmaxi15/",
        icon: "fa-brands fa-instagram",
        color: "#E4405F"
    },
    {
        title: "Roblox",
        url: "https://www.roblox.com/de/users/3624315524/profile",
        icon: "fa-solid fa-gamepad",
        color: "#00A2FF"
    },
    {
        title: "Apple DE",
        url: "https://www.apple.com/de/",
        icon: "fa-brands fa-apple",
        color: "#A2AAAD"
    },
    {
        title: "Windows 11 Download",
        url: "https://www.microsoft.com/de-de/software-download/windows11",
        icon: "fa-brands fa-windows",
        color: "#0078D4"
    },
    {
        title: "Bazzite Download",
        url: "https://bazzite.gg/",
        icon: "fa-solid fa-compact-disc",
        color: "#E95420"
    },
    {
        title: "Rufus Download",
        url: "https://rufus.ie/de/",
        icon: "fa-solid fa-hard-drive",
        color: "#005a9e"
    },
    {
        title: "Balena Etcher Download",
        url: "https://etcher.balena.io/",
        icon: "fa-solid fa-bolt",
        color: "#fa8c16"
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("linktree-links");

    links.forEach(link => {
        const a = document.createElement("a");
        a.href = link.url;
        a.target = "_blank";
        a.className = "link-card";

        const icon = document.createElement("i");
        icon.className = link.icon;
        icon.style.color = link.color;

        const span = document.createElement("span");
        span.textContent = link.title;

        a.appendChild(icon);
        a.appendChild(span);
        container.appendChild(a);
    });
});
