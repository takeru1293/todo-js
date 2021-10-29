const onClickAdd = () => {
  // テキストボックスの値を取得
  const inputText = document.getElementById("add-text").value;
  // テキストボックスの値を削除
  document.getElementById("add-text").value = "";

  // divタグの生成
  const divTag = document.createElement("div");
  divTag.className = "list-row";

  // liタグの生成
  const liTag = document.createElement("li");
  liTag.innerText = inputText;

  // 完了buttonタグの作成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  // 削除buttonタグの作成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  // 戻るボタンの作成
  const returnButton = document.createElement("button");
  returnButton.innerText = "戻る";

  // 削除の処理追加
  deleteButton.addEventListener("click", () =>
    deleteForm(deleteButton.parentElement, "incomplete-list")
  );
  // 完了の処理追加
  completeButton.addEventListener("click", () =>
    moveForm(completeButton, deleteButton, returnButton)
  );

  // 戻るの処理
  returnButton.addEventListener("click", () =>
    returnForm(completeButton, deleteButton, returnButton)
  );
  //divタグの子要素にliタグを追加
  divTag.appendChild(liTag);
  divTag.appendChild(completeButton);
  divTag.appendChild(deleteButton);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(divTag);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

// 未完了リストから削除
const moveForm = (targetB, deleteB, returnB) => {
  const moveTarget = targetB.parentElement;

  // buttonの削除と生成
  moveTarget.removeChild(targetB);
  moveTarget.removeChild(deleteB);
  moveTarget.appendChild(returnB);

  // 押された削除ボタンの親タグを削除
  deleteForm(moveTarget, "incomplete-list");
  // 追加
  document.getElementById("complete-list").appendChild(moveTarget);
};

// 未完了リストから削除
const deleteForm = (target, area) => {
  document.getElementById(area).removeChild(target);
};

// 完了リストから未完了リストに戻す
const returnForm = (deleteB, moveB, targetB) => {
  const moveTarget = targetB.parentElement;

  // buttonの削除と生成
  moveTarget.removeChild(targetB);
  moveTarget.appendChild(deleteB);
  moveTarget.appendChild(moveB);

  // 押された削除ボタンの親タグを削除
  deleteForm(moveTarget, "complete-list");
  // 追加
  document.getElementById("incomplete-list").appendChild(moveTarget);
};
