 // Configuration
 const SEGMENT_COUNT = 20;
//  const SEGMENT_DELAY = 5;

 // Initialize snake segments
 const snakeContainer = document.getElementById('snake-container');
 const segments = [];

 for (let i = 0; i < SEGMENT_COUNT; i++) {
   const segment = document.createElement('div');
   segment.classList.add('snake-segment');
   segment.style.opacity = 1 - i / SEGMENT_COUNT;
   snakeContainer.appendChild(segment);
   segments.push({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
 }

 // Mouse position
 let mouseX = window.innerWidth / 2;
 let mouseY = window.innerHeight / 2;

 // Update mouse position on move
 document.addEventListener('mousemove', (e) => {
   mouseX = e.clientX;
   mouseY = e.clientY;
 });

 // Animation loop
 function animate() {
   // Update head position
   segments[0].x += (mouseX - segments[0].x) * 0.2;
   segments[0].y += (mouseY - segments[0].y) * 0.2;

   // Update tail segments
   for (let i = 1; i < SEGMENT_COUNT; i++) {
     segments[i].x += (segments[i - 1].x - segments[i].x) * 0.2;
     segments[i].y += (segments[i - 1].y - segments[i].y) * 0.2;
   }

   // Apply positions to DOM elements
   segments.forEach((segment, index) => {
     const domSegment = snakeContainer.children[index];
     domSegment.style.transform = `translate(${segment.x - 7.5}px, ${segment.y - 7.5}px)`;
   });

   requestAnimationFrame(animate);
 }

 // Start animation
 animate();