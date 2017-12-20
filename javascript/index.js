window.onload = function () {

  var conektaOne = window.Conekta
  var conektaTwo = window.Conekta
  var conektathree = window.Conekta
  var conektaFour = window.Conekta
  var conektaFive = window.Conekta

  conektaOne.init('key_GyzteDtNTx36v2vYU3kzBXg', {
    cardNumber: {
      id: 'card-number-1',
      style: {
        'padding': '5px 10px',
        'font-size': '15px',
        'border': '1px solid rgb(204, 204, 204)',
        'border-radius': '5px',
      },
      placeholder: 'Numero de tarjeta'
    },
    cvc: {
      id: 'cvc-number-1',
      style: {
        'padding': '5px 10px',
        'border': '1px solid rgb(204, 204, 204)',
        'border-radius': '5px',
        'font-size': '15px',
      },
      placeholder: 'Cvv'
    },
  })

  conektaTwo.init('key_GyzteDtNTx36v2vYU3kzBXg', {
    cardNumber: {
      id: 'card-number-2',
      style: {
        'padding': '5px 10px',
        'font-size': '15px',
        'border': '1px solid rgb(204, 204, 204)',
        'border-radius': '5px',
      },
      placeholder: ' '
    },
    cvc: {
      id: 'cvc-number-2',
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
      id: 'card-number-3',
      style: {
        'padding': '5px 10px',
        'font-size': '15px',
        'border': '1px solid rgb(204, 204, 204)',
        'border-radius': '5px',
      },
      placeholder: 'Numero de tarjeta'
    },
    cvc: {
      id: 'cvc-number-3',
      style: {
        'padding': '5px 10px',
        'border': '1px solid rgb(204, 204, 204)',
        'border-radius': '5px',
        'font-size': '15px',
      },
      placeholder: 'Cvv'
    },
  })


    conektaFour.init('key_GyzteDtNTx36v2vYU3kzBXg', {
    cardNumber: {
      id: 'card-number-4',
      style: {
        'padding': '5px 10px',
        'font-size': '15px',
        'border': '1px solid rgb(204, 204, 204)',
        'border-radius': '5px',
      },
      placeholder: ' '
    },
    cvc: {
      id: 'cvc-number-4',
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
      id: 'card-number-5',
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
      id: 'cvc-number-5',
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

  //TODO - Put logic to get all forms work
  var form = document.getElementById('form-1')

  form.onsubmit = (event) => {
    event.preventDefault()
    var button = document.getElementById('tokenize-btn')
    var name   = document.getElementById('tarjetahabiente')
    var month  = document.getElementById('month') 
    var year  = document.getElementById('year') 
    // button.disabled = true
    console.log(month.value);
    console.log(year.value);
    window.Conekta.tokenize({
      name: name.value,
      expMonth: month.value,
      expYear: year.value
    }, function (err, token) {
      if (err) {
        console.log(err);
        window.alert('error ' + err)
      } else {
        window.alert('token: ' + token.id)
      }
    })
  }

}
