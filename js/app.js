/**
 * LUU HIEN DUNG SPACE - COMPONENT LOADER & CORE SCRIPTS
 * Tự động nạp các khối giao diện (header, hero, about, projects, footer)
 */

document.addEventListener('DOMContentLoaded', async () => {
  // 1. Tự động nạp tất cả các phần có thuộc tính data-component
  await loadAllComponents();

  // 2. Khởi tạo các hành vi tương tác sau khi nạp xong HTML
  initHeaderInteractions();
  initSmoothScroll();
});

/**
 * Nạp tuần tự các khối component
 */
async function loadAllComponents() {
  const containers = document.querySelectorAll('[data-component]');
  
  for (const el of containers) {
    const file = el.getAttribute('data-component');
    try {
      const response = await fetch(file);
      if (response.ok) {
        const html = await response.text();
        el.outerHTML = html; // Thay thế container bằng nội dung thật
      } else {
        console.warn(`[Component Loader] Không thể nạp: ${file} (Mã lỗi: ${response.status})`);
      }
    } catch (err) {
      console.warn(`[Component Loader] Lỗi khi nạp ${file}:`, err);
    }
  }
}

/**
 * Khởi tạo tương tác cho Header (Hiệu ứng cuộn và Menu di động)
 */
function initHeaderInteractions() {
  const header = document.querySelector('.site-header');
  const toggleBtn = document.querySelector('.mobile-toggle');
  const nav = document.querySelector('.site-nav');

  // Hiệu ứng đổ bóng và tăng độ đục khi cuộn trang
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // Nút mở/đóng menu trên điện thoại
  if (toggleBtn && nav) {
    toggleBtn.addEventListener('click', () => {
      nav.classList.toggle('open');
      const isExpanded = nav.classList.contains('open');
      toggleBtn.setAttribute('aria-expanded', isExpanded);
    });

    // Đóng menu khi bấm vào link bất kỳ
    nav.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        toggleBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }
}

/**
 * Cuộn trang mượt mà khi bấm menu
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = 90;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}
