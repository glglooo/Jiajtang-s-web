// 设置版权年份
document.getElementById('year').textContent = new Date().getFullYear();

// 轮播图功能
class Carousel {
    constructor() {
        this.slides = document.querySelectorAll('.carousel-slide');
        this.dotsContainer = document.querySelector('.carousel-dots');
        this.currentSlide = 0;
        this.init();
    }

    init() {
        // 创建轮播点
        this.slides.forEach((_, index) => {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            dot.addEventListener('click', () => this.goToSlide(index));
            this.dotsContainer.appendChild(dot);
        });

        // 显示第一张图片
        this.showSlide(this.currentSlide);
        
        // 自动轮播
        setInterval(() => this.nextSlide(), 5000);
    }

    showSlide(index) {
        this.slides.forEach(slide => slide.classList.remove('active'));
        document.querySelectorAll('.dot').forEach(dot => dot.classList.remove('active'));
        
        this.slides[index].classList.add('active');
        document.querySelectorAll('.dot')[index].classList.add('active');
    }

    nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        this.showSlide(this.currentSlide);
    }

    goToSlide(index) {
        this.currentSlide = index;
        this.showSlide(this.currentSlide);
    }
}

// 微信二维码模态框
const modal = document.getElementById('wechatModal');
const wechatLink = document.querySelector('.wechat');
const closeBtn = document.querySelector('.close');

wechatLink.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// 页面加载完成后初始化轮播
document.addEventListener('DOMContentLoaded', () => {
    new Carousel();
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
}); 