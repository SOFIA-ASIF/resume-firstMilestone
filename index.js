document.addEventListener('DOMContentLoaded', function () {
    var toggleButtons = [
        { buttonId: 'toggle-skills', sectionId: 'skills', headingId: 'skills-heading' },
        { buttonId: 'toggle-languages', sectionId: 'languages', headingId: 'languages-heading' },
        { buttonId: 'toggle-hobbies', sectionId: 'hobbies', headingId: 'hobbies-heading' },
        { buttonId: 'toggle-summary', sectionId: 'summary', headingId: 'summary-heading' },
        { buttonId: 'toggle-experience', sectionId: 'work-experience', headingId: 'experience-heading' },
        { buttonId: 'toggle-education', sectionId: 'education', headingId: 'education-heading' },
    ];
    toggleButtons.forEach(function (_a) {
        var buttonId = _a.buttonId, sectionId = _a.sectionId, headingId = _a.headingId;
        var toggleButton = document.getElementById(buttonId);
        var sectionDiv = document.getElementById(sectionId);
        var heading = document.getElementById(headingId);
        toggleButton === null || toggleButton === void 0 ? void 0 : toggleButton.addEventListener('click', function () {
            var isHidden = sectionDiv === null || sectionDiv === void 0 ? void 0 : sectionDiv.classList.toggle('hidden');
            if (isHidden) {
                heading === null || heading === void 0 ? void 0 : heading.classList.add('hidden');
            }
            else {
                heading === null || heading === void 0 ? void 0 : heading.classList.remove('hidden');
            }
        });
    });
});
