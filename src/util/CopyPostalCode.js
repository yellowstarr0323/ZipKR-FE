// 클립보드에 데이터를 복사하는 utill 함수
export async function copyToClipboard(text) {
  await navigator.clipboard.writeText(text)
  alert("복사되었습니다.")
}