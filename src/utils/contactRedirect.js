// Global click delegation to redirect CTA-like elements to /contact
(function initContactRedirect() {
  if (typeof window === 'undefined' || !document) return;

  function isExternalAnchor(anchor) {
    const href = anchor.getAttribute('href');
    if (!href) return false;
    return /^(https?:)?\/\//i.test(href) || href.startsWith('mailto:') || href.startsWith('tel:');
  }

  function shouldRedirect(el) {
    if (!el) return false;
    // opt-out
    if (el.closest('[data-no-redirect]')) return false;
    // don't interfere with forms
    if (el.closest('form')) return false;
    // don't intercept if anchor is external or already points elsewhere
    if (el.tagName === 'A') {
      if (isExternalAnchor(el)) return false;
      const href = el.getAttribute('href') || '';
      if (href.startsWith('#') || href.includes('/contact')) return false;
    }
    // common class-name cues
    const cls = (el.className && typeof el.className === 'string') ? el.className : '';
    if (/(\bbtn\b|\bbutton\b|\bcta\b|\bcontact\b|\bsend\b|\bsubmit\b)/i.test(cls)) return true;
    if (el.tagName === 'BUTTON') return true;
    if (el.getAttribute && el.getAttribute('role') === 'button') return true;
    return false;
  }

  function findCandidate(target) {
    if (!target) return null;
    return target.closest('a, button, [role="button"], [class]');
  }

  document.addEventListener('click', function (e) {
    const target = findCandidate(e.target);
    if (!target) return;
    try {
      if (shouldRedirect(target)) {
        e.preventDefault();
        // use router-safe navigation: update location
        window.location.href = '/contact';
      }
    } catch (err) {
      // swallow errors to avoid blocking UI
      // console.error(err);
    }
  }, { capture: true });
})();
