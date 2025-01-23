// filepath: /C:/xampp/htdocs/TEIA - jr/zzjunior.github.io/scripts/projetos.js
document.addEventListener('DOMContentLoaded', function () {
  const projects = [
    {
      title: 'Geometric hiT',
      description: 'Projeto de estudos de lógica de programação. Este foi meu primeiro projeto feito no início da faculdade em 2020. O conceito inicial do projeto seria criar um jogo para crianças do fundamental (1° à 4° ano) que conseguisse passar algum ensinamento didático para a criança enquanto ela joga. Com isso, tive a ideia de criar um jogo onde é necessário a captura de brinquedos em formatos geométricos.',
      repoUrl: 'https://github.com/zzjunior/GeometrichiT',
      liveUrl: 'https://zzjunior.github.io/GeometrichiT/',
      images: ['./images/projeto1.png', './images/image-p-1.png', './images/image-p-2.png', './images/image-p-3.png'],
      languagesId: 'languages-used-1'
    },
    {
      title: 'Site Teia CRM',
      description: 'Site comercial / Institucional para a empresa Teia CRM. O site também já possuí integração com sistemas da empresa como CRM e disparos no whatsapp.',
      repoUrl: '',
      liveUrl: 'https://teiacrm.com',
      images: ['./images/projeto-3.png', './images/image-p2-1.png', './images/image-p2-2.png', './images/image-p2-3.png'],
      languagesId: 'linguagens'
    },
    {
      title: 'Controle de Leds para ESP32',
      description: 'Trabalho de IOT na ECT UFRN. A ideia seria criar um controlador remoto de leds ou demais coisas que fossem possíveis utilizar no ESP32. O projeto usa linguagem python, html e javascript além de protocolo MQTT para comunicação com hardware.',
      repoUrl: 'https://github.com/zzjunior/controleRGBWEB_MQTT',
      liveUrl: 'https://zzjunior.github.io/controleRGBWEB_MQTT/',
      images: ['./images/projeto-4.png'],
      languagesId: 'languages-used-2'
    },
    {
      title: 'Páginas de captura de Leads',
      description: 'Página de captura de Leads para compra de Site e Artes para vendedores Honda.',
      repoUrl: 'https://github.com/zzjunior/vendedor.site-cadastro',
      liveUrl: 'https://vendedor.site/cadastro',
      images: ['./images/projeto-5.png'],
      languagesId: 'languages-used-10'
    },
    {
      title: 'Plataforma de FAC para CRM',
      description: 'Neste projeto realizei a criação de uma site para dúvidas e sugestões de uma plataforma de CRM, onde são criados e postados tutoriais e vídeos de ajuda.',
      repoUrl: '',
      liveUrl: 'https://help.teiacrm.com.br',
      images: ['./images/projeto-6.png'],
      languagesId: 'languages-used-5'
    }
  ];

  const carouselInner = document.querySelector('.carousel-inner');
  projects.forEach((project, index) => {
    const isActive = index === 0 ? 'active' : '';
    const firstImageHtml = `<div class="col-3 d-flex justify-content-center"><img src="${project.images[0]}" class="img-fluid rounded-3 project-image" alt=""></div>`;
    const allImagesHtml = project.images.map(img => `<div class="col-3 d-flex justify-content-center"><img src="${img}" class="img-fluid rounded-3 project-image" alt=""></div>`).join('');
    const repoLink = project.repoUrl ? `<div class="text-start"><a href="${project.repoUrl}" rel="noopener" target="_blank" class="btn btn-dark text-white-50">Repositório <i class="fa-solid fa-code"></i></a></div>` : '';

    const projectHtml = `
      <div class="carousel-item ${isActive}">
        <div class="card text-white bg-transparent">
          <div class="card-body p-5 rounded-4">
            <h5 class="card-title text-start">${project.title}</h5>
            <p class="card-text text-start text-white-50 fs-6">${project.description}</p>
            <div id="${project.languagesId}" class="text-start text-white-50 mb-3" style="font-size: x-small;"></div>
            <div class="row text-start mb-3 g-2 first-image">
              ${firstImageHtml}
            </div>
            <div class="row text-start mb-3 g-2 all-images d-none">
              ${allImagesHtml}
            </div>
            <div class="text-start mb-2"><button class="btn btn-dark text-white-50 ver-mais"><i class="fa-regular fa-images"></i></button></div>
            <div class="text-start mb-2"><a href="${project.liveUrl}" rel="noopener" target="_blank" class="btn btn-dark text-white-50">Veja <i class="fa-solid fa-globe"></i></a></div>
            ${repoLink}
          </div>
        </div>
      </div>
    `;
    carouselInner.insertAdjacentHTML('beforeend', projectHtml);

    if (project.repoUrl) {
      fetch(`https://api.github.com/repos/${project.repoUrl.split('github.com/')[1]}/languages`)
        .then(response => response.json())
        .then(languages => {
          const totalBytes = Object.values(languages).reduce((acc, bytes) => acc + bytes, 0);
          const languagesList = Object.keys(languages)
            .map(lang => {
              const percentage = ((languages[lang] / totalBytes) * 100).toFixed(2);
              return `<li><i class="fa-solid fa-comment-nodes"></i> ${lang}: ${percentage}% <i class="fa-solid fa-chart-pie"></i></li>`;
            })
            .join('');
          document.getElementById(project.languagesId).innerHTML = `<ul>${languagesList}</ul>`;
        })
        .catch(error => console.error('Error fetching languages:', error));
    }
  });

  document.querySelectorAll('.ver-mais').forEach(button => {
    button.addEventListener('click', function () {
      const cardBody = this.closest('.card-body');
      cardBody.querySelector('.first-image').classList.toggle('d-none');
      cardBody.querySelector('.all-images').classList.toggle('d-none');
      this.innerHTML = this.innerHTML.includes('fa-images') ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-regular fa-images"></i>';
    });
  });

  // Adiciona evento de clique para abrir o modal ao clicar nas imagens
  document.querySelectorAll('.project-image').forEach(image => {
    image.addEventListener('click', function () {
      const modalImage = document.getElementById('modalImage');
      modalImage.src = this.src;
      const imageModal = new bootstrap.Modal(document.getElementById('imageModal'));
      imageModal.show();
    });
  });
});