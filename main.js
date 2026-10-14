const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.1});
document.querySelectorAll('.rv').forEach(el=>io.observe(el));
document.getElementById('f').addEventListener('submit',e=>{e.preventDefault();e.target.innerHTML='<h3 style="font-size:2rem">Ďakujeme, ozveme sa Vám.</h3><p style="color:#b9b5ae">Ukážka formulára – v hotovej verzii chodia správy a objednávky priamo na Váš e-mail.</p>'});
