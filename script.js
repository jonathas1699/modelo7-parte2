document.addEventListener('DOMContentLoaded', () => {
  // CONTROLE DO CAMPO DE BUSCA
  const openSearchBtn = document.getElementById('openSearch');
  const closeSearchBtn = document.getElementById('closeSearch');
  const searchOverlay = document.getElementById('searchOverlay');
  const headerIcons = document.getElementById('mobileHeaderIcons');

  if (openSearchBtn && closeSearchBtn && searchOverlay && headerIcons) {
    openSearchBtn.addEventListener('click', () => {
      searchOverlay.style.display = 'flex';
      headerIcons.style.display = 'none';
    });

    closeSearchBtn.addEventListener('click', () => {
      searchOverlay.style.display = 'none';
      headerIcons.style.display = 'flex';
    });
  }

  // ROTAÇÃO DE SETAS EM DROPDOWNS E FECHAMENTO DE SUBCOLLAPSES
  const toggles = document.querySelectorAll('[data-bs-toggle="collapse"]');

  toggles.forEach(toggle => {
    const icon = toggle.querySelector('.rotate-icon');
    const targetId = toggle.getAttribute('href');
    const target = document.querySelector(targetId);

    if (icon && target) {
      // Só gira a seta se o toggle for o próprio collapse principal
      target.addEventListener('show.bs.collapse', (e) => {
        if (e.target === target) {
          icon.classList.add('rotated');
        }
      });
      target.addEventListener('hide.bs.collapse', (e) => {
        if (e.target === target) {
          icon.classList.remove('rotated');
          // FECHA TODOS OS SUBCOLLAPSES INTERNOS
          const subCollapses = target.querySelectorAll('.collapse.show');
          subCollapses.forEach(sub => {
            const collapseInstance = bootstrap.Collapse.getOrCreateInstance(sub);
            collapseInstance.hide();
          });
        }
      });
    }
  });
});