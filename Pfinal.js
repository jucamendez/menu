
document.addEventListener('DOMContentLoaded', function() {
    const fontSizeControl = document.getElementById('fontSize');
    const fontSizeValue = document.getElementById('fontSizeValue');
    const adjustableContent = document.getElementById('adjustableContent');
    
    fontSizeControl.addEventListener('input', function() {
        const fontSize = this.value + 'px';
        fontSizeValue.textContent = fontSize;
        adjustableContent.style.fontSize = fontSize;
    });
    
    const widthControls = document.querySelectorAll('input[name="containerWidth"]');
    widthControls.forEach(control => {
        control.addEventListener('change', function() {
            const container = document.querySelector('.parcial-3-container');
            container.classList.remove('container-small', 'container-medium', 'container-large');
            
            if (this.id === 'widthSmall') {
                container.classList.add('container-small');
            } else if (this.id === 'widthMedium') {
                container.classList.add('container-medium');
            } else if (this.id === 'widthLarge') {
                container.classList.add('container-large');
            }
        });
    });
    
    // Control de temas
    const themeButtons = document.querySelectorAll('.theme-btn');
    themeButtons.forEach(button => {
        button.addEventListener('click', function() {
            themeButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const theme = this.getAttribute('data-theme');
            document.body.className = ''; // Limpiar clases anteriores
            if (theme !== 'light') {
                document.body.classList.add('theme-' + theme);
            }
        });
    });
    
    const layoutOptions = document.querySelectorAll('.layout-option');
    const projectGrid = document.querySelector('.project-grid');
    
    layoutOptions.forEach(option => {
        option.addEventListener('click', function() {
            layoutOptions.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
            
            // Cambiar layout
            const layout = this.getAttribute('data-layout');
            if (layout === 'list') {
                projectGrid.classList.add('project-list');
                projectGrid.classList.remove('row');
            } else {
                projectGrid.classList.remove('project-list');
                projectGrid.classList.add('row');
            }
        });
    });
    
    const links = ['linkParcial1', 'linkParcial2', 'linkParcial3'];
    links.forEach(linkId => {
        const link = document.getElementById(linkId);
        link.addEventListener('dblclick', function() {
            const newUrl = prompt('Ingresa la nueva URL para este enlace:', this.href);
            if (newUrl) {
                this.href = newUrl;
            }
        });
    });
});

const style = document.createElement('style');
style.textContent = `
    .container-small {
        max-width: 600px;
    }
    .container-medium {
        max-width: 800px;
    }
    .container-large {
        max-width: 100%;
    }
    .project-list .content-box {
        width: 100%;
        margin-bottom: 15px;
    }
`;
document.head.appendChild(style);
