(() => {
  const originalAlert = window.alert;
  const originalConfirm = window.confirm;
  const originalPrompt = window.prompt;

  window.alert = (message) => {
    return originalConfirm("No! Original Confirm says:   " + message);
  };

  window.confirm = (message) => {
    return originalPrompt("No!  Original Prompt says:  " + message);
  };
  
  window.prompt = (message) => {
    return originalAlert("No! Original Alert says:  " + message);
  };
})();

function showAlert() {
  alert("sory it is Confirm");
}

function showConfirm() {
  confirm("sory it is Prompt");
}

function showPrompt() {
  prompt("sory it is Alert");
}
