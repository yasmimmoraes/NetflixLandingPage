function toggleVideo() {
    const trailer = document.querySelector('.trailer');
    const video = document.querySelector('Video');
    trailer.classList.toggle('active');

    video.currentTime = 0;
    video.pause();
}