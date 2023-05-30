const tableBody = document.getElementById('table-body');

let flights = [
  {
    time: '09:15',
    destinaion: 'BERLIN',
    flight: 'BX 204',
    gate: 'A 23',
    remarks: 'ON TIME'
  },
  {
    time: '09:30',
    destinaion: 'FRANKFURT',
    flight: 'FX 244',
    gate: 'A 03',
    remarks: 'ON TIME'
  },
  {
    time: '11:23',
    destinaion: 'MUNICH',
    flight: 'MX 984',
    gate: 'A 44',
    remarks: 'DELAYED'
  },
  {
    time: '12:34',
    destinaion: 'HAMBURG',
    flight: 'HX 894',
    gate: 'A 02',
    remarks: 'CANCELLED'
  },
  {
    time: '14:34',
    destinaion: 'COLOGNE',
    flight: 'CX 897',
    gate: 'A 07',
    remarks: 'CANCELLED'
  },
]

const destinations = ['BERLIN', 'FRANKFURT', 'MUNICH', 'HAMBURG', 'COLOGNE']
const remarks = ['ON TIME', 'DELAYED', 'CANCELLED']
let hour = 14

function populateTable() {
  for (const flight of flights) {
    const tableRow = document.createElement('tr')
    for (const flightDetail in flight) {
      const tableCell = document.createElement('td')
      const word = Array.from(flight[flightDetail])

      for (const [index, letter] of word.entries()) {
        const letterElement = document.createElement('div')

        setTimeout(() => {
          letterElement.classList.add('flip')
          letterElement.textContent = letter
          tableCell.append(letterElement)
        }, 100 * index)


      }
      tableRow.append(tableCell)
    }

    tableBody.append(tableRow)
  }
}

populateTable();

function generateRandomLetter() {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVW'
  return alphabet.charAt(Math.floor(Math.random() * alphabet.length))
}

function generateRandomNumber(maxNumber) {
  const numbers = '0123456789'
  if (maxNumber) {
    const newNumbers = numbers.slice(0, maxNumber)
    return newNumbers.charAt(Math.floor(Math.random() * newNumbers.length))
  }
  return numbers.charAt(Math.floor(Math.random() * numbers.length))
}

function generateTime() {
  let displayHour = hour

  if (hour < 24) {
    hour++
  }
  if (hour >= 24) {
    hour = 1
    displayHour = hour
  }
  if (hour < 10) {
    displayHour = '0' + hour
  }

  return displayHour + ':' + generateRandomNumber(5) + generateRandomNumber()
}

function shuffleUp() {
  flights.shift()
  flights.push({
    time: generateTime(),
    destination: destinations[Math.floor(Math.random() * destinations.length)],
    flight: generateRandomLetter() + generateRandomLetter() + ' ' + generateRandomNumber() + generateRandomNumber() + generateRandomNumber(),
    gate: generateRandomLetter() + ' ' + generateRandomNumber() + generateRandomNumber(),
    remarks: remarks[Math.floor(Math.random() * remarks.length)]
  })
  tableBody.textContent = ''
  populateTable()
}

setInterval(shuffleUp, 2000)
