/**
 * Load projects from data/projects.json and render into #projects-container.
 * To add a project: edit data/projects.json and add a new object with title, description, tech[], link (or null).
 */
(function () {
  const container = document.getElementById('projects-container');
  if (!container) return;

  fetch('data/projects.json')
    .then(function (res) { return res.ok ? res.json() : Promise.reject(res); })
    .then(function (projects) {
      container.innerHTML = projects.map(function (p) {
        const techList = (p.tech || []).map(function (t) { return '<li>' + escapeHtml(t) + '</li>'; }).join('');
        const linkHtml = p.link
          ? '<a href="' + escapeHtml(p.link) + '" class="project-link" target="_blank" rel="noopener">View</a>'
          : '';
        return (
          '<article class="project-card">' +
            '<h3 class="project-title">' + escapeHtml(p.title) + '</h3>' +
            '<p class="project-description">' + escapeHtml(p.description) + '</p>' +
            '<ul class="project-tech">' + techList + '</ul>' +
            (linkHtml ? '<p class="project-links">' + linkHtml + '</p>' : '') +
          '</article>'
        );
      }).join('');
    })
    .catch(function () {
      container.innerHTML = '<p class="projects-error">Projects could not be loaded. Check <code>data/projects.json</code>.</p>';
    });

  function escapeHtml(text) {
    var div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
})();
