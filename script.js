document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('.nav-button');
    const contentSections = document.querySelectorAll('.content-section');

    // Função para mostrar a seção correta
    const showSection = (sectionId) => {
        // Oculta todas as seções
        contentSections.forEach(section => {
            section.classList.remove('active');
        });

        // Mostra a seção desejada
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.add('active');
        }
    };

    // Função para ativar o botão de navegação
    const activateButton = (button) => {
        // Remove a classe 'active' de todos os botões
        navButtons.forEach(btn => {
            btn.classList.remove('active');
        });
        // Adiciona a classe 'active' ao botão clicado
        button.classList.add('active');
    };

    // Adiciona evento de clique a cada botão de navegação
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const sectionId = button.dataset.section;
            showSection(sectionId);
            activateButton(button);
        });
    });

    // Ativar a primeira seção e o primeiro botão por padrão ao carregar a página
    if (navButtons.length > 0) {
        navButtons[0].click(); // Simula o clique no primeiro botão para exibir a primeira seção
    }
});