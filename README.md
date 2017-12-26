# Conekta SDK examples

<hr>

Examples page show a list of different form distribution options that you can implement to your own checkout.
All javascript and styles will be linked bellow

<a href="https://conekta.github.io/examples-sdk/">Examples Live!</a>  also you can check class <a href="https://github.com/conekta/examples-sdk/blob/master/css/main.css">CSS styles here!</a>


## Basic form with placeholder

This form shows `rounded` inpus with `placeholder` passed through in your initialization

```javascript
  conektaOne.init('api-key', {
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
```

```html
  <form id="form-1" autocomplete="on">
    <div class="field">
      <input type="text" id="form-name-1" placeholder="Nombre del tarjeta habiente">
    </div>
    <div class="field" id="form-card-1" style="height: 40px"></div>
    <div class="field" id="form-cvc-1" style="height: 40px"></div>
    <div class="field-inline">
      <div class="left">
        <input type="text" id="form-month-1" placeholder="Mes [02]">
      </div>
      <div class="right">
        <input  type="text" id="form-year-1" placeholder="Año [1994]">
      </div>
    </div>
    <div class="field pay-button">
      <input type="submit" value='Pay'>
    </div>
  </form>
```


## Basic form with label

This form shows inputs without `placeholder` 

```javascript
conektaTwo.init('api-key', {
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
```

```html
 <form id="form-2" autocomplete="on">
    <div class="field">
      <label for="name">Nombre del tarjeta habiente</label>
      <input type="text" id="form-name-2" >
    </div>
    <div class="field" id="form-card-2" style="height: 50px">
      <label for="">Numero de tarjeta</label>
    </div>
    <div class="field" id="form-cvc-2" style="height: 50px">
      <label for="">Cvc</label>
    </div>
    <div class="field-inline">
      <div class="left">
        <label for="date">Mes</label>
        <input type="text" id="form-month-2" >
      </div>
      <div class="right">
        <label for="date">Año</label>
        <input type="text" id="form-year-2" >            
      </div>
    </div>
    <div class="field pay-button">
      <input type="submit" value='Pay'>
    </div>
 </form>
```

## Custom form with custom date and placeholder

This example shows a different distribution with `placeholder` 

```javascript
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
```

```html
<form id="form-3" autocomplete="on">
	<div class="field">
	  <input type="text" id="form-name-3" placeholder="Nombre del tarjeta habiente">
	</div>
	<div class="field" id="form-card-3" style="height: 40px"></div>
	<div class="field-inline">
	  <input class="left" type="text" id="form-date-3" placeholder="MM / YYYY " onkeyup="dateMask(this)" maxlength="7">
	  <div class="right" id="form-cvc-3" style="height: 40px; display: inline-block;"></div>
	</div>
	<div class="field pay-button">
	  <input type="submit" value='Pay'>
	</div>
</form>
```

## Custom form with custom date

This example shows the same distribution of before example but with labels over the input fields

```javascript
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
```

```html
<form id="form-4" autocomplete="on">
	<div class="field">
	  <label for="name">Nombre del tarjeta habiente</label>
	  <input type="text" id="form-name-4" >
	</div>
	<div class="field" id="form-card-4" style="height: 40px">
	  <label for="">Numero de tarjeta</label>
	</div>
	<div class="field-inline">
	  <div class="left">
	    <label for="date">Expiracion (mm/yyyy)</label>
	    <input  type="text" id="form-date-4" onkeyup="dateMask(this)" maxlength="7">  
	  </div>
	  <div class="right">
	    <label for="date">Cvc</label>
	    <div id="form-cvc-4" style="height: 40px; display: inline-block;"></div>
	  </div>
	</div>
	<div class="field pay-button">
	  <input type="submit" value='Pay'>
	</div>
</form>
```

## inline form

This is a inline form with `placeholder` text inside inputs

```javascript
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
 ```

```html
 <form id="form-5" >
    <div class="field">
      <input type="text" id="form-name-5" placeholder="Nombre del tarjeta habiente">
    </div>
    <div class="field-inline">
     <div class="grid-2" id="form-card-5" style="height: 40px; display:  inline-block;"></div>
     <input class="grid-1"  type="text" id="form-date-5" placeholder="MM/YYYY" maxlength="7" onkeyup="dateMask(this)">  
     <div class="grid-1" id="form-cvc-5" style="height: 40px; display: inline-block;"></div>
   </div>

   <div class="field pay-button">
    <input type="submit" value='Pay'>
  </div>
</form>
```
