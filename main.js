document.addEventListener("DOMContentLoaded", (event) => {
    const input = document.getElementById('input')
    const main = document.getElementById('main')
    const copy = document.getElementById('copy')
    const bodyHTML = document.getElementById('body').innerHTML
    const input2 = document.getElementById('input2')

    function write(text) {
        document.getElementById('copy').innerHTML = text
    }

    input.addEventListener('input', () => {
         if (input.value.toLowerCase() === 'self destruct'.toLowerCase()) {
            write('If you say so...')
            setTimeout(() => {
                write(3)
                setTimeout(function() {
                    write(2)
                    setTimeout(function() {
                        write(1)
                        setTimeout(function() {
                            clear()
                            setTimeout(function() {
                                repairButton()
                            }, 2000)
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }
        else if (input.value.toLowerCase() === 'I want something else'.toLowerCase()) {
            somethingElse()
            write(input.value)
        }
        else if (input.value.toLowerCase() !== 'I want something else'.toLowerCase()) {
          write(input.value)
          input2.style.display = 'none'
        }
        else write(input.value)
    })

    input2.addEventListener('input', () => {
      if (input2.value.toLowerCase() === 'self destruct'.toLowerCase()) {
        write2('If you say so...')
        setTimeout(() => {
            write2(3)
            setTimeout(function() {
                write2(2)
                setTimeout(function() {
                    write2(1)
                    setTimeout(function() {
                        clear()
                        setTimeout(function() {
                            repairButton()
                        }, 2000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }
      else if (input2.value.toLowerCase() === 'I need more'.toLowerCase()) {
        input3.style.display = 'block'
        write2(input2.value)
      }
      else if (input2.value.toLowerCase() !== 'I need more'.toLowerCase()) {
      write2(input2.value)
      input3.style.display = 'none'
      }
      else {
          write2(input2.value)
        }
    })

    input3.addEventListener('input', () => {
      write3(input3.value)
      if (input3.value.toLowerCase() === 'self destruct'.toLowerCase()) {
        write3('If you say so...')
        setTimeout(() => {
            write3(3)
            setTimeout(function() {
                write3(2)
                setTimeout(function() {
                    write3(1)
                    setTimeout(function() {
                        clear()
                        setTimeout(function() {
                            repairButton()
                        }, 2000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }
      else if (input3.value === '') {
        repairAll()
      }
    })

    function clear() {
        document.getElementById('body').innerHTML = ''
    }

    function repairButton() {
        const button = document.createElement('button')
        button.setAttribute('type', 'button')
        button.setAttribute('id', 'button')
        button.setAttribute('onclick', 'repair()')
        button.setAttribute('class', 'button')
        button.innerHTML = 'Repair'
        document.body.appendChild(button)
    }

    function somethingElse() {
        input2.style.display = 'block'
    }

    function repairAll() {
      document.getElementById('main').innerHTML = 'Type anything and see what happens!'
      write(input.value)
      write2(input2.value)
    }

    function write2(text) {
      document.getElementById('copy2').innerHTML = text
    }

    function write3(text) {
      document.getElementById('main').innerHTML = text
      document.getElementById('copy3').innerHTML = text
      write(text)
      write2(text)
    }


    input2.style.display = 'none'

    input3.style.display = 'none'

    input.style.display = 'block'
});

function repair() {
  location.reload()
}