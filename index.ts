document.addEventListener('DOMContentLoaded', () => {
    const toggleButtons = [
        { buttonId: 'toggle-skills', sectionId: 'skills', headingId: 'skills-heading' },
        { buttonId: 'toggle-languages', sectionId: 'languages', headingId: 'languages-heading' },
        { buttonId: 'toggle-hobbies', sectionId: 'hobbies', headingId: 'hobbies-heading' },
        { buttonId: 'toggle-summary', sectionId: 'summary', headingId: 'summary-heading' },
        { buttonId: 'toggle-experience', sectionId: 'work-experience', headingId: 'experience-heading' },
        { buttonId: 'toggle-education', sectionId: 'education', headingId: 'education-heading' },
    ];

    toggleButtons.forEach(({ buttonId, sectionId, headingId }) => {
        const toggleButton = document.getElementById(buttonId);
        const sectionDiv = document.getElementById(sectionId);
        const heading = document.getElementById(headingId);

        toggleButton?.addEventListener('click', () => {
            const isHidden = sectionDiv?.classList.toggle('hidden');
            if (isHidden) {
                heading?.classList.add('hidden');
            } else {
                heading?.classList.remove('hidden');
            }
        });
    });
});