window.onload = function () {
  
  var conektaOne = window.Conekta
  var conektaTwo = window.Conekta
  var conektathree = window.Conekta
  var conektaFour = window.Conekta
  var conektaFive = window.Conekta

  conektaOne.init('key_GyzteDtNTx36v2vYU3kzBXg', {
    cardNumber: {
      id: 'form-card-1',
      style: {
        'padding': '5px 10px',
        'font-size': '15px',
        'border': '1px solid rgb(204, 204, 204)',
        'border-radius': '5px',
      },
      placeholder: 'Numero de tarjeta'
    },
    cvc: {
      id: 'form-cvc-1',
      style: {
        'padding': '5px 10px',
        'border': '1px solid rgb(204, 204, 204)',
        'border-radius': '5px',
        'font-size': '15px',
      },
      placeholder: 'Cvc'
    },
  })

  conektaTwo.init('key_GyzteDtNTx36v2vYU3kzBXg', {
    cardNumber: {
      id: 'form-card-2',
      style: {
        'padding': '5px 10px',
        'font-size': '15px',
        'border': '1px solid rgb(204, 204, 204)',
        'border-radius': '5px',
      },
      placeholder: ' '
    },
    cvc: {
      id: 'form-cvc-2',
      style: {
        'padding': '5px 10px',
        'border': '1px solid rgb(204, 204, 204)',
        'border-radius': '5px',
        'font-size': '15px',
      },
      placeholder: ' '
    },
  })

    conektathree.init('key_GyzteDtNTx36v2vYU3kzBXg', {
    cardNumber: {
      id: 'form-card-3',
      style: {
        'padding': '5px 10px',
        'font-size': '15px',
        'border': '1px solid rgb(204, 204, 204)',
        'border-radius': '5px',
      },
      placeholder: 'Numero de tarjeta'
    },
    cvc: {
      id: 'form-cvc-3',
      style: {
        'padding': '5px 10px',
        'border': '1px solid rgb(204, 204, 204)',
        'border-radius': '5px',
        'font-size': '15px',
      },
      placeholder: 'Cvc'
    },
  })

    conektaFour.init('key_GyzteDtNTx36v2vYU3kzBXg', {
    cardNumber: {
      id: 'form-card-4',
      style: {
        'padding': '5px 10px',
        'font-size': '15px',
        'border': '1px solid rgb(204, 204, 204)',
        'border-radius': '5px',
      },
      placeholder: ' '
    },
    cvc: {
      id: 'form-cvc-4',
      style: {
        'padding': '5px 10px',
        'border': '1px solid rgb(204, 204, 204)',
        'border-radius': '5px',
        'font-size': '15px',
      },
      placeholder: ' '
    },
  })
  conektaFive.init('key_GyzteDtNTx36v2vYU3kzBXg', {
    cardNumber: {
      id: 'form-card-5',
      style: {
        'padding': '5px 10px',
        'font-size': '15px',
        'border-left': '2px solid rgb(204, 204, 204)',
        'border-top': '2px solid rgb(204, 204, 204)',
        'border-bottom': '2px solid rgb(204, 204, 204)',
        'border-right': '0px',
      },
      placeholder: 'Card '
    },
    cvc: {
      id: 'form-cvc-5',
      style: {
        'padding': '5px 10px',
        'font-size': '15px',
        'border-right': '2px solid rgb(204, 204, 204)',
        'border-bottom': '2px solid rgb(204, 204, 204)',
        'border-top': '2px solid rgb(204, 204, 204)',
        'border-left': '0px',
      },
      placeholder: 'CVC'
    },
  })

  var form1 = document.getElementById('form-1');
  var form2 = document.getElementById('form-2');
  var form3 = document.getElementById('form-3');
  var form4 = document.getElementById('form-4');
  var form5 = document.getElementById('form-5');

  form1.onsubmit = (event) => {
    event.preventDefault()
    let formName   = document.getElementById('form-name-1')
    let formMonth  = document.getElementById('form-month-1') 
    let formYear   = document.getElementById('form-year-1') 
    
    conektaOne.tokenize({
      name:     formName.value,
      expMonth: formMonth.value,
      expYear:  formYear.value

    }, function (err, token) {
      triggerAction(err, token, 1)
   })
  }

  form2.onsubmit = (event) => {
    event.preventDefault()
    let formName   = document.getElementById('form-name-2')
    let formMonth  = document.getElementById('form-month-2') 
    let formYear   = document.getElementById('form-year-2') 
    
    conektaTwo.tokenize({
      name:     formName.value,
      expMonth: formMonth.value,
      expYear:  formYear.value

    }, function (err, token) {
      triggerAction(err, token, 2)
   })
  }

  form3.onsubmit = (event) => {
    event.preventDefault()
    let formName  = document.getElementById('form-name-3')
    let date      = document.getElementById('form-date-3').value.split('/')


    conektathree.tokenize({
      name:     formName.value,
      expMonth: date[0],
      expYear:  date[1]

    }, function (err, token) {
      triggerAction(err, token, 3)
   })
  }

  form4.onsubmit = (event) => {
    event.preventDefault()
    let formName = document.getElementById('form-name-4')
    let date     = document.getElementById('form-date-4').value.split('/')

    
    conektaFour.tokenize({
      name:     formName.value,
      expMonth: date[0],
      expYear:  date[1]

    }, function (err, token) {
      triggerAction(err, token, 4)
   })
  }

  form5.onsubmit = (event) => {
    event.preventDefault()
    let formName = document.getElementById('form-name-1')
    let date     = document.getElementById('form-date-5').value.split('/')
    
    conektaFive.tokenize({
      name:     formName.value,
      expMonth: date[0],
      expYear:  date[1]

    }, function (err, token) {
      triggerAction(err, token, 5)
   })
  }

function triggerAction (err, token, formNumber) {
  if (err){
      document.getElementById('form-token-'+formNumber).style.visibility = 'hidden'
      document.getElementById('form-errors-'+formNumber).style.visibility = 'visible'
      document.getElementById('form-errors-'+formNumber).style.opacity    = '1'         
      if (!err.card) {
        document.getElementById('form-errors-'+formNumber).innerHTML = '</div> The card number is invalid</div>';
      }else if (!err.cvc) {
        document.getElementById('form-errors-'+formNumber).innerHTML = '</div> The cvc is invalid</div>';
      } else if (!err.date) {
        document.getElementById('form-errors-'+formNumber).innerHTML = '</div> The date format is invalid</div>';
      }
    } else {
      document.getElementById('form-errors-'+formNumber).style.visibility = 'hidden'
      document.getElementById('form-token-'+formNumber).style.visibility = 'visible'
      document.getElementById('form-token-'+formNumber).style.opacity    = '1'         
      document.getElementById('form-token-'+formNumber).innerHTML = '</div> token id :'+token.id+'</div>';
    }
  }
}
