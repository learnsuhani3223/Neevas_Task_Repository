document.addEventListener('DOMContentLoaded', function () {
    const skills = document.querySelectorAll('.skill');
    
    skills.forEach(skill => {
        const color = skill.getAttribute('data-color');
        const percentage = skill.getAttribute('data-percentage');

        // Apply the color
        skill.querySelector('.skill-level').style.backgroundColor = color;

        // Apply the width percentage
        skill.querySelector('.skill-level').style.width = percentage;
    });
});
