
document.addEventListener('mousemove', function(e) {
    const cursor = document.getElementById('animated-cursor');
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
});