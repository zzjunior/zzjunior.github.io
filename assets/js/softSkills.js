document.addEventListener("DOMContentLoaded", function () {
    const skills = [
        { class: "devicon-html5-plain", color: "text-orange-500" },
        { class: "devicon-css3-plain", color: "text-blue-500" },
        { class: "devicon-javascript-plain", color: "text-yellow-500" },
        { class: "devicon-mysql-plain", color: "text-blue-300" },
        { class: "devicon-tailwindcss-plain", color: "text-cyan-400" },
        { class: "devicon-nodejs-plain", color: "text-green-500" },
        { class: "devicon-typescript-plain", color: "text-blue-400" },
        { class: "devicon-php-plain", color: "text-purple-500" },
        { class: "devicon-python-plain", color: "text-green-500" },
        { class: "devicon-laravel-plain", color: "text-red-500" }
    ];

    const skillsContainer = document.getElementById("soft-skills");
    skillsContainer.innerHTML = ""; 

    skills.forEach(skill => {
        const iconWrapper = document.createElement("div");
        iconWrapper.className = "flex items-center justify-center";

        const icon = document.createElement("i");
        icon.className = `${skill.class} ${skill.color} text-xl sm:text-2xl md:text-3xl lg:text-4xl transition-transform transform hover:scale-110 hover:opacity-80`;

        iconWrapper.appendChild(icon);
        skillsContainer.appendChild(iconWrapper);
    });
});

