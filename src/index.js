
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.querySelector('.modal');
    const modalOpenButtons = document.querySelectorAll('[data-modal-open]');
    const backdrop = document.querySelector('.backdrop');
    const closeButton = document.querySelector('.close-btn');

    signUpButton.addEventListener('click', () => {
        container.classList.add('right-panel-active');
    });

    signInButton.addEventListener('click', () => {
        container.classList.remove('right-panel-active');
    });

    modalOpenButtons.forEach(button => {
        button.addEventListener('click', () => {
            backdrop.classList.add('is-visible');
            backdrop.classList.remove('is-hidden');
        });
    });

    // Закрытие модального окна при клике на фон (вне содержимого модалки)
    backdrop.addEventListener('click', (event) => {
        if (event.target === backdrop) {
            closeModal();
        }
    });

    // Закрытие модального окна при клике на кнопку закрытия
    if (closeButton) {
        closeButton.addEventListener('click', () => {
            closeModal();
        });
    }

    function closeModal() {
        backdrop.classList.remove('is-visible');
        backdrop.classList.add('is-hidden');
        // Сброс на панель входа при закрытии
        container.classList.remove('right-panel-active');
    }
