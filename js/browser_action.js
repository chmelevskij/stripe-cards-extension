
window.onload = async () => {
  console.log('one day this will be dynamic')
  console.log(document.querySelectorAll('.card-number'));
  try {
    await navigator.clipboard.writeText('mememememe');
    console.log('written to clipboard');
  } catch(error) {
    console.error(error);
  }
}
