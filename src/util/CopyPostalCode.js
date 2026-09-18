export async function copyToClipboard(text) {
  await navigator.clipboard.writeText(text)
  alert("복사되었습니다.")
}