(() => {
  const $ = (s, c=document) => c.querySelector(s);
  const grid = $("#workGrid");
  const filterRow = $("#filterRow");
  const detail = $("#detail");
  let current = 0;
  let activeFilter = "all";

  const escapeHtml = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));

  function renderFilters(){
    filterRow.innerHTML = FILTERS.map(f => `<button type="button" class="${f.key===activeFilter?'active':''}" data-filter="${f.key}">${escapeHtml(f.label)}</button>`).join("");
  }

  function visibleProjects(){
    if(activeFilter === "all") return PROJECTS;
    if(activeFilter === "code") return PROJECTS.filter(p => p.kind === "code");
    return PROJECTS.filter(p => p.kind === activeFilter);
  }

  function renderGrid(){
    grid.innerHTML = visibleProjects().map(p => `
      <article class="project-card ${p.size}" data-slug="${p.slug}" tabindex="0" role="button" aria-label="${escapeHtml(p.title)} 상세 보기">
        <div class="project-image"><img src="${p.image}" alt="${escapeHtml(p.title)} 포트폴리오 이미지" loading="lazy" /><span class="status-badge">${escapeHtml(p.status)}</span></div>
        <div class="project-body"><div class="project-category">${escapeHtml(p.category)}</div><h3>${escapeHtml(p.title)}</h3><p>${escapeHtml(p.subtitle)}</p><div class="project-arrow"><span>VIEW PROJECT</span><i>→</i></div></div>
      </article>`).join("");
  }

  filterRow.addEventListener("click", e => {
    const btn = e.target.closest("button[data-filter]"); if(!btn) return;
    activeFilter = btn.dataset.filter; renderFilters(); renderGrid();
  });

  function projectIndex(slug){ return PROJECTS.findIndex(p => p.slug === slug); }

  function fillDetail(index, updateHash=true){
    const p = PROJECTS[index]; if(!p) return;
    current = index;
    $("#detailStatus").textContent = p.status;
    $("#detailCategory").textContent = p.category;
    $("#detailTitle").textContent = p.title;
    $("#detailSubtitle").textContent = p.subtitle;
    $("#detailDesc").textContent = p.desc;
    $("#detailImage").src = p.image;
    $("#detailImage").alt = `${p.title} 상세 포트폴리오 이미지`;
    $("#detailLink").href = p.link;
    $("#detailLinkLabel").textContent = p.linkLabel;
    $("#detailTags").innerHTML = p.tags.map(t => `<span>${escapeHtml(t)}</span>`).join("");
    $("#detailFeatures").innerHTML = p.features.map(f => `<li>${escapeHtml(f)}</li>`).join("");
    const next = PROJECTS[(index+1)%PROJECTS.length];
    $("#nextProjectTitle").textContent = next.title;
    $("#nextProject").dataset.slug = next.slug;
    detail.scrollTo({top:0, behavior:"instant"});
    if(updateHash) history.pushState({project:p.slug}, "", `#${p.slug}`);
  }

  function openDetail(index, updateHash=true){
    fillDetail(index, updateHash); detail.classList.add("open"); detail.setAttribute("aria-hidden","false"); document.body.classList.add("lock");
  }
  function closeDetail(updateHistory=true){
    detail.classList.remove("open"); detail.setAttribute("aria-hidden","true"); document.body.classList.remove("lock");
    if(updateHistory) history.pushState({}, "", location.pathname + location.search);
  }
  function move(delta){ fillDetail((current + delta + PROJECTS.length) % PROJECTS.length); }

  grid.addEventListener("click", e => { const card=e.target.closest(".project-card"); if(card) openDetail(projectIndex(card.dataset.slug)); });
  grid.addEventListener("keydown", e => { if(!["Enter"," "].includes(e.key)) return; const card=e.target.closest(".project-card"); if(card){e.preventDefault();openDetail(projectIndex(card.dataset.slug));} });
  $("#detailClose").addEventListener("click", () => closeDetail());
  $("#detailPrev").addEventListener("click", () => move(-1));
  $("#detailNext").addEventListener("click", () => move(1));
  $("#nextProject").addEventListener("click", e => { e.preventDefault(); fillDetail(projectIndex(e.currentTarget.dataset.slug)); });
  document.addEventListener("keydown", e => { if(!detail.classList.contains("open")) return; if(e.key==="Escape") closeDetail(); if(e.key==="ArrowLeft") move(-1); if(e.key==="ArrowRight") move(1); });
  window.addEventListener("popstate", () => { const idx=projectIndex(location.hash.slice(1)); if(idx>=0) openDetail(idx,false); else closeDetail(false); });

  $("#copyEmail").addEventListener("click", async () => {
    const email="pictory.droid@gmail.com", status=$("#copyStatus");
    try{ await navigator.clipboard.writeText(email); status.textContent="이메일 주소를 복사했습니다."; }
    catch{ status.textContent=email; }
    setTimeout(() => status.textContent="", 2800);
  });

  renderFilters(); renderGrid();
  const initial = projectIndex(location.hash.slice(1)); if(initial>=0) openDetail(initial,false);
})();
