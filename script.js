const names = []

const handleEmpty = () => {
  names.length
    ? $('#start').removeAttr('disabled')
    : $('#start').attr('disabled')
}

$('#form').submit(e => {
  e.preventDefault()
  const inputNama = $('#input-nama').val()
  if(!inputNama){
    return false
  }
  names.push(inputNama)

  let tr = `<tr>
    <td width="80%">
    <span id="nama">${inputNama}</span>
    </td>
    <td>
      <button type="button" class="btn btn-sm btn-danger remove">X</button>
    </td>
  </tr>`
  $('#table').append(tr)
  $('#input-nama').val('')
  handleEmpty()
})

// START BUTTON
const acakNama = () => {
  const namesLength = names.length
  
  const acak = setInterval(() => {
    let randomAngka = Math.floor(Math.random() * namesLength)
    $('#result').text(names[randomAngka])
  }, 50);

  setTimeout(() => {
    clearInterval(acak)
  }, 5000);
}
$('#start').click(acakNama)

// REMOVE ROW
$('#table').on('click', '.remove', function(){
  $(this).parent().parent().remove()
  console.log($(this).parent().parent().children().first().children()[0])
})





















