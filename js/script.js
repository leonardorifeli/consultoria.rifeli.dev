document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            const icon = menuToggle.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Close mobile menu when clicking on a nav link
    const navLinks = document.querySelectorAll('.nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });

    // Sticky Header
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 50) {
            header.style.height = '70px';
            header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.height = '80px';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });

    // WhatsApp checkbox functionality
    const whatsappSameCheckbox = document.getElementById('whatsapp-same');
    const whatsappGroup = document.getElementById('whatsapp-group');
    const telefoneInput = document.getElementById('telefone');
    const whatsappInput = document.getElementById('whatsapp');

    if (whatsappSameCheckbox && whatsappGroup && telefoneInput && whatsappInput) {
        // Initially show the WhatsApp field
        whatsappGroup.style.display = 'block';

        whatsappSameCheckbox.addEventListener('change', function() {
            if (this.checked) {
                whatsappGroup.style.display = 'none';
                whatsappInput.value = telefoneInput.value;
            } else {
                whatsappGroup.style.display = 'block';
            }
        });

        // Update WhatsApp value when phone changes and checkbox is checked
        telefoneInput.addEventListener('input', function() {
            if (whatsappSameCheckbox.checked) {
                whatsappInput.value = this.value;
            }
        });
    }

    // Form Submission
    const consultoriaForm = document.getElementById('consultoria-form');

    if (consultoriaForm) {
        consultoriaForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form data
            const formData = new FormData(this);
            const formDataObj = {};
            formData.forEach((value, key) => {
                formDataObj[key] = value;
            });

            // Validate form
            let isValid = true;
            const requiredFields = ['nome', 'email', 'telefone', 'assunto', 'descricao'];

            requiredFields.forEach(field => {
                const input = document.getElementById(field);
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = 'var(--error-color)';
                } else {
                    input.style.borderColor = 'var(--border-color)';
                }
            });

            // Email validation
            const emailInput = document.getElementById('email');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailInput.value)) {
                isValid = false;
                emailInput.style.borderColor = 'var(--error-color)';
            }

            if (!isValid) {
                showNotification('Por favor, preencha todos os campos corretamente.', 'error');
                return;
            }

            // Simulate form submission (in a real scenario, you would send this to a server)
            console.log('Form Data:', formDataObj);

            // In a real implementation, you would use fetch or XMLHttpRequest to send the data
            // For example:
            /*
            fetch('your-endpoint', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formDataObj),
            })
            .then(response => response.json())
            .then(data => {
                showNotification('Sua solicitação foi enviada com sucesso!', 'success');
                consultoriaForm.reset();
            })
            .catch(error => {
                showNotification('Ocorreu um erro ao enviar sua solicitação. Por favor, tente novamente.', 'error');
            });
            */

            // For demo purposes, just show success and reset form
            showNotification('Sua solicitação foi enviada com sucesso!', 'success');
            consultoriaForm.reset();
        });
    }

    // Notification function
    function showNotification(message, type) {
        // Check if notification container exists, if not create it
        let notificationContainer = document.querySelector('.notification-container');
        if (!notificationContainer) {
            notificationContainer = document.createElement('div');
            notificationContainer.className = 'notification-container';
            document.body.appendChild(notificationContainer);

            // Add styles for notification container
            notificationContainer.style.position = 'fixed';
            notificationContainer.style.top = '20px';
            notificationContainer.style.right = '20px';
            notificationContainer.style.zIndex = '1000';
        }

        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
                <p>${message}</p>
            </div>
            <button class="notification-close"><i class="fas fa-times"></i></button>
        `;

        // Add styles for notification
        notification.style.backgroundColor = type === 'success' ? 'var(--success-color)' : 'var(--error-color)';
        notification.style.color = 'white';
        notification.style.padding = '15px 20px';
        notification.style.borderRadius = 'var(--border-radius)';
        notification.style.marginBottom = '10px';
        notification.style.boxShadow = 'var(--shadow)';
        notification.style.display = 'flex';
        notification.style.justifyContent = 'space-between';
        notification.style.alignItems = 'center';
        notification.style.animation = 'slideIn 0.3s ease-out forwards';

        // Add styles for notification content
        const notificationContent = notification.querySelector('.notification-content');
        notificationContent.style.display = 'flex';
        notificationContent.style.alignItems = 'center';
        notificationContent.style.gap = '10px';

        // Add styles for close button
        const closeButton = notification.querySelector('.notification-close');
        closeButton.style.background = 'none';
        closeButton.style.border = 'none';
        closeButton.style.color = 'white';
        closeButton.style.cursor = 'pointer';
        closeButton.style.fontSize = '1rem';

        // Add notification to container
        notificationContainer.appendChild(notification);

        // Add keyframes for animation
        if (!document.querySelector('#notification-keyframes')) {
            const style = document.createElement('style');
            style.id = 'notification-keyframes';
            style.textContent = `
                @keyframes slideIn {
                    from { transform: translateX(100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
                @keyframes slideOut {
                    from { transform: translateX(0); opacity: 1; }
                    to { transform: translateX(100%); opacity: 0; }
                }
            `;
            document.head.appendChild(style);
        }

        // Close notification on click
        closeButton.addEventListener('click', function() {
            notification.style.animation = 'slideOut 0.3s ease-out forwards';
            setTimeout(() => {
                notification.remove();
            }, 300);
        });

        // Auto close after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.style.animation = 'slideOut 0.3s ease-out forwards';
                setTimeout(() => {
                    notification.remove();
                }, 300);
            }
        }, 5000);
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add animation on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.servico-card, .stat-item, .expertise-category');

        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Set initial styles for animation
    document.querySelectorAll('.servico-card, .stat-item, .expertise-category').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    // Run animation on load and scroll
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);
});