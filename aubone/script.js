function showBoneDetail(boneName, boneDescription) {
  document.getElementById('bone-name').innerText = boneName;
  document.getElementById('bone-description').innerText = boneDescription;
  document.getElementById('bone-detail').classList.remove('hidden');
}

function hideBoneDetail() {
  document.getElementById('bone-detail').classList.add('hidden');
}
