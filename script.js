const { sdk } = window.FarcasterMiniApp;

document.getElementById('tossBtn').addEventListener('click', () => {
  const outcomes = ["Sấp 🪙", "Ngửa 🪙"];
  const result = outcomes[Math.floor(Math.random() * outcomes.length)];
  document.getElementById('result').textContent = result;

  // Báo Farcaster biết app đã sẵn sàng (quan trọng)
  sdk.actions.ready();

  // (Tùy chọn) chia sẻ kết quả lên feed
  // sdk.actions.shareText(`Mình vừa tung được ${result}!`);
});
