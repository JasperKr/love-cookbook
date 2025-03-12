// Mobile/Responsive functions

addEventListener("DOMContentLoaded", () => {

    const sidebar = document.querySelector(".sidebar")
    const menuButton = document.querySelector(".menu-button")
    let sidebarShown = false
    
    menuButton.addEventListener("click", () => {
        sidebar.classList.add("active")
        sidebarShown = true
    })

    // Resize Embeds
    const originalDimensions = []
    const embeds = document.querySelectorAll(".love-embed")
    const guide = document.querySelector(".guide")

    for (let i = 0; i < embeds.length; i++) {
        const iframe = embeds[i]

        originalDimensions.push({ 
            width: iframe.width, 
            height: iframe.height, 
        })

        if (originalDimensions[i].width > guide.clientWidth) {
            const scale = guide.clientWidth / iframe.width
            iframe.width = guide.clientWidth
            iframe.height *= scale
        }
    }

    addEventListener("resize", () => {
        for (let i = 0; i < embeds.length; i++) {
            const iframe = embeds[i]

            if (originalDimensions[i].width > guide.clientWidth) {
                const scale = guide.clientWidth / iframe.width
                iframe.width = guide.clientWidth
                iframe.height *= scale
            }
        }
    })
})
