export default function () {
  return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
}
