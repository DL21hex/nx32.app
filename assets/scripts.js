function initLucide(){window.lucide&&typeof window.lucide.createIcons==="function"&&window.lucide.createIcons()}const init=()=>{initLucide();const roleData={CEO:{title:"Time-to-Market Instantáneo",desc:"nx32 elimina la deuda técnica antes de que exista. Lance productos globales instantáneamente y reduzca costos operativos (OpEx) drásticamente gracias a la eficiencia serverless.",stat:"40% Reducción de TCO",icon:"globe"},CTO:{title:"Ingeniería en Rust & WASM",desc:"Olvide los problemas de memoria y los cuellos de botella legacy. Un sistema tipado, seguro y distribuido globalmente. La infraestructura que Google desearía tener internamente.",stat:"<5ms Latencia Global",icon:"cpu"},CISO:{title:"Zero-Trust & Dark Services",desc:"Nuestros servicios backend no tienen IP pública. Todo pasa por un Gateway estricto con validación criptográfica. Reduzca su superficie de ataque a cero absoluto.",stat:"100% Aislamiento de Red",icon:"shield"}};const buttons=document.querySelectorAll('.role-tab-btn'),container=document.getElementById('role-content-container'),roleTitle=document.getElementById('role-title'),roleDesc=document.getElementById('role-desc'),roleStat=document.getElementById('role-stat'),roleIconContainer=document.getElementById('role-icon-container');const updateButton=(btn,isActive)=>{const roleName=btn.querySelector('.role-name'),iconContainer=btn.querySelector('.icon-container'),iconArrow=btn.querySelector('.icon-arrow');if(isActive){btn.classList.add('active-tab','bg-white/5','border-cyan-500/50','shadow-[0_0_30px_rgba(6,182,212,0.1)]','backdrop-blur-sm'),btn.classList.remove('border-transparent'),roleName&&(roleName.classList.remove('text-slate-500'),roleName.classList.add('text-white')),iconContainer&&(iconContainer.classList.remove('bg-white/5'),iconContainer.classList.add('bg-cyan-500/20')),iconArrow&&(iconArrow.classList.remove('text-slate-600'),iconArrow.classList.add('text-cyan-400'))}else{btn.classList.remove('active-tab','bg-white/5','border-cyan-500/50','shadow-[0_0_30px_rgba(6,182,212,0.1)]','backdrop-blur-sm'),btn.classList.add('border-transparent'),roleName&&(roleName.classList.remove('text-white'),roleName.classList.add('text-slate-500')),iconContainer&&(iconContainer.classList.remove('bg-cyan-500/20'),iconContainer.classList.add('bg-white/5')),iconArrow&&(iconArrow.classList.remove('text-cyan-400'),iconArrow.classList.add('text-slate-600'))}};const updateContent=role=>{const data=roleData[role];roleTitle.textContent=data.title,roleDesc.textContent=`"${data.desc}"`,roleStat.textContent=data.stat,roleIconContainer&&window.lucide&&typeof window.lucide.createIcons==="function"&&(roleIconContainer.innerHTML=`<i data-lucide="${data.icon}" class="w-8 h-8 text-cyan-400"><\/i>`,setTimeout(()=>window.lucide.createIcons(),0)),container.classList.remove('animate-in'),void container.offsetWidth,container.classList.add('animate-in')};buttons.forEach(btn=>{btn.addEventListener('click',()=>{buttons.forEach(b=>updateButton(b,!1)),updateButton(btn,!0),updateContent(btn.dataset.role)})})};document.readyState==='loading'?document.addEventListener('DOMContentLoaded',init):init();const showContent=()=>{if(document.body.classList.contains('content-ready'))return;document.body.classList.add('content-ready'),document.body.style.overflow='auto';const loadingScreen=document.getElementById('loading-screen');loadingScreen&&(loadingScreen.style.opacity='0',loadingScreen.style.pointerEvents='none',setTimeout(()=>{loadingScreen.style.display='none'},500))};window.addEventListener('load',()=>{window.lucide&&typeof window.lucide.createIcons==="function"&&window.lucide.createIcons(),setTimeout(showContent,300)}),setTimeout(()=>{document.body.classList.contains('content-ready')||showContent()},6000);

/* Grid Animation - Optimizado para rendimiento */
const initGridAnimation = () => {
	const gridGlow = document.getElementById('gridGlow');
	if (!gridGlow) return;

	const cols = Math.ceil(window.innerWidth / 40);
	const rows = Math.ceil(window.innerHeight / 40);
	const cellPool = [];
	const MAX_CELLS = 20; // Limitar cantidad de celdas activas
	let activeCells = 0;

	// Pre-crear pool de celdas para reutilización
	const createCellPool = () => {
		for (let i = 0; i < MAX_CELLS; i++) {
			const cell = document.createElement('div');
			cell.className = 'grid-cell';
			cell.style.display = 'none';
			gridGlow.appendChild(cell);
			cellPool.push(cell);
		}
	};

	const activateRandomCell = () => {
		if (activeCells >= MAX_CELLS) return; // No exceder límite

		const cellCount = Math.min(3 + Math.floor(Math.random() * 3), MAX_CELLS - activeCells);

		for (let i = 0; i < cellCount; i++) {
			if (activeCells >= MAX_CELLS) break;

			const cell = cellPool[activeCells];
			const randomCol = Math.floor(Math.random() * cols);
			const randomRow = Math.floor(Math.random() * rows);

			cell.style.left = (randomCol * 40) + 'px';
			cell.style.top = (randomRow * 40) + 'px';
			cell.style.display = 'block';
			cell.classList.add('active');

			activeCells++;

			setTimeout(() => {
				cell.classList.remove('active');
				cell.style.display = 'none';
				activeCells--;
			}, 1000);
		}
	};

	createCellPool();
	setInterval(activateRandomCell, 350 + Math.random() * 300);
};

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', initGridAnimation);
} else {
	initGridAnimation();
}
