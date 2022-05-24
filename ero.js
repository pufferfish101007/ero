console.log('ERO v1.0.0');
const ZWNJ = '‌'; // zero-width non-joiner (U2000)
const words = ['wordle', 'firefox', 'edge', 'powershell'];
const t = _ => {
  for (const w of words) {
    document.title = 'test';
    document.title = document.title.replaceAll(new RegExp(w, 'ig'), m => m[0] + ZWNJ + m.slice(1))
  }
  requestAnimationFrame(t)
}
requestAnimationFrame(t);
