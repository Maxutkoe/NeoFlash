// Пишите код без тегов <script> </script>
window.addEventListener('lpc:load', function () {
    async function initButtons() {
        let hasSlug;
        let latestProfessionSlugJson = {};

        try {
            const latestProfessionSlugResponse = await fetch('/api/users/me/latest_profession_slug/');
            latestProfessionSlugJson = await latestProfessionSlugResponse.json();
            hasSlug = Boolean(latestProfessionSlugJson.latestProfessionSlug);
        } catch {
            hasSlug = false;
        }

        const buttonUrl = hasSlug ? (
            '/profile/' + latestProfessionSlugJson.latestProfessionSlug
        ) : (
            '/sso/auth/' + window.location.search
        );

        const buttons = document.querySelectorAll(hasSlug ? '.header__btn-profile' : '.header__btn-login');

        buttons.forEach(elem => {
            elem.style.display = 'inline-flex';
            elem.addEventListener('click', (evt) => {
                evt.preventDefault();
                window.location.href = buttonUrl;
            });
        });
    };
    initButtons();
});