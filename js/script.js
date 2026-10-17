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
        title: "Steam",
        url: "https://steamcommunity.com/id/realmaxi15/",
        icon: "fa-brands fa-steam",
        color: "#66C0F4"
    },
    {
        title: "Windows 10 Download",
        url: "https://www.microsoft.com/de-de/software-download/windows10",
        icon: "fa-brands fa-windows",
        color: "#0078D4"
    },
    {
        title: "Windows 11 Download",
        url: "https://www.microsoft.com/de-de/software-download/windows11",
        icon: "fa-brands fa-windows",
        color: "#0078D4"
    },
    {
        title: "Linux Mint Download",
        url: "https://linuxmint.com/download.php",
        icon: "fa-brands fa-linux",
        color: "#87CF3E"
    },
    {
        title: "Bazzite Download",
        url: "https://bazzite.gg/",
        icon: "fa-solid fa-compact-disc",
        color: "#E95420"
    },
    {
        title: "Zorin OS Download",
        url: "https://zorin.com/os/download/",
        icon: "fa-brands fa-linux",
        color: "#15A9E1"
    },
    {
        title: "Ubuntu Download",
        url: "https://ubuntu.com/download/desktop",
        icon: "fa-brands fa-ubuntu",
        color: "#E95420"
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
